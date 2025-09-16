import React from "react";

const Capabilities = () => {
  // Array of skills to display as badges
  const skills = [
    // Monitoring & Observability
    "Grafana",
    "Prometheus",
    "ELK Stack (Elasticsearch, Logstash, Kibana)",
    "Dynatrace",
    "ServiceNow",
    "Alerting & Incident Management",
    "Application IT360",

    // Cloud & Infrastructure
    "AWS",
    "Azure",
    "High Availability Architecture",
    "Load Balancing",
    "Disaster Recovery",
    "Cloud Infrastructure Monitoring",

    // Scripting & Automation
    "Python",
    "Bash Scripting",
    "Automation Workflows",
    "Incident Response Automation",
    "CI/CD Pipelines",
    "GitHub Actions",
    "Jenkins",

    // Databases
    "SQL",
    "MongoDB",
    "Database Performance Tuning",
    "Database Health Monitoring",

    // DevOps & Reliability
    "Docker",
    "Kubernetes",
    "Infrastructure as Code (IaC)",
    "System Reliability Engineering",
    "Root Cause Analysis",
    "Performance Optimization",

    // Collaboration & Processes
    "Agile Collaboration",
    "Cross-Team Communication",
    "Change Management",
    "Problem Management",
    "Continuous Improvement",
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
          I specialize in ensuring the stability, performance, and reliability
          of complex systems and applications. My expertise includes proactive
          monitoring, incident response, and root cause analysis to minimize
          downtime and improve service availability. I work with tools like
          Grafana, ELK Stack, Dynatrace, and ServiceNow to streamline alerting
          and automate workflows. By collaborating closely with engineering,
          DevOps, and product teams, I help optimize deployments, enhance CI/CD
          processes, and implement high availability strategies. My focus is on
          operational excellence, continuous improvement, and delivering
          seamless, reliable experiences for end users and stakeholders.
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
