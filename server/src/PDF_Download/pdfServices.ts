import  PDFDocument  from 'pdfkit';
import { Response } from 'express';
import { IResume } from '../models/User'; // Import the Resume interface if needed

// Function to generate PDF and pipe it to the response
export const generateResumePDF = (resume: IResume, res: Response) => {
  const doc = new PDFDocument();

  // Set the headers to indicate a PDF download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${resume.name}_Resume.pdf`);

  // Pipe the PDF document to the response
  doc.pipe(res);

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

  // Education Section
  doc.fontSize(16).text('Education:');
  resume.education.forEach((edu: any) => {
    doc.fontSize(12).text(`- ${edu}`);
  });
  // project Section
  doc.fontSize(16).text('Projects:');
  resume.projects.forEach((project: any) => {
    doc.fontSize(12).text(`- ${project}`);
  });

  // Finalize the PDF and end the document stream
  doc.end();
};
// Replace <resume_id> with an actual ID from database to download the resume as a PDF.
// This setup should give users a download option dynamically generated PDF of their resume. 