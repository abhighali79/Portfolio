import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Database, Coffee, BookOpen, Workflow, Code } from "lucide-react";
import { SiJavascript, SiMongodb, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiBootstrap, SiMysql, SiHtml5, SiCss3, SiGithub, SiGit, SiEclipseide, SiPostman } from "react-icons/si";
import collegeErpImage from '@assets/generated_images/College_ERP_dashboard_mockup_968d14a7.png';
import employeeManagementImage from '@assets/generated_images/Employee_management_system_interface_8eff1c74.png';
import ecommerceImage from '@assets/generated_images/E-commerce_website_mockup_30d475ce.png';

export default function Home() {
  const skills = [
    { name: "Core Java", icon: Coffee },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "React.js", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQL", icon: Database },
    { name: "PL/SQL", icon: Database },
    { name: "MySQL", icon: SiMysql },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: Code },
    { name: "Eclipse", icon: SiEclipseide },
    { name: "Postman", icon: SiPostman },
    { name: "OOPs", icon: BookOpen },
    { name: "DBMS", icon: Database },
    { name: "SDLC", icon: Workflow },
    { name: "Agile", icon: Workflow },
  ];

  const projects = [
    {
      title: "Netflix Clone",
      description: "Built a Netflix clone with React.js and responsive UI. Integrated Firebase Authentication for user sign-up, login, and logout. Fetched and displayed movie details dynamically using the TMDB API with state management and routing.",
      images: [ecommerceImage],
      tags: ["React.js", "Firebase", "TMDB API"],
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-Commerce Website",
      description: "Contributed to the development of an e-commerce platform using React.js (frontend) and Node.js with Express.js. Designed and optimized MongoDB database schema for efficient data management with REST APIs.",
      images: [collegeErpImage],
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "#"
    },
    {
      title: "Student Result Management System",
      description: "Developed a web application that automates result processing from uploaded PDF mark sheets, reducing faculty workload by generating insightful academic analytics with secure database management.",
      images: [employeeManagementImage],
      tags: ["Python", "Django", "SQLite3"],
      githubUrl: "#"
    }
  ];

  const experiences = [
    {
      company: "Robowaves",
      position: "MERN Full Stack Development Intern",
      duration: "Jan 2025 – May 2025",
      responsibilities: [
        "Developed and worked on MERN Full Stack projects under professional guidance, gaining hands-on experience in MongoDB, Express.js, React.js, and Node.js",
        "Successfully completed internship tasks and projects, demonstrating sincerity, hard work, and problem-solving skills"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      company: "Pranaksh Technologies LLP",
      position: "Full-Stack Developer Intern",
      duration: "Nov 2023 – Jan 2024",
      responsibilities: [
        "Contributed to the development of an e-commerce website, working on both frontend and backend functionalities",
        "Gained hands-on experience in database management and API development"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      institution: "Jain College of Engineering and Research, Belagavi",
      location: "Belagavi, Karnataka",
      period: "Dec 2021 – May 2025",
      grade: "CGPA: 8.07"
    },
    {
      degree: "Pre-University Education",
      institution: "Tungal Science Composite PU College, Jamkhandi",
      location: "Jamkhandi, Karnataka",
      period: "Jun 2019 – Jul 2021",
      grade: "Aggregate: 72.50%"
    },
    {
      degree: "Karnataka Secondary Education Examination Board",
      institution: "Government High School, Shiragur",
      location: "Shiragur, Karnataka",
      period: "Jun 2018 – Apr 2019",
      grade: "Aggregate: 83.84%"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection
        name="Abhishek Suresh Ghali"
        role="Full-Stack Developer (MERN)"
        tagline="Pursuing a challenging and growth-oriented career in software development. Specialized in MERN stack with expertise in Core Java, SQL, and modern web technologies."
      />
      
      <AboutSection
        description="As a fresh Computer Science Engineering graduate with a strong foundation in full-stack development, I'm passionate about creating efficient web solutions. My internship experiences at Robowaves and Pranaksh Technologies have equipped me with practical skills in MERN stack development, database management, and API integration. I'm eager to contribute to organizational growth while continuously learning and evolving as a developer."
      />
      
      <SkillsSection skills={skills} />
      
      <ProjectsSection projects={projects} />
      
      <ExperienceSection experiences={experiences} />
      
      <EducationSection education={education} />
      
      <ContactSection
        email="abhighali79@gmail.com"
        githubUrl="https://github.com"
        linkedinUrl="https://www.linkedin.com/in/abhishek-ghali/"
      />
      
      <Footer
        name="Abhishek Suresh Ghali"
        githubUrl="https://github.com"
        linkedinUrl="https://www.linkedin.com/in/abhishek-ghali/"
        email="abhighali79@gmail.com"
      />
    </div>
  );
}
