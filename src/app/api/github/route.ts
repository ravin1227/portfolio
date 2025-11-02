import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  // Select token based on username
  let GITHUB_TOKEN;
  if (username === 'raviverma') {
    GITHUB_TOKEN = process.env.GITHUB_TOKEN_SECOND;
  } else if (username === 'ravin1227') {
    GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  } else {
    GITHUB_TOKEN = process.env.GITHUB_TOKEN; // fallback to first token
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: `GitHub token not configured for ${username}` }, { status: 500 });
  }

  // Get date range for last year
  const to = new Date().toISOString();
  const from = new Date(Date.now() - 365 * 24 * 3600 * 1000).toISOString();

  const query = `
    query($login: String!, $from: DateTime, $to: DateTime) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { login: username, from, to }
      })
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GitHub GraphQL errors:', data.errors);
      throw new Error(data.errors[0].message);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}