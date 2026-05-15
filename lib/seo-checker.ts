export interface SeoCheckResult {
  label: string;
  passed: boolean;
}

export function runSeoChecklist(title: string, description: string): SeoCheckResult[] {
  return [
    { label: "Title length between 30-60", passed: title.length >= 30 && title.length <= 60 },
    { label: "Description length between 120-160", passed: description.length >= 120 && description.length <= 160 },
  ];
}