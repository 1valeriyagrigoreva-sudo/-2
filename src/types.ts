export interface Candidate {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: string;
  email: string;
  phone: string;
  scores: {
    hard: number;
    soft: number;
    ai: number;
    cases: number;
    responsibility: number;
    additional: number;
  };
  aiMatch: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: any;
  path: string;
}
