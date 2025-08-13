import westpacImg from "../assets/westpac.webp";
import ecoM from "../assets/ecoM.webp";
import flowersForJune from "../assets/flowersForJune.mp4";
import porfolio from "../assets/portfolio.webp";
import sneakySaving from "../assets/sneakySaving.mp4";
import presto from "../assets/presto.webp";
import qanda from "../assets/qanda.webp";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import mail from "../assets/mail.webp";

export const ExperiencesWestpacDescription: string = "Rated 'Exceeds Expectations, I've delivered full-stack tools to facilitate Westpac's UNITE Program. Contributed to large-scale data migrations using Oracle-based ETL tools like Informatica, and supported DevOps CI/CD operations (Jenkins, Artifactory, Bitbucket, JIRA)"

export const ExperiencesEYDescription: string = "Rated a 'Gold Standard' performer in EY's Technology, Media, and Telecommunications team. Led financial audits for 20+ clients, whilst streamlining audit processes using EY Helix and Excel to boosting accuracy and efficiency. Recognised as an 'acting' senior associate, mentoring juniors and ensuring high-quality outcomes."

export const ExperiencesJBDescription: string = "Superseded weekly KPI's and deploying cross-selling techniques to enhance customer service ratings. Translated technological specifications to tailor benefits for customers, and rapidly assimilated knowledge from partners (Apple, Samsung, Google...)"

export const ExperiencesUniqloDescription: string = "Assisted in customer engagement and sales. Worked closely with store managers and supervisors to drive team spirit. Achieved 85% turnover in membership sign-ups to incentivize repeat customers."

export const Experiences = [
  {
    date: "2025 - PRESENT",
    title: "Software Engineering Graduate • Westpac",
    description: ExperiencesWestpacDescription,
    skills: ["JavaScript / TypeScript" , "Java", "Groovy", "SQL", "SpringBoot", "React", "Vite", "Node.js", "Cypress + Playwright", "Teradata", "VBA", "Oracle", "Informatica", "Jenkins", "CICD & Agile Methodologies", "Bitbucket", "JIRA"],
  },
  {
    date: "2019 - 2022",
    title: "Assurance Audit Cadetship • Ernst & Young",
    description: ExperiencesEYDescription,
    skills: ["Excel", "PowerPoint", "Word", "VBA", "PowerBI", "EY Helix"],
  },
  {
    date: "2022 - 2025",
    title: "Sales • JB HI-FI",
    description: ExperiencesJBDescription,
  },
    {
    date: "2019 - 2020",
    title: "Retail Associate • UNIQLO",
    description: ExperiencesUniqloDescription,
  },
];

export const Projects = [
  {
    category: "Professional",
    items: [
      {
        title: "Watchlisting & Screen Scraping Tool",
        location: "Westpac",
        link: "https://www.westpac.com.au/",
        description: "Solely created a full-stack watchlisting & screen scraping automation tool end-to-end for tracking and updating dynamic production data on mainframe.",
        skills: [
          "Typescript", "React", "Vite", "Java", "SpringBoot", "Microsoft VBA",
          "Microservices", "SQL", "Mainframe", "Teradata"
        ],
        image: westpacImg
      },
      {
        title: "Account Activity Tracker",
        location: "Westpac",
        link: "https://www.westpac.com.au/",
        description: "Created a full-Stack application end-to-end for tracking customer credit card transactions, borrowing capacity, and collections risk, integrated with the PII Encryption tool  for secure PII handling.",
        skills: [
          "Typescript", "React", "Vite", "Java", "Springboot", "SQL", "Teradata"
        ],
        image: westpacImg
      },
      {
        title: "PII Encryption Tool",
        location: "Westpac",
        link: "https://www.westpac.com.au/",
        description: "Designed to securely encrypt format-preserved PII data. Tool is in use company-wide including the InfoSec team for compliance and security.",
        skills: [
          "Java", "Springboot", "SQL", "Teradata"
        ],
        image: westpacImg
      }
    ]
  },
  {
    category: "Personal",
    items: [
      {
        title: 'Flowers for June',
        description: 'Personalised web-based application for end-user, integrating weather updates and real-time messaging features. Created an interactive experience which included OpenWeatherAPI for real-time weather updates, Facebook Messenger API for automated messaging, and Supabase repository for storing personal milestone data and enabling in-app messaging.',
        skills: [
          "React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Microservices"
        ],
        link: "https://github.com/LeoLai0/flowersForJune",
        location: "github",
        image: flowersForJune
      },
      {
        title: 'ESG Financial Modelling Platform',
        description: 'Collaborated with a client to build a tool for sustainable investing based on ESG ratings.',
        skills: [
          "React", "Vite", "TypeScript", "Flask", "Python", "MySQL", "Docker", "Microservices"
        ],
        link: "https://github.com/unsw-cse-comp99-3900/capstone-project-2024-t3-3900-W15A_DRAGONFRUIT",
        location: "github",
        image: ecoM
      },
      {
        title: 'Portfolio Website',
        description: 'Front-end React + Vite + Typescript project to showcase V2 portfolio.',
        skills: [
          "React", "Vite", "TypeScript", "Tailwind CSS"
        ],
        link: "https://github.com/LeoLai0/v2_LeoLaiPortfolio",
        location: "github",
        image: porfolio
      },
      {
        title: 'Presentation Tool',
        description: 'Full-stack React Presentation Tool Project to simulate creation of presentation slides to that of Slido/Powerpoint',
        skills: [
          "React", "JavaScript", "Node.js", "Express"
        ],
        link: "https://github.com/LeoLai0/PresentationTool",
        location: "github",
        image: presto
      },
      {
        title: 'Forum Application',
        description: 'Front-end Vanilla JavaScript Forum Project to simulate functionalities of similar forums platforms like Reddit.',
        skills: [
          "JavaScript"
        ],
        link: "https://github.com/LeoLai0/ForumApp",
        location: "github",
        image: qanda
      },
      {
        title: 'Sneaky Saving Strategies',
        description: 'Personal Blog Posts to help boost financial literacy of UNSW Students.',
        skills: [
          "Microsoft Word"
        ],
        link: "https://drive.google.com/drive/folders/1NGa4flvuuofJNFrwIiRBOY1w2W20KJc6?usp=sharing",
        location: "google drive",
        image: sneakySaving
      }
    ]
  }
]

export const contactElements = [
    { name: "github", image: github, link: "https://github.com/LeoLai0" },
    { name: "linkedin", image: linkedin, link: "https://www.linkedin.com/in/leo-lai1/" },
    { name: "mail", image: mail, link: "leo.lai2610@gmail.com" }
]