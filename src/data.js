export const projects = [
  {
    title: 'Fictional Store Dashboard',
    description: 'Fake Store Dashboard created using Power BI and enriched with data generated in Python using Faker library.',
    image: '/project_covers/Fictional-store-Dashboard.png',
  },
  {
    title: 'Music Streaming Preference Analysis',
    description: 'Analysis of listener preferences on music platforms. Python (Pandas) for data cleaning, Power BI for interactive dashboard.',
    image: '/project_covers/Music-Streaming-Preference-Analysis.png',
  },
  {
    title: 'Meteorology Pipeline',
    description: 'Weather Data Pipeline with Apache Airflow.',
    image: '/project_covers/MeteorologyPipeline.jpg',
  },
  {
    title: 'Weather Data Automation',
    description: 'Automated system to collect, store, and manage weather data using OpenWeatherMap API, MongoDB, and Airflow.',
    image: '/project_covers/WeatherDataAutomation.jpg',
  },
  {
    title: 'SnowPypeLine',
    description: 'Pipeline for extracting, cleaning, and storing meteorological data with Airflow, Pandas, and Snowflake.',
    image: '/project_covers/SnowPypeline.png',
  },
  {
    title: 'DBT SnowPipeline',
    description: 'Transforming and modeling datasets using dbt (Data Build Tool) and Snowflake.',
    image: '/project_covers/DBTSnowPipeline.jpg',
  },
  {
    title: 'Weather Flow Project',
    description: 'Automated system for extracting, transforming and storing meteorological data using OpenWeatherMap, Spark, Supabase & Airflow.',
    image: '/project_covers/WeatherFlowProject.jpg',
  },
  {
    title: 'Adapted House 3D Simulator',
    description: 'Interactive 3D simulation of a smart home automation system built in Unity.',
    image: '/project_covers/SimuladorDomoticoCover.png',
  },
  {
    title: 'Augmented Reality Educational App',
    description: 'Mobile AR application built with Unity and Vuforia SDK that detects image targets to render 3D models with multimedia events.',
    image: null, // no cover image — uses icon placeholder
  },
  {
    title: 'Siamerse',
    description: 'Full-stack mobile app with React Native (Expo SDK 54), Express 5, PostgreSQL, and Drizzle ORM. AI integration via Google Gemini.',
    image: '/project_covers/SiamerseCover.png',
  },
];

export const certificates = [
  {
    title: 'Python',
    description: "CS50's Introduction to Programming with Python",
    image: '/certificates/CS50P_PYTHON.jpg',
  },
  {
    title: 'SQL',
    description: "CS50's Introduction to Databases with SQL",
    image: '/certificates/CS50_SQL.jpg',
  },
  {
    title: 'Big Data',
    description: "IBM's Big Data Certificate",
    image: '/certificates/big_data.jpg',
  },
  {
    title: 'Data Science 101',
    description: "IBM's Data Science 101 Certificate",
    image: '/certificates/DataScience.jpg',
  },
  {
    title: 'Data Science Methodology',
    description: "IBM's Data Science Methodology Certificate",
    image: '/certificates/Methodology.jpg',
  },
  {
    title: 'AWS Cloud Practitioner',
    description: 'AWS Cloud Practitioner Certificate',
    image: '/certificates/udemy_AWS_Certified_Cloud_Practitioner.jpg',
  },
];

export const experience = [
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

export const skills = [
  {
    icon: 'Laptop',
    title: 'Programming Languages',
    tags: ['Python', 'TypeScript', 'SQL'],
  },
  {
    icon: 'Settings',
    title: 'Backend & APIs',
    tags: ['FastAPI', 'tRPC'],
  },
  {
    icon: 'Database',
    title: 'Database & Storage',
    tags: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Drizzle (ORM)'],
  },
  {
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    tags: ['AWS', 'Docker & Docker Compose'],
  },
  {
    icon: 'BarChart3',
    title: 'Data Visualization',
    tags: ['Power BI', 'Tableau'],
  },
  {
    icon: 'Wrench',
    title: 'Tools & Services',
    tags: ['dbt (Data Build Tool)', 'Apache Airflow', 'Apache Spark', 'Snowflake', 'Pandas'],
  },
];

export const education = [
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

export const navItems = [
  { icon: 'Briefcase', label: 'Experience', href: '#experience' },
  { icon: 'Wrench', label: 'Skills', href: '#skills' },
  { icon: 'Rocket', label: 'Projects', href: '#projects' },
  { icon: 'ScrollText', label: 'Certificates', href: '#certificates' },
  { icon: 'GraduationCap', label: 'Education', href: '#education' },
];
