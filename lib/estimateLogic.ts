export function calculateEstimate(data: any) {
    const baseHours: any = {
      website: 40,
      mobile: 80,
      saas: 120,
      internal: 60
    };
  
    let hours = baseHours[data.projectType] || 0;
  
    const featureHours: any = {
      auth: 12,
      payments: 15,
      admin: 10,
      integrations: 6,
      deployment: 10,
      testing: 8
    };
  
    data.features.forEach((f: string) => {
      hours += featureHours[f] || 0;
    });
  
    const complexityMultiplier: any = {
      basic: 1,
      standard: 1.25,
      advanced: 1.5
    };
  
    const finalHours = hours * (complexityMultiplier[data.complexity] || 1);
  
    return {
      minHours: Math.round(finalHours * 0.9),
      maxHours: Math.round(finalHours * 1.15)
    };
  }