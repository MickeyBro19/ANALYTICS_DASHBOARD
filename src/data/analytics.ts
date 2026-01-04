import type { AnalyticsRecord } from "../types/analytics";

export const analyticsData: AnalyticsRecord[] = [
    // NOVEMBER
    { date: "2024-11-01", users: 90,  activeUsers: 60,  revenue: 1800, source: "organic" },
    { date: "2024-11-05", users: 105, activeUsers: 70,  revenue: 2100, source: "organic" },
    { date: "2024-11-10", users: 120, activeUsers: 80,  revenue: 2400, source: "paid" },
    { date: "2024-11-15", users: 135, activeUsers: 90,  revenue: 2700, source: "organic" },
    { date: "2024-11-20", users: 150, activeUsers: 100, revenue: 3100, source: "paid" },
    { date: "2024-11-25", users: 165, activeUsers: 110, revenue: 3400, source: "organic" },

    // DECEMBER
    { date: "2024-12-01", users: 180, activeUsers: 120, revenue: 3800, source: "paid" },
    { date: "2024-12-05", users: 195, activeUsers: 130, revenue: 4100, source: "organic" },
    { date: "2024-12-10", users: 210, activeUsers: 140, revenue: 4500, source: "paid" },
    { date: "2024-12-15", users: 225, activeUsers: 155, revenue: 4900, source: "organic" },
    { date: "2024-12-20", users: 240, activeUsers: 170, revenue: 5400, source: "paid" },
    { date: "2024-12-25", users: 255, activeUsers: 180, revenue: 5800, source: "organic" },

    // JANUARY
    { date: "2025-01-01", users: 270, activeUsers: 190, revenue: 6200, source: "paid" },
    { date: "2025-01-05", users: 285, activeUsers: 200, revenue: 6600, source: "organic" },
    { date: "2025-01-10", users: 300, activeUsers: 215, revenue: 7100, source: "paid" },
    { date: "2025-01-15", users: 315, activeUsers: 225, revenue: 7500, source: "organic" },
    { date: "2025-01-20", users: 330, activeUsers: 240, revenue: 8100, source: "paid" },
    { date: "2025-01-25", users: 350, activeUsers: 260, revenue: 8800, source: "referral" },
    { date: "2025-01-29", users: 370, activeUsers: 280, revenue: 9400, source: "organic" },
];
