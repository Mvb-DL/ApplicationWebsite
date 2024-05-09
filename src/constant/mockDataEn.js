import {
    DiamondLgBlue,
    DiamondLgGreen,
    DiamondLgOrange,
    DiamondLgPink,
    DiamondLgYellow,
    SkillHtml5,
    SkillPhotoshop,
    SkillXd,
    CGI,
    SkillPowerpoint,
    THWS,
    SkillPython,
    SkillJS,
    SkillCplus,
    SkillKotlin,
    SkillSolidity,
    SkillBash,
    SkillPhp,
    SkillBlender,
    SkillDesign,
    Ableton,
    Word,
    Waldorf,
    UniWien
  
  } from "../assets/image";
  
  const DATA_EN = {
  
    headerText: [
      {
        header_text: "On October 1, 2024 I will start my Master's degree in Computer Science at the University of Vienna. Therefore I am looking for a job and this is my self-programmed application for it.",
      }
    ],
  
    professionalExperiences: [
      {
        id: "prof_exp_1",
        startDate: "Sep 2022",
        endDate: "Aug 2023",
        position: "Internship/Working student",
        diamondColors: ["Purple", "Yellow", "Blue"],
        company: {
          logo: CGI,
          name: "CGI",
          info: "IT-Consulting, Frankfurt am Main",
        },
        description:
          "I worked at CGI Consulting for 11 months, including 5 months in Gdansk (Poland) as a full-stack developer and IT consultant.  \n\nI mainly gained experience in managing and leading smaller teams of up to 6 people, developing various applications with Python (Django, Flask), VueJS and Solidity, as well as regularly presenting project successes to up to 800 people internally and externally from the company. My employment ended with the start of my semester abroad in Belgium/France.",
        links: [
          {
            label: "CGI",
            url: "https://www.cgi.com/de/de",
          },
        ],
      },
      {
        id: "prof_exp_2",
        startDate: "Mar 2022",
        endDate: "Aug 2022",
        position: "UI/UX-Designer",
        diamondColors: ["Blue", "Orange", "Pink"],
        company: {
          logo: THWS,
          name: "THWS",
          info: "Technical University of Applied Sciences Würzburg-Schweinfurt",
        },
        description:
          "As a research assistant at THWS, my task was to develop UX design prototypes and to validate and subsequently optimize them using user tests.",
        links: [
          {
            label: "THWS",
            url: "https://www.thws.de/",
          },
        ],
      },
      
    ],
    educationalExperiences: [
  
      {
        id: "edu_1",
        icon: Waldorf,
        course: "Waldorf School Würzburg",
        institution: "Waldorf School Würzburg",
        degree: "Abitur",
        startDate: "2006",
        endDate: "2019",
        position: "begin"
      },
  
      {
        id: "edu_2",
        icon: THWS,
        course: "E-Commerce B.Sc.",
        institution: "THWS",
        degree: "Bachelor of Science",
        startDate: "2021",
        endDate: "2024",
        position: "middle"
      },
  
      {
        id: "edu_3",
        icon: UniWien,
        course: "Master Computer Science",
        institution: "University Wien",
        degree: "Master of Science",
        startDate: "2024",
        endDate: "~",
        position: "end"
      },
  
    ],
    skills: [
      {
        id: "skill_1",
        icon: SkillPython,
        name: "Python",
        description: "Django, Tensorflow, Flask, Pandas",
        skill_level: "9/10",
        skill: "python",
        project_name: "MetaMerce",
        project_description: "A huge project to scan e-commerce websites with OCR and translate the scaned data into JSON-LD",
        project_link: "https://github.com/Mvb-DL/MetaMerce"
      },
      {
        id: "skill_2",
        icon: SkillJS,
        name: "JavaScript",
        description: "ReactJS, ThreeJS",
        skill_level: "7/10",
        skill: "js",
        project_name: "Munich Pieces",
        project_description: "This is a Web-App where you can buy Munich Pieces (NFTs) of Art pieces in Munich to help museum to earn money",
        project_link: "https://github.com/Mvb-DL/NFT-Munich-Pieces"
      },
      {
        id: "skill_3",
        icon: SkillCplus,
        name: "C++",
        description: "Juice",
        skill_level: "6/10",
        skill: "c",
        project_name: "Ableton Plugins",
        project_description: "My greatest passion is music, in my spare time I like to build synthesizers, especially for techno."
      },
      {
        id: "skill_4",
        icon: SkillKotlin,
        name: "Kotlin",
        description: "Android Dev",
        skill_level: "6.5/10",
        skill: "kotlin",
        project_name: "CitIndi",
        project_description: "An Android App written in Kotlin for managing my trips and stays in different places in the world",
        project_link: "https://github.com/Mvb-DL/CitIndi"
      },
      {
        id: "skill_5",
        icon: SkillSolidity,
        name: "Solidity",
        description: "Ethereum & Web3 Dev",
        skill_level: "7.7/10",
        skill: "solidity",
      },
      {
        id: "skill_6",
        icon: SkillBash,
        name: "Bash",
        description: "Linux",
        skill_level: "5/10",
        skill: "bash",
      },
      {
        id: "skill_7",
        icon: SkillPhp,
        name: "PHP",
        description: "WordPress Plugin Dev",
        skill_level: "8.5/10",
        skill: "php",
      },
  
      {
        id: "skill_8",
        icon: SkillHtml5,
        name: "HTML",
        description: "WordPress Plugin Dev",
        skill_level: "9.8/10",
        skill: "html",
      },
  
    ],
  
    otherSkills:[
      {
        id: "skill_9",
        icon: SkillBlender,
        name: "Blender",
        skill_level: "5/10",
        skill: "blender",
      },
  
      {
        id: "skill_10",
        icon: Ableton,
        name: "Ableton",
        skill_level: "7/10",
        skill: "ableton",
      },
  
      {
        id: "skill_11",
        icon: SkillDesign,
        name: "InDesign",
        skill_level: "8/10",
        skill: "design",
      },
  
      {
        id: "skill_12",
        icon: Word,
        name: "Microsoft Office",
        skill_level: "8/10",
        skill: "micro",
      },
    ],
  
    certificatesAndAwards: [
      {
        id: "cert_award_1",
        icon: "",
        provider: "Sportverein Veitshöchheim",
        course: "Ausgebildeter Fitness-Trainer",
        startDate: "Dez 2019",
        endDate: "-",
      },
      {
        id: "cert_award_2",
        icon: "",
        provider: "-",
        course: "-",
        startDate: "-",
        endDate: "-",
      },
      {
        id: "cert_award_3",
        icon: "",
        provider: "-",
        course: "-",
        startDate: "-",
        endDate: "-",
      },
    ],
    hobbiesAndInterests: [
      {
        id: "hob_1",
        icon: "",
        name: "Gym",
      },
      {
        id: "hob_2",
        icon: "",
        name: "-",
      },
      {
        id: "hob_3",
        icon: "",
        name: "Reisen",
      },
      {
        id: "hob_4",
        icon: "",
        name: "-",
      },
    ],
  
    model:{
      modelUrl: ""
    },
  
    langOption:{
      german_icon: "",
      english_icon: "",
    },
  
    externDocs: 
      {
        logo: "",
        notes: "",
        realpdf: "./docs/lebenslauf.pdf"
        
      },

      biopic_text: {
        header_name: "That´s me...",
        pic_text: "Mario, 24 from Würzburg",
        hobbies: "Hobbies:",
        hobbies_attr: "Running, Boxing, Reading",
        interest: "Interests:",
        interest_attr: "Music, pop culture, history",
        cv: "Resumee",
        notes: "Notes",
        ausbildung: "Education",
        exp: "Experience",
        skills: "Skills",
        projects: "Projects"
      },

      titles: {
        title_one: "Professional experience",
        title_two: "Education",
        title_three: "Programming Skills",
        title_four: "Other Skills",
        title_five: "Languages",
        title_six: "Programs",
        title_seven: "German",
        title_eight: "English (B2)",
        title_nine: "French(A2)"
      },

      cloud_text: [
        "Boxing", "Pop culture", "Kafka", "David Bowie", "Techno", "Punk",
        "10K-Run", "Bike", "History", "Claude Debussy"
    ]
  
  
    
  };
  
  export default DATA_EN;
  