export enum Btn {
  Submissions = 'Submissions',
  Bind = 'Bind',
  Actions = 'Actions',
}

export enum Status {
  NEW = 'NEW',
  BOUND = 'BOUND',
}

export type FormValues = {
  id: string;
  companyName: string;
  address: string;
  annualRevenue: number;
  status: Status;
  signedApplication: string;
  submittedBy: string;
};

export const draftFormValues = {
  id: '',
  companyName: '',
  address: '',
  annualRevenue: 0,
  status: Status.NEW,
  signedApplication: '',
  submittedBy: '',
};
