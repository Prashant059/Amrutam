import React from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function PatientsPage() {
  return (
    <div className="p-6">
      <Breadcrumb />
      <h1 className="text-2xl font-semibold mb-4">Patients</h1>
      <div className="bg-white shadow rounded-xl p-6">
        This page is a placeholder for Patients management.
      </div>
    </div>
  );
}
