import React from "react";

const Experience = () => {
  // Array of experiences containing job role, date, company name, and details
  const experiences = [
    {
      role: "Intern Full-Stack Developer",
      date: "Aug 2025 - Present",
      companyname: "TechNova Solutions",
      detail:
        "Contributed to the development of a scalable web application by building REST APIs, integrating frontend components with backend services, and assisting in database design. Collaborated in daily standups and gained hands-on experience with agile workflows.",
    },
    {
      role: "Intern Frontend Developer",
      date: "May 2025 - Jul 2025",
      companyname: "PixelCraft Labs",
      detail:
        "Assisted in creating responsive and interactive UI components using React and Tailwind CSS. Optimized web performance, implemented reusable components, and worked closely with designers to translate Figma wireframes into functional interfaces.",
    },
    {
      role: "Software Support Intern",
      date: "Jan 2025 - Apr 2025",
      companyname: "CloudWare Systems",
      detail:
        "Provided application support for internal tools, triaged bugs, and implemented small fixes using JavaScript and Node.js. Monitored logs and system performance, gaining practical knowledge of DevOps workflows and CI/CD pipelines.",
    },
  ];

  return (
    <section className="flex flex-col md:grid grid-cols-2 gap-8 px-6 md:px-30 md:items-start">
      {/* Left column: Section title */}
      <div>
        <h1 className="text-2xl md:text-4xl uppercase font-bold">
          My Experience
        </h1>
      </div>

      {/* Right column: Experience list */}
      <div className="flex flex-col gap-[2rem]">
        {/* Loop through the experiences array and render each job/role */}
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col gap-1">
            {/* Job role and date displayed side by side */}
            <div className="flex flex-row justify-between text-md md:text-lg">
              <h4>{experience.role}</h4>
              <h4 className="text-[#C7C7C7]">{experience.date}</h4>
            </div>

            {/* Company name highlighted */}
            <p className="text-[#D3E97A]">{experience.companyname}</p>

            {/* Detailed description of responsibilities */}
            <p className="text-[#C7C7C7] text-sm md:text-md">
              {experience.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
