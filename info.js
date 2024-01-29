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
    "I am an experienced software engineer with a proven track record in developing and optimizing infrastructure and systems. Proficient in (OCI) Oracle Cloud Infrastructure (Compute) and skilled in full-stack development, I have successfully led and developed projects that have significantly improved efficiency and stability. My expertise includes designing complex algorithms, implementing authorization layers, optimizing APIs, and building reusable UI components. With a strong focus on problem-solving and attention to detail, I have consistently delivered high-quality solutions while working under tight deadlines. Committed to continuous learning and staying up-to-date with emerging technologies, I am now seeking new opportunities to contribute my skills and expertise in a challenging environment.",
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
      description:["Networks and Protocols", "Network Security", "Information Security", "Blockchain","Information Storage and Retrieval","Web Development", "Machine Learning", "Al Tools Software Development"],
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
  publication: [
    {
      name: "Intellectual Property",
      place: "India",
      date: "June, 2021",
      degree: "System and method for implementation of inter-network transaction process in blockchain distribution networks",
      gpa: "",
      description:[],
      skills: [],
      isButton: true,
      buttonName:"View Patent",
      url: "https://patentscope.wipo.int/search/en/detail.jsf?docId=IN326376132"
    }
  ],
  experience: [
    {
      name: "Oracle Cloud Infrastructure (OCI)",
      place: "Bangalore, IN",
      date: "October, 2021 - December 2022",
      position: "Member of Technical Staff IC2 (SDE-2)",
      description:["Led a project aimed at applying rapid patches to live hypervisors and developed its entire infrastructure, effectively bringing down the patching time to under 15 minutes.",
          "Successfully navigated the project through the CSSAP security review process.",
          "Redesigned and developed modules for Yum management, linux system file modification, custom package installation, and validations.",
          "These Modules optimized the 'image build pipeline', reducing build time by approximately 25% and enhancing its stability.",
          "Developed a versatile Maven plugin for parallel Docker image retrieval on all build hosts, thus reducing the test suit execution time by 20%.",
          "As the Release coordinator, deployed the updated Hypervisor base image on the Virtual Machine Infrastructure fleet on various OCI regions",
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
      description:["Designed and developed the \"Activation\" algorithm, which automated the product launch lifecycle with a smart retry mechanism and reduced the product operations team's efforts by 50%. It efficiently handled complex business logic, including the calculation of product pricing based on factors like region, rate card, and partner discount.",
        "Developed Authorization layer from the ground up with granular data access control.",
        "Developed a robust lock mechanism to prevent product data changes in a non-draft state during configuration workflow.",
        "Implemented inter-service communication and data caching for client and partner APIs to ensure fast response times (<1 second).",
        "Streamlined integration processes to facilitate seamless connectivity between our services and multiple client systems.",
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
       title: "Focussed, Dedicated, Hardworking, Team player and what not. There are many adjectives one could associate Mahesh with. He is capable of single handedly addressing critical issues and features and also can guide/lead team members into developing quality products. Mahesh is clearly a developer any one would love working with. He clearly is more than \'Member of Technical Staff SDE2\'.",
       author: "Akshay L",
       position: "R&D Manager",
       company: "Oracle Cloud Infrastructure",
       location: "Bangalore, IN"
     },
     {
       title: "I had the pleasure of working with Mahesh at Akamai. He is very skilled in web development and has great approach to problem solving. He has good understanding of OOPS concepts and tries to drill the requirements to understand the problem in depth. He is an asset to any team.",
       author: "Himanshu Singhal",
       position: "Senior Software Engineer",
       company: "Akamai Technologies",
       location: "Bangalore, IN"
     }
  ]
};

export default info;



