// import betahouse from "../assets/projImg/betahouse.jpg"
// import urlshortner from "../assets/projImg/urlshortner.png"
// import transita from "../assets/projImg/transita.png"
import grafana_dashboard from "../assets/grafana.jpg"
import sql_performance from "../assets/sql_performance.avif"
import db_health_check from "../assets/db_health_check.png"
import grafana_cloud from "../assets/grafana_cloud.png"
import incident_bot from "../assets/dynserv.jpg"
import cicd_tracker from "../assets/cicd_tracker.png"
import datadog from "../assets/datadog.jpeg"
import failover from "../assets/failover.webp"


// export const projectData = [{
//     title: "BetaHouse: Easy House Rentals",
//     detail: "BetaHouse is a responsive web application designed to simplify the process of finding and renting houses. It provides users with an intuitive interface to browse properties, filter by location, price, and amenities, and connect with landlords directly.",
//     type: "Challenge",
//     year: "2025",
//     role: "Full Stack Developer",
//     img: betahouse,
//     demo: "https://beta-house-eta.vercel.app/",
//     github: "https://github.com/calebtolorunleke/beta-house"
// }, {
//     title: "QuickLink – Simple & Fast URL Shortener",
//     detail: "QuickLink is a lightweight and efficient URL shortener application designed to transform long, complicated links into short, easy-to-share URLs. Whether you’re sharing on social media, email, or text, QuickLink makes your links clean and user-friendly.",
//     type: "task",
//     year: "2025",
//     role: "Front-end Developer",
//     img: urlshortner,
//     demo: "https://urlshortner-rho-lilac.vercel.app/",
//     github: "https://github.com/calebtolorunleke/urlshortner"
// }, {
//     title: "Transport booking and management platform",
//     detail: "A modern transport booking and management platform designed to simplify city commuting. The app allows users to search, book, and pay for rides seamlessly while offering real-time tracking and route optimization for improved travel convenience.",
//     type: "Challenge",
//     year: "2025",
//     role: "Front-end Developer",
//     img: transita,
//     demo: "https://the-transita-app.vercel.app/",
//     github: "https://github.com/calebtolorunleke/the_transita_app"
// }]



export const projectData = [
    {
        title: "Alert Workflow Optimization",
        detail: "Streamlined alert management by refining thresholds and integrating Grafana monitoring tool. Reduced false positives by 25% and enabled teams to focus on high-priority incidents, improving operational efficiency.",
        type: "Professional Project",
        category: "Monitoring & Alerting",
        role: "SRE / Application Support",
        img: grafana_dashboard,
        stakeholders: ["SRE Team, ", "DevOps, ", "Engineering"]
    },
    {
        title: "SQL Query Performance Tuning",
        detail: "Analyzed and optimized slow-running SQL queries impacting application performance. Used indexing, query refactoring, and execution plan analysis to reduce query response time by 40%. Collaborated with developers to implement best practices for database efficiency.",
        type: "Professional Project",
        category: "Database Optimization",
        role: "Application Support Engineer",
        img: sql_performance,
        stakeholders: ["DBA Team, ", "Engineering, ", "Product"]
    },
    {
        title: "Automated Database Health Monitoring",
        detail: "Developed SQL stored procedures and scripts to automatically monitor database health metrics, including space utilization, index fragmentation, and query bottlenecks. Configured alerts to proactively notify the team before incidents occurred, reducing downtime by 20%.",
        type: "Professional Project",
        category: "Database Monitoring",
        role: "Application Support Engineer / SRE",
        img: db_health_check,
        stakeholders: ["DBA Team, ", "SRE Team, ", "Operations"]
    },
    {
        title: "Cloud Infrastructure Monitoring System",
        detail: "Implemented a comprehensive monitoring solution using Grafana and Prometheus to track real-time performance metrics across AWS and Azure environments. Reduced downtime by 25% through proactive alerting and automated scaling policies.",
        type: "Professional Project",
        category: "Cloud Infrastructure",
        role: "Application Support Engineer / SRE",
        img: grafana_cloud,
        stakeholders: ["Cloud Team, ", "DevOps, ", "Engineering"]
    },
    {
        title: "Automated Incident Response Bot",
        detail: "Developed a Slack-integrated bot to automate incident triage and resolution steps. Integrated with Dynatrace and ServiceNow to automatically create, assign, and update tickets, reducing MTTR (Mean Time to Resolution) by 40%.",
        type: "Professional Project",
        category: "Incident Automation",
        role: "Application Support Engineer / SRE",
        img: incident_bot,
        stakeholders: ["SRE Team, ", "Support Team, ", "Engineering"]
    },
    {
        title: "CI/CD Deployment Reliability Tracker",
        detail: "Built a pipeline health tracker integrated with Jenkins and GitHub Actions to monitor build failures, deployment frequency, and rollback events. Enabled teams to identify failure patterns and improved deployment success rate by 35%.",
        type: "Internal Tool",
        category: "DevOps & CI/CD",
        role: "Application Support Engineer / SRE",
        img: cicd_tracker,
        stakeholders: ["DevOps, ", "Engineering, ", "QA Team"]
    },
    {
        title: "Real-Time Log Aggregation & Alerting System",
        detail: "Designed a centralized logging solution using ELK Stack (Elasticsearch, Logstash, Kibana) to collect and analyze application logs across distributed systems. Enabled proactive issue detection and improved root cause analysis speed by 50%.",
        type: "Professional Project",
        category: "Log Management",
        role: "Application Support Engineer / SRE",
        img: datadog,
        stakeholders: ["SRE Team, ", "Engineering, ", "Operations"]
    },
    {
        title: "High Availability and Failover Architecture",
        detail: "Architected and deployed a multi-region failover system on AWS using Route 53 and Elastic Load Balancers. Ensured 99.99% uptime for mission-critical services and reduced unplanned outages by 60%.",
        type: "Professional Project",
        category: "High Availability",
        role: "Application Support Engineer / SRE",
        img: failover,
        stakeholders: ["SRE Team, ", "DevOps, ", "Engineering"]
    }
]
