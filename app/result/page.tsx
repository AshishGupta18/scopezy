"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("estimateResult");
    if (data) setResult(JSON.parse(data));
  }, []);

  if (!result) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">Your Estimate</h1>

      <div className="border rounded p-4">
        <p className="text-xl">
          ⏱ Estimated Hours:
          <strong> {result.minHours} – {result.maxHours}</strong>
        </p>
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(
          `Estimated effort: ${result.minHours}-${result.maxHours} hours`
        )}
        className="bg-gray-900 text-white p-2 rounded"
      >
        Copy Estimate
      </button>
    </div>
  );
}