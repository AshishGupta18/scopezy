"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EstimatePage() {
  const router = useRouter();

  const [projectType, setProjectType] = useState("website");
  const [features, setFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState("basic");

  const toggleFeature = (feature: string) => {
    setFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const generateEstimate = async () => {
    const res = await fetch("/api/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectType,
        features,
        complexity
      })
    });

    const data = await res.json();
    localStorage.setItem("estimateResult", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Create Your Estimate</h1>

      {/* Project Type */}
      <div>
        <label className="font-medium">Project Type</label>
        <select
          className="w-full border p-2 rounded"
          value={projectType}
          onChange={e => setProjectType(e.target.value)}
        >
          <option value="website">Website</option>
          <option value="mobile">Mobile App</option>
          <option value="saas">SaaS</option>
          <option value="internal">Internal Tool</option>
        </select>
      </div>

      {/* Features */}
      <div>
        <label className="font-medium">Features</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {["auth", "payments", "admin", "integrations", "deployment", "testing"].map(f => (
            <button
              key={f}
              onClick={() => toggleFeature(f)}
              className={`border p-2 rounded ${
                features.includes(f) ? "bg-blue-600 text-white" : ""
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Complexity */}
      <div>
        <label className="font-medium">Complexity</label>
        <select
          className="w-full border p-2 rounded"
          value={complexity}
          onChange={e => setComplexity(e.target.value)}
        >
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <button
        onClick={generateEstimate}
        className="w-full bg-blue-600 text-white p-3 rounded font-semibold"
      >
        Generate Estimate
      </button>
    </div>
  );
}