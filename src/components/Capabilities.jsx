import React from "react";

const Capabilities = () => {
  // Array of skills to display as badges
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "RESTful APIs",
    "GraphQL",
    "JWT",
    "OAuth",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "GitHub Actions",
    "Docker",
    "Cloud Platforms",
    "CI/CD Pipelines",
    "Clean Code",
    "Automated Testing",
    "Agile Collaboration",
  ];

  return (
    // Section wrapper for layout styling
    <section className="flex flex-col md:grid grid-cols-2 gap-8 px-6 md:px-30 md:items-start">
      {/* Left column: Title */}
      <div>
        <h1 className="text-2xl md:text-4xl uppercase font-bold">
          My Capabilities
        </h1>
      </div>

      {/* Right column: Description and Skills */}
      <div className="flex flex-col gap-[1rem]">
        {/* Paragraph describing my capabilities */}
        <p className="text-[#C7C7C7]">
          I specialize in building modern, responsive, and user-friendly web
          applications, while also designing and developing robust RESTful and
          GraphQL APIs that enable seamless communication between front-end
          interfaces and back-end services. I implement secure authentication
          and authorization workflows with role-based access control, and I
          consistently apply best practices in clean code, automated testing,
          and Agile collaboration to improve code quality, enhance teamwork, and
          deliver software solutions that align with both technical requirements
          and business objectives.
        </p>

        {/* Skills section - maps through the array and renders a styled badge for each */}
        <div className="flex flex-row flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 md:px-4 md:py-2 border border-gray-600 text-xs md:text-sm rounded-full uppercase hover:bg-[#D3E97A] hover:text-black transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
