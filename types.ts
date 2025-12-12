export interface LeadData {
  wasSold: boolean;
  address: string;
  county: string;
  state: string;
  estimatedValue: string;
  approxDebt: string;
  name: string;
  email: string;
  phone: string;
}

export interface AuditResult {
  analysis: string;
  estimatedSurplusRange: string;
  urgencyLevel: 'High' | 'Medium' | 'Low';
  nextSteps: string[];
}
