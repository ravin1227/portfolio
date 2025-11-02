'use client';

import { useState, useEffect } from 'react';

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionsCollection {
  contributionCalendar: {
    totalContributions: number;
    weeks: ContributionWeek[];
  };
}

interface GitHubData {
  data?: {
    user?: {
      contributionsCollection: ContributionsCollection;
    };
  };
}

interface GitHubActivityProps {
  username?: string;
  usernames?: string[];
}

const GitHubActivity = ({ username, usernames }: GitHubActivityProps) => {
  const [contributionData, setContributionData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mergeContributionData = (dataArray: GitHubData[]): GitHubData => {
    if (dataArray.length === 0) return generateMockData();
    if (dataArray.length === 1) return dataArray[0];

    const baseData = JSON.parse(JSON.stringify(dataArray[0]));
    let totalContributions = 0;

    // Merge contributions from all accounts
    baseData.data.user.contributionsCollection.contributionCalendar.weeks.forEach((week: any, weekIndex: number) => {
      week.contributionDays.forEach((day: any, dayIndex: number) => {
        let combinedContributions = 0;

        // Sum contributions from all accounts for this day
        dataArray.forEach(accountData => {
          const accountWeek = accountData.data?.user?.contributionsCollection?.contributionCalendar?.weeks[weekIndex];
          const accountDay = accountWeek?.contributionDays[dayIndex];
          if (accountDay) {
            combinedContributions += accountDay.contributionCount || 0;
          }
        });

        day.contributionCount = combinedContributions;
        totalContributions += combinedContributions;
      });
    });

    baseData.data.user.contributionsCollection.contributionCalendar.totalContributions = totalContributions;
    return baseData;
  };

  const enhanceWithRealisticPattern = (data: GitHubData, totalContributions: number): GitHubData => {
    if (!data.data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
      return data;
    }

    const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
    let remainingContributions = totalContributions;

    // Create a copy of the data
    const enhancedData = JSON.parse(JSON.stringify(data));

    // Distribute contributions across the year with realistic patterns
    enhancedData.data.user.contributionsCollection.contributionCalendar.weeks.forEach((week: any, weekIndex: number) => {
      week.contributionDays.forEach((day: any, dayIndex: number) => {
        if (remainingContributions <= 0) return;

        // Weight factors for realistic distribution
        const dayOfWeek = dayIndex; // 0 = Sunday, 6 = Saturday
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const isWeekday = !isWeekend;

        // Higher probability for weekdays, lower for weekends
        const weekdayWeight = isWeekday ? 0.7 : 0.3;

        // Recent months have slightly higher activity
        const recentWeight = weekIndex > 40 ? 1.2 : 1.0;

        // Random factor
        const randomFactor = Math.random();

        // Calculate probability
        const probability = weekdayWeight * recentWeight * randomFactor;

        if (probability > 0.6 && remainingContributions > 0) {
          // Assign 1-4 contributions for this day
          const contributionsForDay = Math.min(
            Math.floor(Math.random() * 4) + 1,
            remainingContributions
          );

          day.contributionCount = contributionsForDay;

          // Set contribution level based on count
          if (contributionsForDay === 0) day.contributionLevel = 0;
          else if (contributionsForDay <= 2) day.contributionLevel = 1;
          else if (contributionsForDay <= 4) day.contributionLevel = 2;
          else if (contributionsForDay <= 7) day.contributionLevel = 3;
          else day.contributionLevel = 4;

          remainingContributions -= contributionsForDay;
        }
      });
    });

    return enhancedData;
  };

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const accountsToFetch = usernames || (username ? [username] : []);

        if (accountsToFetch.length === 0) {
          throw new Error('No usernames provided');
        }

        // Fetch data for all accounts in parallel
        const promises = accountsToFetch.map(async (user) => {
          const response = await fetch(`/api/github?username=${user}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch GitHub data for ${user}`);
          }
          const data = await response.json();
          if (data.error) {
            throw new Error(data.error);
          }
          return data;
        });

        const allAccountsData = await Promise.all(promises);

        // Merge all accounts data
        const mergedData = mergeContributionData(allAccountsData);
        setContributionData(mergedData);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Failed to load GitHub contributions. Using fallback data.');
        // Fallback to mock data
        setContributionData(generateMockData());
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, usernames]);

  const generateMockData = (): GitHubData => {
    const weeks: ContributionWeek[] = [];
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 365);

    let totalContributions = 0;

    // Generate 53 weeks of data
    for (let week = 0; week < 53; week++) {
      const contributionDays: ContributionDay[] = [];

      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + (week * 7) + day);

        // Generate random contribution count with higher probability for recent dates
        const randomFactor = Math.random();
        const contributionCount = randomFactor > 0.7 ?
          Math.floor(Math.random() * 8) : 0;

        let level = 0;
        if (contributionCount > 0) {
          if (contributionCount <= 2) level = 1;
          else if (contributionCount <= 4) level = 2;
          else if (contributionCount <= 7) level = 3;
          else level = 4;
        }

        totalContributions += contributionCount;

        contributionDays.push({
          date: date.toISOString().split('T')[0],
          contributionCount,
          contributionLevel: level
        });
      }

      weeks.push({ contributionDays });
    }

    return {
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: {
              totalContributions,
              weeks
            }
          }
        }
      }
    };
  };

  const getColor = (level: number): string => {
    // Dark theme: very dark background for no contributions, green for contributions
    const colors = ['#0d1117', '#0e4429', '#006d32', '#26a641', '#39d353'];
    return colors[Math.min(level, 4)] || colors[0];
  };

  const getMonthName = (monthIndex: number): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthIndex];
  };

  if (loading) {
    // Generate skeleton data (53 weeks × 7 days)
    const skeletonWeeks = Array.from({ length: 53 }, (_, weekIndex) => ({
      contributionDays: Array.from({ length: 7 }, (_, dayIndex) => ({
        date: '',
        contributionCount: 0,
        color: '#1f2937' // Gray skeleton color
      }))
    }));

    // Generate month labels for skeleton
    const skeletonMonthLabels = [
      { x: 0, month: 'Sep' },
      { x: 64, month: 'Oct' },
      { x: 128, month: 'Nov' },
      { x: 192, month: 'Dec' },
      { x: 256, month: 'Jan' },
      { x: 320, month: 'Feb' },
      { x: 384, month: 'Mar' },
      { x: 448, month: 'Apr' },
      { x: 512, month: 'May' },
      { x: 576, month: 'Jun' },
      { x: 640, month: 'Jul' },
      { x: 704, month: 'Aug' },
      { x: 768, month: 'Sep' }
    ];

    return (
      <div className="flex justify-center">
        <article className="react-activity-calendar" style={{width: 'max-content', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px'}}>
          <div className="react-activity-calendar__scroll-container" style={{maxWidth: '100%', overflowX: 'auto', overflowY: 'hidden', paddingTop: '2px'}}>
            <svg width={skeletonWeeks.length * 16} height="144" viewBox={`0 0 ${skeletonWeeks.length * 16} 144`} className="react-activity-calendar__calendar" style={{display: 'block', overflow: 'visible'}}>
              {/* Month labels */}
              <g>
                {skeletonMonthLabels.map((label, index) => (
                  <text key={index} x={label.x} y="12" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse">
                    {label.month}
                  </text>
                ))}
              </g>

              {/* Day labels */}
              <g>
                <text x="-10" y="32" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse" textAnchor="end">Sun</text>
                <text x="-10" y="50" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse" textAnchor="end">Mon</text>
                <text x="-10" y="68" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse" textAnchor="end">Tue</text>
                <text x="-10" y="86" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse" textAnchor="end">Wed</text>
                <text x="-10" y="104" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse" textAnchor="end">Thu</text>
                <text x="-10" y="122" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse" textAnchor="end">Fri</text>
                <text x="-10" y="140" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400 animate-pulse" textAnchor="end">Sat</text>
              </g>

              {/* Skeleton calendar grid */}
              {skeletonWeeks.map((week, weekIndex) => (
                <g key={weekIndex} transform={`translate(${weekIndex * 16}, 0)`}>
                  {week.contributionDays.map((day, dayIndex) => {
                    const y = dayIndex * 18 + 22;
                    return (
                      <rect
                        key={`skeleton-${weekIndex}-${dayIndex}`}
                        x="0"
                        y={y}
                        width="14"
                        height="14"
                        rx="2"
                        ry="2"
                        fill="#1f2937"
                        style={{stroke: 'rgba(255, 255, 255, 0.1)'}}
                        className="animate-pulse"
                      />
                    );
                  })}
                </g>
              ))}
            </svg>
          </div>

          <footer className="react-activity-calendar__footer" style={{display: 'flex', flexWrap: 'wrap', gap: '4px 16px', whiteSpace: 'nowrap'}}>
            <div className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
              <div className="h-4 bg-gray-600 rounded w-48"></div>
            </div>

            {/* Skeleton Legend */}
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-500">
              <span className="animate-pulse">Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map(level => (
                  <div
                    key={level}
                    className="w-3 h-3 rounded-sm bg-gray-600 animate-pulse"
                  />
                ))}
              </div>
              <span className="animate-pulse">More</span>
            </div>
          </footer>
        </article>
      </div>
    );
  }

  if (error && !contributionData) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  const contributions = contributionData?.data?.user?.contributionsCollection.contributionCalendar;

  if (!contributions) {
    return (
      <div className="text-center text-gray-500">
        <p>No contribution data available</p>
      </div>
    );
  }

  // Calculate month positions for labels
  const monthLabels: { x: number; month: string }[] = [];
  let currentMonth = -1;
  let weekIndex = 0;

  contributions.weeks.forEach((week, index) => {
    const firstDay = new Date(week.contributionDays[0]?.date);
    if (firstDay && firstDay.getMonth() !== currentMonth) {
      currentMonth = firstDay.getMonth();
      monthLabels.push({
        x: index * 16,
        month: getMonthName(currentMonth)
      });
    }
  });

  return (
    <div className="flex justify-center">
      <article className="react-activity-calendar" style={{width: 'max-content', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px'}}>
        <div className="react-activity-calendar__scroll-container" style={{maxWidth: '100%', overflowX: 'auto', overflowY: 'hidden', paddingTop: '2px'}}>
          <svg width={contributions.weeks.length * 16} height="144" viewBox={`0 0 ${contributions.weeks.length * 16} 144`} className="react-activity-calendar__calendar" style={{display: 'block', overflow: 'visible'}}>
            {/* Month labels */}
            <g>
              {monthLabels.map((label, index) => (
                <text key={index} x={label.x} y="12" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400">
                  {label.month}
                </text>
              ))}
            </g>

            {/* Day labels */}
            <g>
              <text x="-10" y="32" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400" textAnchor="end">Sun</text>
              <text x="-10" y="50" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400" textAnchor="end">Mon</text>
              <text x="-10" y="68" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400" textAnchor="end">Tue</text>
              <text x="-10" y="86" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400" textAnchor="end">Wed</text>
              <text x="-10" y="104" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400" textAnchor="end">Thu</text>
              <text x="-10" y="122" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400" textAnchor="end">Fri</text>
              <text x="-10" y="140" fontSize="12" fill="currentColor" className="text-gray-500 dark:text-gray-400" textAnchor="end">Sat</text>
            </g>

            {/* Calendar grid */}
            {contributions.weeks.map((week, weekIndex) => (
              <g key={weekIndex} transform={`translate(${weekIndex * 16}, 0)`}>
                {week.contributionDays.map((day, dayIndex) => {
                  const y = dayIndex * 18 + 22;
                  // Always use our custom dark theme colors
                  const fillColor = getColor(day.contributionCount > 0 ? Math.min(Math.ceil(day.contributionCount / 2), 4) : 0);
                  return (
                    <rect
                      key={day.date}
                      x="0"
                      y={y}
                      width="14"
                      height="14"
                      rx="2"
                      ry="2"
                      fill={fillColor}
                      data-date={day.date}
                      data-contributions={day.contributionCount}
                      style={{stroke: 'rgba(255, 255, 255, 0.1)'}}
                      className="hover:stroke-gray-300 hover:stroke-2 cursor-pointer"
                      title={`${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${day.date}`}
                    />
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        <footer className="react-activity-calendar__footer" style={{display: 'flex', flexWrap: 'wrap', gap: '4px 16px', whiteSpace: 'nowrap'}}>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total {contributions.totalContributions.toLocaleString()} contributions in the last year
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-500">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(level => (
                <div
                  key={level}
                  className="w-3 h-3 rounded-sm"
                  style={{backgroundColor: getColor(level)}}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default GitHubActivity;