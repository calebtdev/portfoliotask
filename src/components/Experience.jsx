import React from "react";

const Experience = () => {
  // Array of experiences containing job role, date, company name, and details
  const experiences = [
    {
      role: "Application Support Engineer | Unit Head ",
      date: "Oct 2022 – Jul 2025",
      companyname: "Guaranty Trust Bank (GTCO) || Nigeria/Canada",
      detail:
        "Led a team of 3 support engineers, delivering L2/L3 support for critical banking systems (Internet Banking, USSD, APIs) with 99.9% uptime for 3M+ daily users. Improved incident response and monitoring, cutting P1 incidents by 30% and MTTR by 20%. Optimized infrastructure and automated workflows using Python, PowerShell, and Grafana, reducing manual toil by 35% and downtime by 35%. Developed SOPs and dashboards to streamline onboarding and mentored junior engineers on root cause analysis and escalation best practices.",
    },
    {
      role: "Solution Engineer / L2 Support Engineer ",
      date: "Apr 2021 – Oct 2022",
      companyname: "dipoleDiamond Ltd (FinTech) || Lagos,Nigeria",
      detail:
        "Delivered L2 support and troubleshooting for RPA and enterprise solutions, ensuring 99% uptime. Built automation workflows with UiPath, ProcessMaker, and Power Automate, cutting manual effort by 40%, and developed automated tests to reduce post-release defects by 20%. Optimized SQL/NoSQL databases for 15% faster queries and managed SharePoint administration and training, increasing user adoption by 30%.",
    },
    {
      role: "SRE / L2 Support Engineer ",
      date: "Jun 2020 – Apr 2021",
      companyname: "United Bank for Africa (UBA) || Lagos,Nigeria",
      detail:
        "Monitored enterprise applications across 19 countries using Dynatrace, SolarWinds, and CloudWatch, reducing downtime by 25%. Strengthened compliance and device security by 40% through Azure AD policies and Intune. Automated server and endpoint tasks with Shell and PowerShell, cutting manual effort by 30%. Provided L3 support for financial applications, resolving 95% of incidents within SLA.",
    },
    {
      role: "Application Support Analyst  ",
      date: "Jun 2020 – Apr 2021",
      companyname: "Opay Tech Solutions || Lagos,Nigeria",
      detail:
        "Delivered L2 support for custom ERP and CRM systems across 15+ client organizations, handling incident triage and escalation while consistently meeting SLA targets. Supported automated deployment pipelines using Jenkins to streamline release management. Provided 24/7 on-call support, resolving an average of 300+ tickets per month.",
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
