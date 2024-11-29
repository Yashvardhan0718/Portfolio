import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Business Analyst",
    icon: web,
  },
  {
    title: "Marketing Intern",
    icon: mobile,
  },
  {
    title: "Teaching Assistant",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Marketing Intern",
    company_name: "Lernx",
    //icon: starbucks,
    //iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Promotion of services and products of an ed - tech startup, achieved 30% increase in user satisfaction",
      "Directed a team of 10+, increased LinkedIn page viewership by 5x and secured 10,000+ impressions",
      "Awarded for being the top performer and recording the highest sales (50+) in my team as an intern",
      "Conducted a market research and initiated data collection of 300+ students, generated 500+ leads and increased the sales by 3x times through strategic outbound sales efforts",
    ],
  },
  {
    title: "Business Analyst Apprentice",
    company_name: "Finlatics",
    //icon: tesla,
    //iconBg: "#E6DEDD",
    date: "April 2023 - May 2023",
    points: [
      "Solved case - based projects using the MECE method of problem solving and tools like MS Excel & Power BI",
      "Tackled over 20+ business cases - ranging from enhancing profitability for a fintech startup to analyzing the feasibility of business operations across various sectors like insurance, payment and financial services",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to accomplish the monthly targets, but Yash proved me wrong.",
    name: "Tammanah Sharma",
    designation: "HR",
    company: "Lernx",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met an apprentice who completes all his case studies and assignments on time like Yash does.",
    name: "Jayesh Patel",
    designation: "HR",
    company: "Finlatics",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Yash optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Karthikeyan Sharma",
    designation: "Student",
    company: "SRM Institute of Science & Technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Bike Manufacturing Company Analysis",
    description:
      "This project goes through the Production and Inventory Analysis of the Microsoft AdventureWorks Database. This analysis focuses on the Manufacturing and Inventory part of the data. Microsoft Power BI has been used to create an interactive dashboard while pulling data from SQL Server.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "PowerBI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Yashvardhan0718/Data-Analysis-of-Bike-Manufacturing-Company",
  },
  {
    name: "Exploring Trends in the Automotive Industry",
    description:
      "This project involved creating an interactive Tableau dashboard to visualize and analyze used car sales data. The key goals were to: provide insights into sales trends over time, compare performance by transmission, fuel type, ownership etc.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tableau",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Yashvardhan0718/Exploring-Trends-in-the-Automotive-Industry",
  },
];

export { services, technologies, experiences, testimonials, projects };
