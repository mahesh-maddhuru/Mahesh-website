let info = {
  name: "Mahesh Maddhuru",
  logo_name: "Mahesh Maddhuru",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "As a software engineer, I've had the privilege of gaining over three and a half years of valuable professional experience. Throughout my journey, I've cultivated three core pillars that continue to fuel my passion for this field: \"Inquisitiveness,\" \"Perseverance,\" and \"Insightfulness.\" These pillars have been carefully nurtured, shaping me into the engineer I am today, and allowing me to stand out in a bustling community of talented individuals. With these strengths at my disposal, I find myself driven to create innovative solutions that have a meaningful impact. I am grateful for the opportunities that have come my way, and I'm eager to continue learning and growing in this ever-evolving field.",
  links: {
    linkedin: "http://www.linkedin.com/in/mahesh-m97",
    github: "https://github.com/mahesh-maddhuru",
    resume: "https://mahesh-maddhuru.github.io/resume-latex/mahesh-maddhuru.pdf"
  },
  education: [
    {
      name: "Virginia Tech",
      place: "Blacksburg, VA, USA",
      date: "January, 2023 - May, 2024",
      degree: "MEng in Computer Science",
      gpa: "3.92/4.0",
      description:["Networks and Protocols", "Network Security", "Information Security", "Blockchain", "Machine Learning", "Al Tools Software Development"],
      skills: []
    },
    {
      name: "BMS College of Engineering",
      // course:"BE in Computer Science",
      place: "Bangalore, IN",
      date: "August, 2015 - May, 2019",
      degree: "BE in Computer Science",
      gpa: "8.87/10.0",
      description:["Analysis and design of Algorithms", "Operating Systems",
        "Computer Networks",
        "DBMS",
        "Cryptography and Network Security", "Web Development",
        "Data Science",
        "Discrete Mathematics & Linear Algebra"],
      skills: []
    },
    {
      name: "Vikaas",
      // course:"BE in Computer Science",
      place: "Mangalore, IN",
      date: "August, 2013 - May, 2015",
      degree: "High School",
      gpa: "95.16%",
      description:[],
      skills: []
    }
  ],
  experience: [
    {
      name: "Oracle Cloud Infrastructure (OCI)",
      place: "Bangalore, IN",
      date: "October, 2021 - December 2022",
      position: "Member of Technical Staff IC2 (SDE-2)",
      description:["Led and developed entire infrastructure for an emergent system to apply quick patches to live hypervisors.",
          "Successfully navigated the project through the CSSAP security review process.",
          "Redesigned and developed modules for Yum management, linux system file modification, custom package installation, and validations.",
          "These Modules optimized the 'image build pipeline', reducing build time by approximately 25% and enhancing its stability.",
          "Developed a versatile Maven plugin for parallel Docker image retrieval on all build hosts.",
          "As the Release coordinator, deployed the updated Hypervisor base image on the Virtual Machine Infrastructure fleet.",
          "As an On-Call engineer, successfully resolved a multitude of customer issues."
      ],
        skills: [
          "Java",
          "Dropwizard",
          "Dagger2.0",
          "Terraform",
          "JUnit",
          "Mockito",
          "Oracle Cloud",
          "CI/CD tools",
          "Docker"
        ]
    },
    {
      name: "Akamai Technologies",
      place: "Bangalore, IN",
      date: "January, 2019 – September, 2021",
      position: "Software Engineer II + Software Engineer + Intern",
      description:["Designed and developed the \"Activation\" algorithm, reducing product operations team's efforts by 50% through complex business logic computation (calculating the product’s pricing based on region, rate card, partner discount, etc.) and automated product launch lifecycle with smart retry mechanism.",
        "Developed Authorization layer from the ground up with granular data access control.",
        "Developed a lock mechanism to prevent product data changes in a non-draft state during configuration workflow.",
        "Devised and optimized partner open APIs for fast reads (<1.5 seconds response time).",
        "Improved response times for client APIs by implementing inter-service calls and data caching.",
        "Facilitated integration of multiple client systems with our services.",
        "Built many reusable UI components on AngularJS for configuring product metadata."
      ],
      skills: [
        "Java",
        "JavaScript",
        "SpringBoot",
        "Hibernate",
        "JUnit",
        "Mockito",
        "Oracle DB",
        "CI/CD tools",
        "Docker",
        "AngularJS",
        "Bootstrap",
        "REST APIs"
      ]
    },
    {
      name: "Leanovate Solutions",
      place: "Bangalore, IN",
      date: "June, 2018 - November, 2018",
      position: "Fullstack Engineer Intern",
      description:["Assisted in designing a MongoDB database  for a building management system.",
        "Developed REST APIs in ExpressJS to manage meeting room booking.",
        "Devised automation tests in Python using Selenium.",
        "Generated PDF reports for booking statistics on a Flask microservice."
      ],
      skills: [
        "Python",
        "ExpressJS",
        "MongoDB",
        "Flask",
        "Selenium.",
        "Docker",
        "D3.js"
      ]
    },
    {
      name: "JSW",
      place: "Toranagallu, IN",
      date: "June, 2017 - July, 2017",
      position: "Software Engineer Intern",
      description:["Designed and built a responsive website for JSW EPF Services.",
        "Worked on designing schematics for the website and integrated them with existing systems."
      ],
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "JQuery."
      ]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Java",
        "Javascript",
        "Python",
        "C++"
      ],
      icon: "fa fa-code"
    },
    {
      title: "frameworks",
      info: [
        "Dropwizard",
        "Dagger 2.0",
        "SpringBoot",
          "Terraform",
          "Express JS",
          "Android",
          "Hibernate",
          "JUnit",
          "Mockito",
          "Flask",
          "Selenium"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["VueJS",  "AngularJS", "NodeJS", "HTML", "CSS", "JQuery", "Bootstrap"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL",],
      icon: "fa fa-database"
    },
    {
      title: "Software Tools",
      info: [
        "Oracle Cloud",
        "CI/CD tools",
        "DevOps",
        "Docker",
        "GIT",
        "Maven",
        "Gradle"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "Operating Systems",
      info: [
        "MacOS",
        "Linux",
        "Windows"
      ],
      icon: "fas fa-desktop"
    }
  ],
  portfolio: [

    {
      name: "Todo-application",
      pictures: [

        {
          img: require("./src/assets/portfolio/todo-application/one.png")
        },
        {
          img: require("./src/assets/portfolio/todo-application/two.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Netlify"],
      category: "web todo list  app ",
      github: "https://github.com/mahesh-maddhuru",
      visit: "https://github.com/mahesh-maddhuru",
      description:
        "Todo Application was made to help me with the learning schedule and it seams was doing a great job this app helping me to organize all the daily tasks."
    },



    {
      name: "Grocery-listing-react",
      pictures: [
        // {
        //   img: require("./src/assets/portfolio/clumpr/icon.png")
        // },
        {
          img: require("./src/assets/portfolio/grocery/one.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/two.png")
        }
      ],
      technologies: ["CSS", "JavaScript","React.js", "HTML5",],
      category: "Web App",
      github: "https://github.com/mahesh-maddhuru",
      date: "",
      visit: "https://github.com/mahesh-maddhuru",
      description:  "Grocery-listing-react it's a simple app that can help you doing shoppings.",
    },
    {
      name: "Gitscores",
      pictures: [
        {
          img: require("./src/assets/portfolio/Gitscores/one.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/two.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/three.png")
        },

      ],
      technologies: ["JavaScript", "CSS", "EJS", "Herokuapp"],
      category: "Scoring app for Github",
      github: "https://github.com/mahesh-maddhuru",
      date: "Aug, 2021 - Sep, 2021",
      visit: "https://github.com/mahesh-maddhuru",
      description:
        "Gitscores v1.0.2 was updated from the orginal with more tools that let you personalize the app on your desingn."
    }
  ],
   recommendations: [
     {
       title: "TBD",
       author: "TBD",
       position: "TBD",
       company: "TBD",
       location: "TBD"
     },
    {
      title: "TBD1",
      author: "TBD1",
      position: "TBD1",
      company: "TBD1",
      location: "TBD1"
    }
  ]
};

export default info;



