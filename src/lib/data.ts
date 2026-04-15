// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  title: string;
  description: string;
  image: string | null;
  github: string;
}

export interface Certificate {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Experience {
  role: string;
  location: string;
  period: string;
  items: string[];
}

export interface SkillTag {
  name: string;
  tooltip: string;
}

export interface SkillGroup {
  icon: string;
  title: string;
  tags: SkillTag[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface NavItem {
  icon: string;
  label: string;
  href: string;
}

// ─── Personal Info ─────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: 'Dylan Ferreyra',
  title: 'Junior Data Engineer  /  Junior Backend Engineer',
  location: 'La Plata, Buenos Aires, Argentina',
  email: 'dylanferreyra006@gmail.com',
  github: 'https://github.com/DylanGonzaloFerreyra',
  linkedin: 'https://www.linkedin.com/in/dylan-ferreyra-95698834a',
};

// ─── About ────────────────────────────────────────────────────────────────────

export const about =
  'Data & Backend Engineer based in Argentina. I specialize in building efficient data pipelines and scalable backend systems using Python, SQL, and Cloud technologies. Currently applying my skills at Wollen Labs while pursuing a Data Science degree at UNLP. Passionate about bridging the gap between complex data and actionable business solutions.';

// ─── Nav Items ────────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { icon: 'Briefcase', label: 'Experience', href: '#experience' },
  { icon: 'Wrench', label: 'Skills', href: '#skills' },
  { icon: 'Rocket', label: 'Projects', href: '#projects' },
  { icon: 'ScrollText', label: 'Certificates', href: '#certificates' },
  { icon: 'GraduationCap', label: 'Education', href: '#education' },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Fictional Store Dashboard',
    description:
      'Fake Store Dashboard created using Power BI and enriched with data generated in Python using Faker library.',
    image: '/project_covers/Fictional-store-Dashboard.png',
    github: 'https://github.com/DylanGonFer/Fictional-store-Dashboard/tree/main',
  },
  {
    title: 'Music Streaming Preference Analysis',
    description:
      'Analysis of listener preferences on music platforms. Python (Pandas) for data cleaning, Power BI for interactive dashboard.',
    image: '/project_covers/Music-Streaming-Preference-Analysis.png',
    github:
      'https://github.com/DylanGonzaloFerreyra/Music-Streaming-Preferences-Dashboard/tree/main',
  },
  {
    title: 'Meteorology Pipeline',
    description: 'Weather Data Pipeline with Apache Airflow.',
    image: '/project_covers/MeteorologyPipeline.jpg',
    github: 'https://github.com/DylanGonzaloFerreyra/Meteorology-Pipeline',
  },
  {
    title: 'Weather Data Automation',
    description:
      'Automated system to collect, store, and manage weather data using OpenWeatherMap API, MongoDB, and Airflow.',
    image: '/project_covers/WeatherDataAutomation.jpg',
    github: 'https://github.com/DylanGonzaloFerreyra/Weather-Data-Automation',
  },
  {
    title: 'SnowPypeLine',
    description:
      'Pipeline for extracting, cleaning, and storing meteorological data with Airflow, Pandas, and Snowflake.',
    image: '/project_covers/SnowPypeline.png',
    github: 'https://github.com/DylanGonzaloFerreyra/SnowPypeLine',
  },
  {
    title: 'DBT SnowPipeline',
    description: 'Transforming and modeling datasets using dbt (Data Build Tool) and Snowflake.',
    image: '/project_covers/DBTSnowPipeline.jpg',
    github: 'https://github.com/DylanGonzaloFerreyra/DBT-SnowPipeline',
  },
  {
    title: 'Weather Flow Project',
    description:
      'Automated system for extracting, transforming and storing meteorological data using OpenWeatherMap, Spark, Supabase & Airflow.',
    image: '/project_covers/WeatherFlowProject.jpg',
    github: 'https://github.com/DylanGonzaloFerreyra/Weather-Flow-Project',
  },
  {
    title: 'Adapted House 3D Simulator',
    description: 'Interactive 3D simulation of a smart home automation system built in Unity.',
    image: '/project_covers/SimuladorDomoticoCover.png',
    github: 'https://simulador-domotico.github.io/',
  },
  {
    title: 'Augmented Reality Educational App',
    description:
      'Mobile AR application built with Unity and Vuforia SDK that detects image targets to render 3D models with multimedia events.',
    image: null,
    github: '',
  },
  {
    title: 'Siamerse',
    description:
      'Full-stack mobile app with React Native (Expo SDK 54), Express 5, PostgreSQL, and Drizzle ORM. AI integration via Google Gemini.',
    image: '/project_covers/SiamerseCover.png',
    github: 'https://github.com/DylanGonzaloFerreyra/Siamerse',
  },
];

// ─── Certificates ─────────────────────────────────────────────────────────────

