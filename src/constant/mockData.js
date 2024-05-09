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

const DATA = {

  headerText: [
    {
      header_text: "Am 1.Oktober 2024 beginne ich meinen Master in Informatik an der Uni Wien. Dafür suche ich einen Job und das ist meine selbst programmierte Bewerbung. ",
    }
  ],

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
        "11 Monate arbeitete ich bei CGI Consulting, davon 5 Monate in Danzig (Polen) als Fullstack Developer und IT-Consultant. \n\nIch sammelte vor allem Erfahrung im leiten und führen von kleineren Teams bis zu 6 Personen, im Entwickeln verschiedenster Applikationen mit Python (Django, Flask), VueJS und Solidity, sowie das regelmäßige Präsentieren von Projekterfolgen vor bis zu 800 Personen intern und extern vom Unternehmen. Mein Anstellung endete mit der Aufnahme meines Auslandssemesters in Belgien/Frankreich.",
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
      endDate: "Aug 2022",
      position: "UI/UX-Designer",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: THWS,
        name: "THWS",
        info: "Technische Hochschule Würzburg-Schweinfurt",
      },
      description:
        "Als wissenschaftliche Hilfskraft der THWS war es meine Aufgabe UX-Design Prototypen zu entwickeln und anhand von Nutzertest zu validieren bzw. anschließend zu optimieren. \n\nDarüber hinaus war es Aufgabe die Nutzertests entsprechend vorzubereiten, zu protokollieren und im passenden Format zu präsentieren.",
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
      institution: "Universität Wien",
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
      project_description: "Ein großes Projekt zum Scannen von E-Commerce-Websites mit OCR und zur Übersetzung der gescannten Daten in JSON-LD.",
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
      project_description: "Eine Web-App, mit der man Munich Pieces (NFTs) von Kunstwerken von Münchner Museen kaufen kann, um dem Museum zu helfen, Einnahmen zu generieren.",
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
      project_description: "Meine größte Leidenschaft ist die Musik, in meiner Freizeit baue ich gerne Synthesizer, vor allem für Techno."
    },
    {
      id: "skill_4",
      icon: SkillKotlin,
      name: "Kotlin",
      description: "Android Dev",
      skill_level: "6.5/10",
      skill: "kotlin",
      project_name: "CitIndi",
      project_description: "Eine in Kotlin geschriebene Android-App zur Verwaltung meiner Reisen und Aufenthalte an den verschiedensten Orten in der Welt.",
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
    header_name: "Das bin ich...",
    pic_text: "Mario, 24 aus Würzburg",
    hobbies: "Hobbies:",
    hobbies_attr: "Laufen, Boxen, Lesen",
    interest: "Interessen:",
    interest_attr: "Musik, Popkultur, Geschichte",
    cv: "Lebenslauf",
    notes: "Noten",
    ausbildung: "Ausbildung",
    exp: "Erfahrung",
    skills: "Skills",
    projects: "Projekte"
  },

  titles: {
    title_one: "Berufliche Erfahrung",
    title_two: "Ausbildung",
    title_three: "Programming Skills",
    title_four: "Andere Skills",
    title_five: "Sprachen",
    title_six: "Programme",
    title_seven: "Deutsch",
    title_eight: "Englisch (B2)",
    title_nine: "Französisch (A2)"
  },

  cloud_text: [
      "Boxen", "Pop-Kultur", "Kafka", "David Bowie", "Techno", "Punk",
      "10Km-Lauf", "Fahrrad", "Geschichte", "Claude Debussy", "Blade Runner",
      "Apocalypse Now", "Danzig"
  ]
  
};

export default DATA;
