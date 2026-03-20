import React from 'react';

const Contact = () => (
  <section id="contact" className="max-w-5xl text-center pt-[150px] mb-12">
    <h2 className="text-3xl font-semibold mb-4">Find me Here</h2>
    <p className="mb-4">I'd love to hear from you — whether it's a project, a job offer, or a question.</p>

    <div className="mt-4 space-x-4">
      <a href="mailto:shrestham325@gmail.com" className="underline">E-mail</a>
      <a href="https://github.com/Manoz171" className="underline" aria-label="GitHub">GitHub</a>
      <a href="https://www.linkedin.com/in/man-ozz-32773724a/" className="underline" aria-label="LinkedIn">LinkedIn</a>
       <p className="text-sm text-grey-700 mt-6">
          © 2026 Manoz. All Rights Reserved.
        </p>
    </div>
  </section>
);

export default Contact;
