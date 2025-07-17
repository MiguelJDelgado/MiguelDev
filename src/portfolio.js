import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 


const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};


const illustration = {
  animated: true
};

const greeting = {
  username: "Miguel Delgado",
  title: "Hi all, I'm Miguel",
  subTitle: emoji(
    "A passionate Full Stack Software Developer, having an experience of building applications with: C# / JavaScript / HTML / CSS / Nodejs / and some other cool libraries, frameworks and technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Xbqg1bhc7ZMCgQBD9275XloCjrl42X1b/view?usp=sharing",
  displayGreeting: true 
};


const socialMediaLinks = {
  github: "https://github.com/MiguelJDelgado",
  linkedin: "https://www.linkedin.com/in/miguel-delgado-544384339",
  gmail: "migueljd193@gmail.com",
  instagram: "https://www.instagram.com/mig630/",

  display: true
};


const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("🚀 Passionate about building Full Stack applications with React, Node.js, and C#"),
emoji("🚀 Experience developing RESTful APIs using Node.js, Express and MongoDB"),
emoji("🚀 Strong understanding of database management with SQL and SQLite"),
emoji("🚀 Integration between frontend and backend in full stack applications"),
emoji("🚀 Developed projects such as ''BiblioTech'' and ''Gastos Residenciais''"),
emoji("🚀 Hands-on experience with CRUD operations in JavaScript and C#"),
emoji("🚀 Ready to apply practical knowledge in real-world software projects"),
emoji("🚀 Proficient with modern tools: Git, Visual Studio, VS Code, Figma, and Postman"),
emoji("🚀 Fluent in English and comfortable in international environments"),
emoji("🚀 Always learning – completed several certifications to stay up to date"),
  ],


  softwareSkills: [
  {
    skillName: "Html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "Css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "Sql-Database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "custom-csharp"
  },
  {
    skillName: ".NET",
    fontAwesomeClassname: "custom-dotnet"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "custom-git"
  },
],
  display: true 
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Fatec Sorocaba",
      logo: require("./assets/images/Fatecsorocaba.png"),
      subHeader: "Associate Degree in Systems Analysis and Development",
      duration: "August 2023 - Now",
      desc: `The Systems Analysis and Development program at FATEC is a higher education technology course focused on software engineering, programming, and database management. 
      Throughout the program, students gain practical and theoretical knowledge in system design, development of web applications, and IT project management. 
      The course prepares professionals to build efficient and innovative technological solutions for the industry.`,

    }
  ]
};



const openSource = {
  showGithubProfile: "true",
  display: true 
};


const bigProjects = {
  title: "Main Projects",
  subtitle: "SOME PROJECTS THAT I´VE BEEN WORKING ON",
  projects: [
    {
      image: require("./assets/images/Bibliotech.webp"),
      projectName: "Bibliotech",
      projectDesc: "Bibliotech is a virtual bookshelf for technology books. The project was developed to apply my knowledge of Node.js and React.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/MiguelJDelgado/BiblioTech.git"
        }
      ]
    },
    {
      image: require("./assets/images/GastosResidenciais.webp"),
      projectName: "Gastos Residenciais",
      projectDesc: "Expense management application within a residence. The project was developed to apply my knowledge of C# and React.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/MiguelJDelgado/GastosResidenciais.git"
        }
      ]
    },
    {
      image: require("./assets/images/Github.webp"),
      projectName: "MiguelJDelgado",
      projectDesc: "To understand more about my other projects, visit my profile on github",
      footerLink: [
        {
          name: "Visit Github Profile",
          url: "https://github.com/MiguelJDelgado"
        }
      ]
    }
  ],
  display: true 
};

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have!",

  achievementsCards: [
    {
      title: "XP Inc. - Full Stack Developer",
      subtitle:
        "Master end-to-end web application development with .NET and React, and enhance your skills to become a complete full stack developer.",
      image: require("./assets/images/dio.webp"),
      imageAlt: "Logo DIO",
      footerLink: [
        {
          name: "Certification",
          url: "https://hermes.dio.me/certificates/YI6QLL42.pdf"
        }
      ]
    },
    {
      title: "Node.js: continue seu projeto full stack criando uma API com Express",
      subtitle:
        "Course focused on building RESTful APIs using Node.js and Express, implementing routes, controllers, and service layers for full stack integration.",
      image: require("./assets/images/alura.webp"),
      imageAlt: "Alura Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/certificate/db9a5981-d11d-4991-8941-750bcdb60e1b"
        }
      ]
    },
    {
      title: "Node.js: Criando uma API Rest com Express e MongoDB",
      subtitle:
        "Build RESTful APIs using Node.js, Express, and MongoDB, applying routing, middleware, and database integration for backend applications.",
      image: require("./assets/images/alura.webp"),
      imageAlt: "Alura Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/certificate/0a957eaa-4878-4b2c-b01e-ac216715251f"
        }
      ]
    },
    {
      title: ".NET: Persistindo dados com Entity Framework Core",
      subtitle:
        "Learn to persist and manage data efficiently using Entity Framework Core, working with ORM, relationships, and generic repositories in .NET applications.",
      image: require("./assets/images/alura.webp"),
      imageAlt: "Alura Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/certificate/c6cdf61b-1951-4cd9-aa12-9586f1ae7ca6"
        }
      ]
    },
    {
      title: "React: Comece seu projeto full stack",
      subtitle:
        "Get started with React fundamentals, learning components, props, state, and styled-components to build dynamic and scalable web interfaces.",
      image: require("./assets/images/alura.webp"),
      imageAlt: "Alura Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/certificate/e74b05fd-eaab-4f53-83fe-6653b6ed3e67"
        }
      ]
    },
    {
      title: "React e Node.js: Consumindo APIs no React no projeto full stack",
      subtitle:
        "Learn to connect frontend and backend by consuming REST APIs in React, enhancing integration in full stack projects using practical examples.",
      image: require("./assets/images/alura.webp"),
      imageAlt: "Alura Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/certificate/97e478fc-b1b3-443a-949a-02d1ce62dc60"
        }
      ]
    },
    {
      title: "HTTP: Entendendo a web por baixo dos panos",
      subtitle:
        "Understand the fundamentals of web communication through HTTP, exploring request/response cycles, headers, methods, status codes, and HTTPS security.",
      image: require("./assets/images/alura.webp"),
      imageAlt: "Alura Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/certificate/82c8835b-6b26-44d9-a618-23a93b642886"
        }
      ]
    }
  ],
  display: true
};


const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "My e-mail  is open for all. (migueljd193@gmail.com)"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
