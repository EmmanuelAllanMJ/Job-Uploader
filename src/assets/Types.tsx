export type SelectPropsEntry = {
  job: {
    title: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: string;
    expMin: number;
    expMax: number;
    totalEmp: string;
    salaryMin: number;
    salaryMax: number;
    quick: string | null;
    id: string;
  };
};

export type SelectProps = {
  title: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  expMin: number;
  expMax: number;
  totalEmp: string;
  salaryMin: number;
  salaryMax: number;
  quick: string | null;
  id: string;
};

export type ErrorProps = {
  title: boolean;
  companyName: boolean;
  industry: boolean;
};


