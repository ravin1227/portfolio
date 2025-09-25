import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    // Fetch the GitHub profile page HTML
    const response = await fetch(`https://github.com/${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub profile: ${response.status}`);
    }

    const html = await response.text();

    // Extract contribution data from the HTML
    const contributionData = parseContributionData(html);

    return NextResponse.json({
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: contributionData
          }
        }
      }
    });

  } catch (error) {
    console.error('Error scraping GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to scrape GitHub data' },
      { status: 500 }
    );
  }
}

function parseContributionData(html: string) {
  try {
    // Look for the contribution calendar data in the HTML
    // GitHub stores contribution data in data attributes or script tags

    // Extract total contributions
    const totalMatch = html.match(/(\d+)\s+contributions?\s+in\s+the\s+last\s+year/i) ||
                      html.match(/(\d+)\s+contributions?\s+in\s+\d{4}/i);
    const totalContributions = totalMatch ? parseInt(totalMatch[1]) : 0;

    // Extract individual day contributions from rect elements
    const rectRegex = /<rect[^>]+data-date="([^"]+)"[^>]+data-level="(\d+)"[^>]*>/g;
    const dayMatches = Array.from(html.matchAll(rectRegex));

    // Alternative: look for contribution count in data attributes
    const countRegex = /<rect[^>]+data-date="([^"]+)"[^>]+data-count="(\d+)"[^>]*>/g;
    const countMatches = Array.from(html.matchAll(countRegex));

    const contributionDays: { [key: string]: { count: number; level: number } } = {};

    // Process level-based data
    dayMatches.forEach(match => {
      const date = match[1];
      const level = parseInt(match[2]);
      contributionDays[date] = {
        count: level > 0 ? level : 0,
        level
      };
    });

    // Process count-based data (if available)
    countMatches.forEach(match => {
      const date = match[1];
      const count = parseInt(match[2]);
      const level = count === 0 ? 0 : Math.min(Math.max(1, Math.ceil(count / 2)), 4);
      contributionDays[date] = { count, level };
    });

    // Generate weeks structure
    const weeks = generateWeeksFromDays(contributionDays);

    return {
      totalContributions,
      weeks
    };

  } catch (error) {
    console.error('Error parsing contribution data:', error);
    return {
      totalContributions: 0,
      weeks: []
    };
  }
}

function generateWeeksFromDays(contributionDays: { [key: string]: { count: number; level: number } }) {
  const weeks = [];
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  // Find the Sunday of the week containing oneYearAgo
  const startDate = new Date(oneYearAgo);
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);

  let currentDate = new Date(startDate);

  for (let week = 0; week < 53; week++) {
    const contributionDays = [];

    for (let day = 0; day < 7; day++) {
      const dateString = currentDate.toISOString().split('T')[0];
      const dayData = contributionDays[dateString] || { count: 0, level: 0 };

      contributionDays.push({
        date: dateString,
        contributionCount: dayData.count,
        contributionLevel: dayData.level
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push({ contributionDays });
  }

  return weeks;
}