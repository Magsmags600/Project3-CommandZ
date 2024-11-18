import type  ResumeData  from './ResumeData.js';

export default interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  resume: ResumeData[];
}
