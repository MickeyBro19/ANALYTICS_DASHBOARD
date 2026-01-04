# 📊 Analytics Dashboard

A modern, responsive **frontend analytics dashboard** built with React and TypeScript to visualize user growth, engagement, and revenue trends using interactive charts and dynamic filters.

This project demonstrates **data-driven UI design**, **derived state management**, and **clean component architecture** without relying on a backend API.

---

## ✨ Features

* KPI metrics for **Total Users**, **Active Users**, **Conversion Rate**, and **Revenue**
* Interactive **Line, Bar, and Pie charts** for analytics visualization
* **Date range filtering** (Last 7 / 30 / 90 days)
* **Traffic source filtering** (Organic, Paid, Referral)
* Realistic mock analytics dataset
* Responsive layout with clean, accessible UI
* Graceful empty state handling

---

## 🧠 Key Concepts Demonstrated

* Derived state computation from raw datasets
* Date-based filtering logic (not record-count based)
* Separation of concerns between data, logic, and presentation
* Reusable, composable React components
* One-way data flow and predictable state updates

---

## 🛠 Tech Stack

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Recharts**

---

## 📁 Project Structure

```
src/
 ├─ components/
 │   ├─ KPIStat.tsx
 │   ├─ LineChart.tsx
 │   ├─ BarChart.tsx
 │   ├─ PieChart.tsx
 │   └─ Filters.tsx
 ├─ data/
 │   └─ analytics.ts
 ├─ pages/
 │   └─ AnalyticsDashboard.tsx
 ├─ types/
 │   └─ analytics.ts
 └─ App.tsx
```

---

## 🚀 Getting Started

Clone the repository and run the project locally:

```bash
npm install
npm run dev
```

---

## 📈 Data Handling Approach

* Analytics data is stored as a static mock dataset
* Filters are applied using **date-difference logic** to ensure realistic behavior across varying data frequencies
* All metrics and visualizations react automatically to filter changes

---

## 📌 Future Enhancements (Optional)

* Backend API integration
* Real-time data updates
* Exportable reports (CSV / PDF)
* Authentication and role-based dashboards

---

## 📄 License

This project is intended for **portfolio and educational purposes**.

---

## 🧾 Resume-Ready Description

> Built an interactive analytics dashboard using React and TypeScript to visualize user growth, revenue trends, and traffic sources with dynamic charts and date-based filters using realistic mock datasets.

---

### ✅ Final Note

This project is intentionally **focused and minimal** to highlight frontend fundamentals, data logic, and UI clarity — the same qualities expected in production analytics dashboards.

---