export const certificates: Certificate[] = [
  {
    title: 'Python',
    description: "CS50's Introduction to Programming with Python",
    image: '/certificates/CS50P_PYTHON.jpg',
    link: 'https://certificates.cs50.io/bca18fcf-a55c-42f1-96ce-911e7ab2e8fa.pdf?size=letter',
  },
  {
    title: 'SQL',
    description: "CS50's Introduction to Databases with SQL",
    image: '/certificates/CS50_SQL.jpg',
    link: 'https://cs50.harvard.edu/certificates/99ff6a4a-48a5-42c0-85ec-ca3994134042',
  },
  {
    title: 'Big Data',
    description: "IBM's Big Data Certificate",
    image: '/certificates/big_data.jpg',
    link: 'https://courses.cognitiveclass.ai/certificates/055e188dc2094198b9bce7fada35bc7c',
  },
  {
    title: 'Data Science 101',
    description: "IBM's Data Science 101 Certificate",
    image: '/certificates/DataScience.jpg',
    link: 'https://courses.cognitiveclass.ai/certificates/44f020c40a0f4b0fa58b12bd48d27caa',
  },
  {
    title: 'Data Science Methodology',
    description: "IBM's Data Science Methodology Certificate",
    image: '/certificates/Methodology.jpg',
    link: 'https://courses.cognitiveclass.ai/certificates/44bbe2dd450b436997739b70b75530e3',
  },
  {
    title: 'AWS Cloud Practitioner',
    description: 'AWS Cloud Practitioner Certificate',
    image: '/certificates/udemy_AWS_Certified_Cloud_Practitioner.jpg',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-7dd03ee4-a8b3-41bc-bb54-20e2997df460.pdf',
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: 'Data & Backend Engineer | Wollen Labs',
    location: 'Remote',
    period: 'Nov 2025 - Present',
    items: [
      'Architected a high-frequency background job engine to manage complex priority logic and time-sensitive access windows.',
      'Led a core database refactoring initiative, transitioning from a monolithic schema to a scalable domain-driven architecture.',
      'Developed a centralized multi-channel notification system integrating Resend, Twilio, and WebSockets.',
      'Standardized the API layer using tRPC and Zod for end-to-end type safety.',
    ],
  },
  {
    role: 'Software Developer Intern | UNITEC - Edetec - LabTec at UNLP',
    location: 'La Plata, Buenos Aires',
    period: 'Apr 2025 - Nov 2025',
    items: [
      'Developed interactive 3D simulation logic in Unity for a home automation system (Casa Adaptada).',
      'Built an Augmented Reality application using Unity and Vuforia SDK.',
      'Conducted technical research on AI, Virtual Agents, and Universal Design principles.',
      'Collaborated on embedded systems development with Arduino (I2C, PWM, EEPROM).',
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    icon: 'Laptop',
    title: 'Programming Languages',
    tags: [
      {
        name: 'Python',
        tooltip: '3+ years · Primary language for data pipelines, automation, and backend services. Used with Pandas, Airflow, FastAPI, and Spark.',
      },
      {
        name: 'TypeScript',
        tooltip: '1+ year · Used for full-stack development at Wollen Labs with tRPC, Drizzle ORM, and React Native.',
      },
      {
        name: 'SQL',
        tooltip: '2+ years · Query and model data across PostgreSQL, MySQL, and Snowflake. Also used with dbt for transformations.',
      },
    ],
  },
  {
    icon: 'Settings',
    title: 'Backend & APIs',
    tags: [
      {
        name: 'FastAPI',
        tooltip: '1+ year · Built REST APIs for data services and internal tooling using Python async patterns.',
      },
      {
        name: 'tRPC',
        tooltip: '1 year · End-to-end type-safe API layer used at Wollen Labs with Zod validation.',
      },
    ],
  },
  {
    icon: 'Database',
    title: 'Database & Storage',
    tags: [
      {
        name: 'PostgreSQL',
        tooltip: '2+ years · Primary relational database. Used at Wollen Labs for core schema design and migrations.',
      },
      {
        name: 'MySQL',
        tooltip: '1 year · Used in academic projects and early backend work.',
      },
      {
        name: 'SQLite',
        tooltip: '1 year · Lightweight local storage for scripts and prototypes.',
      },
      {
        name: 'MongoDB',
        tooltip: '1 year · Used in the Weather Data Automation project for storing raw API responses.',
      },
      {
        name: 'Drizzle (ORM)',
        tooltip: '1 year · Type-safe ORM used at Wollen Labs with PostgreSQL and TypeScript.',
      },
    ],
  },
  {
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    tags: [
      {
        name: 'AWS',
        tooltip: 'Certified Cloud Practitioner · Familiar with S3, Lambda, EC2, and IAM for cloud-hosted data solutions.',
      },
      {
        name: 'Docker & Docker Compose',
        tooltip: '1+ year · Containerized data pipelines and backend services for consistent dev and prod environments.',
      },
    ],
  },
  {
    icon: 'BarChart3',
    title: 'Data Visualization',
    tags: [
      {
        name: 'Power BI',
        tooltip: '2+ years · Built interactive dashboards for store analytics and music streaming preferences.',
      },
      {
        name: 'Tableau',
        tooltip: '6 months · Used for exploratory data analysis and sharing visual reports.',
      },
    ],
  },
  {
    icon: 'Wrench',
    title: 'Tools & Services',
    tags: [
      {
        name: 'dbt (Data Build Tool)',
        tooltip: '1 year · Used with Snowflake to model, test, and document data transformations.',
      },
      {
        name: 'Apache Airflow',
        tooltip: '1+ year · Orchestrated multi-step ETL pipelines across several personal and professional projects.',
      },
      {
        name: 'Apache Spark',
        tooltip: '6 months · Used for large-scale distributed data processing in the Weather Flow Project.',
      },
      {
        name: 'Snowflake',
        tooltip: '1 year · Cloud data warehouse used in SnowPypeLine and DBT SnowPipeline projects.',
      },
      {
        name: 'Pandas',
        tooltip: '3+ years · Daily driver for data cleaning, transformation, and EDA across all data projects.',
      },
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: 'High School Diploma - Electronics Technician',
    institution: 'San Vicente de Paul Technical School',
    location: 'La Plata, Buenos Aires',
    period: 'Feb 2019 - Nov 2025',
  },
  {
    degree: 'Data Scientist',
    institution: 'Facultad de Informática | Facultad de Ciencias Económicas (UNLP)',
    location: 'La Plata, Buenos Aires',
    period: 'Feb 2026 - Present',
  },
];
