import PDFDocument from 'pdfkit';
import fs from 'fs';
import { IResume } from '../models/User';

// Function to generate PDF and save to a file
export const generateResumePDF = (resume: IResume) => {
  const doc = new PDFDocument();
  const fileName = `${resume.name}_Resume.pdf`;

  // Create a writable stream to save the PDF to a file
  const stream = fs.createWriteStream(fileName);
  doc.pipe(stream);

  // Title and Basic Info
  doc.fontSize(20).text(`${resume.name}'s Resume`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Email: ${resume.email}`);
  doc.moveDown();

  // Skills Section
  doc.fontSize(16).text('Skills:');
  resume.skills.forEach((skill: any) => {
    doc.fontSize(12).text(`- ${skill}`);
  });
  doc.moveDown();

  // Experiences Section
  doc.fontSize(16).text('Experiences:');
  resume.experiences.forEach((exp: any) => {
    doc.fontSize(12).text(`- ${exp}`);
  });
  doc.moveDown();

  // Education Section
  doc.fontSize(16).text('Education:');
  resume.education.forEach((edu: any) => {
    doc.fontSize(12).text(`- ${edu}`);
  });
  doc.moveDown();

  // Projects Section
  doc.fontSize(16).text('Projects:');
  resume.projects.forEach((project: any) => {
    doc.fontSize(12).text(`- ${project}`);
  });

  // Finalize the PDF and end the document stream
  doc.end();

  stream.on('finish', () => {
    console.log(`PDF generated successfully: ${fileName}`);
  });
};

// Test Data
const ResumeData: any = {  
  _id: 'name',
  name: 'Bob',
  email: 'mail@mail.com',
  education: ['Uc Irvine', 'Sacramento State University', 'MIT'],
  experiences: ['Military', 'Software Development'],
  projects: ['Project A', 'Project B'],
  skills: ['JavaScript', 'TypeScript'],
  contacts: []
};

// Call the function with test data
generateResumePDF(ResumeData);
