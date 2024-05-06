import {
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  SkillExcel,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  SkillPhotoshop,
  SkillXd,
  PDF,
  CGI,
  English,
  German,
  SkillPowerpoint,
  THWS,
  SkillPython,
  SkillJS,
  Notes,
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

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Sep 2022",
      endDate: "Aug 2023",
      position: "Praktikum/Werkstudent",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: CGI,
        name: "CGI",
        info: "IT-Consulting, Frankfurt am Main",
      },
      description:
        "PwC bietet branchenspezifische Dienstleistungen in den Bereichen Wirtschaftsprüfung, Steuerberatung und Unternehmensberatung.",
      links: [
        {
          label: "CGI",
          url: "https://www.cgi.com/de/de",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "März 2022",
      endDate: "-",
      position: "UI/UX-Design",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: THWS,
        name: "THWS",
        info: "Technische Hochschule Würzburg-Schweinfurt",
      },
      description:
        "Die Fürstlich Castell’sche Bank, Credit-Casse AG ist ein in Franken ansässiges Kreditinstitut. Juristischer Sitz des Unternehmens ist Castell, die Hauptverwaltung und die Geschäftsführung befinden sich seit 1972 in Würzburg.",
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
      course: "Waldorfschule Würzburg",
      institution: "Waldorfschule Würzburg",
      degree: "Abitur",
      startDate: "2006",
      endDate: "2019",
      position: "begin"
    },


    {
      id: "edu_2",
      icon: THWS,
      course: "Betriebswirtschaftslehre",
      institution: "THWS",
      degree: "Bachelor",
      startDate: "2021",
      endDate: "2024",
      position: "middle"
    },

    {
      id: "edu_3",
      icon: UniWien,
      course: "Uni Wien",
      institution: "WU Wien",
      degree: "Master",
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
      project_description: "Meine größte Leidenschaft ist die Musik, in meiner Freizeit baue ich gerne Synthesizer, vor allem für Techno"
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
    german_icon: German,
    english_icon: English,
  },

  externDocs: 
    {
      logo: PDF,
      notes: Notes,
      realpdf: "./docs/lebenslauf.pdf"
      
    }


  
};

export default DATA;
