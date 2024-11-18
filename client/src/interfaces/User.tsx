import type { ResumeData } from './ResumeData.js';

export interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  resume: ResumeData[];
}
