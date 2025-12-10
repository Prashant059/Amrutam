import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./routes/DashboardPage";
import PatientsPage from "./routes/PatientsPage";
import EarningsPage from "./routes/EarningsPage";
import NotFoundPage from "./routes/NotFoundPage";
import ReferralTool from "./routes/RefarralTool";
import EarningHistory from "./routes/EarningHistory";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/affiliate-referral" element={<ReferralTool />} />
      <Route path="/affiliate-earnings" element={<EarningHistory />} />
      <Route path="/patients" element={<PatientsPage />} />
      <Route path="/earnings" element={<EarningsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
