export interface AnalyticsRecord {
    date: string; // YYYY-MM-DD
    users: number;
    activeUsers: number;
    revenue: number;
    source: "organic" | "paid" | "referral";
}
