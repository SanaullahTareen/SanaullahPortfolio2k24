import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  tensorflow,
  pytorch,
  pandas,
  numpy,
  sklearn,
  jupyter,
  keras,
  flask,
  streamlit,
  powerbi,
  mysql,
  postgresql,
  aws,
  threejs,
  Canva,
  PowerBI,
  coo,
  img11,
  img12,
  img13,
  img112,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: backend,
    description: "Building production-ready ML models with TensorFlow, PyTorch & scikit-learn",
  },
  {
    title: "Data Scientist",
    icon: creator,
    description: "Statistical analysis, predictive modeling & actionable insights from data",
  },
  {
    title: "Deep Learning Specialist",
    icon: mobile,
    description: "Neural networks, CNNs, LSTMs & transformer architectures",
  },
];

const technologies = [
  // ML/AI Core
  {
    name: "Python",
    icon: python,
    category: "core",
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
    category: "ml",
  },
  {
    name: "PyTorch",
    icon: pytorch,
    category: "ml",
  },
  {
    name: "Scikit-Learn",
    icon: sklearn,
    category: "ml",
  },
  {
    name: "Keras",
    icon: keras,
    category: "ml",
  },
  // Data Science
  {
    name: "Pandas",
    icon: pandas,
    category: "data",
  },
  {
    name: "NumPy",
    icon: numpy,
    category: "data",
  },
  {
    name: "Jupyter",
    icon: jupyter,
    category: "data",
  },
  {
    name: "Power BI",
    icon: powerbi,
    category: "data",
  },
  // Web Development
  {
    name: "React JS",
    icon: reactjs,
    category: "web",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "web",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "web",
  },
  // Deployment & Tools
  {
    name: "Streamlit",
    icon: streamlit,
    category: "deploy",
  },
  {
    name: "Flask",
    icon: flask,
    category: "deploy",
  },
  {
    name: "AWS",
    icon: aws,
    category: "deploy",
  },
  {
    name: "Docker",
    icon: docker,
    category: "deploy",
  },
  // Databases
  {
    name: "MongoDB",
    icon: mongodb,
    category: "db",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    category: "db",
  },
  {
    name: "MySQL",
    icon: mysql,
    category: "db",
  },
];

const experiences = [
  {
    title: "Forbidden Developers",
    company_name: "Forbidden Developers",
    icon: coo,
    iconBg: "#111111",
    date: "Dec 2024 - Present",
    points: [
      "Designed and developed interactive business dashboards using Tableau, Power BI, and Excel that transformed raw datasets into clear visual insights for stakeholders.",
      "Built and deployed machine learning pipelines for clients in healthcare and cybersecurity, improving data-driven decision making.",
    ],
  },
  {
    title: "Developers Hub Cooperation",
    company_name: "Developers Hub Cooperation",
    icon: coo,
    iconBg: "#111111",
    date: "June 2025 - September 2025",
    points: [
      "Developed a strong foundation in Python programming, data structures, and algorithms.",
      "Gained hands-on experience in data visualization, exploratory data analysis (EDA), feature engineering, and advanced reporting using Microsoft Power BI.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His ML models transformed our healthcare analytics. The predictive accuracy exceeded our expectations and directly improved patient outcomes.",
    name: "Abdullah Tareen",
    designation: "Data Analyst",
    company: "Air University",
    image: img11,
  },
  {
    testimonial:
      "Exceptional work on our recommendation engine. Clean code, well-documented, and the model performance metrics speak for themselves.",
    name: "Aitsam Zulfiqar",
    designation: "ML Engineer",
    company: "Tech Solutions",
    image: img12,
  },
  {
    testimonial:
      "The Power BI dashboards he built gave us real-time insights we never had before. Executive decisions are now truly data-driven.",
    name: "Zakeriya Ali",
    designation: "Project Manager",
    company: "Data Analytics Inc",
    image: img13,
  },
];

const projects = [
  {
    name: "Data Analysis and Machine Learning",
    description:
      "A portfolio repository of data analysis and machine learning work, covering exploratory data analysis, data cleaning, model building, and evaluation in notebook-based workflows.",
    tags: [
      {
        name: "jupyter-notebook",
        color: "blue-text-gradient",
      },
      {
        name: "eda",
        color: "teal-text-gradient",
      },
      {
        name: "machine-learning",
        color: "purple-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    source_code_link: "https://github.com/SanaullahTareen/Data-Analysis-and-Machine-Learning",
  },
  {
    name: "Business Intelligence BI Tableau & Power BI",
    description:
      "A collection of business intelligence projects featuring interactive dashboards built with Microsoft Power BI and Tableau for decision-making and reporting.",
    tags: [
      {
        name: "power-bi",
        color: "blue-text-gradient",
      },
      {
        name: "tableau",
        color: "teal-text-gradient",
      },
      {
        name: "dashboards",
        color: "purple-text-gradient",
      },
    ],
    image: img112,
    source_code_link: "https://github.com/SanaullahTareen/Bussiness_Intelligence_BI_Tableau",
  },
  {
    name: "ACDADA",
    description:
      "Autonomous Cyber Deception & Adaptive Defense Agent, a multi-agent AI cybersecurity system focused on adaptive defense and deception workflows.",
    tags: [
      {
        name: "cybersecurity",
        color: "blue-text-gradient",
      },
      {
        name: "multi-agent",
        color: "teal-text-gradient",
      },
      {
        name: "ai-systems",
        color: "purple-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&auto=format&fit=crop",
    source_code_link: "https://github.com/SanaullahTareen/ACDADA",
  },
];

const stats = [
  { label: "ML Models Deployed", value: "10+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Years Experience", value: "1+" },
];

const skillCategories = [
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "XGBoost", "Keras", "LSTM", "CNNs"],
  },
  {
    title: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Statistical Analysis"],
  },
  {
    title: "Deep Learning",
    skills: ["Neural Networks", "Computer Vision", "NLP", "Transformers", "BERT", "GANs"],
  },
  {
    title: "Data Engineering",
    skills: ["SQL", "ETL Pipelines", "Apache Airflow", "Data Modeling", "Feature Engineering"],
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Tableau", "Streamlit", "Plotly", "DAX", "Dashboard Design"],
  },
  {
    title: "Development",
    skills: ["React", "Node.js", "Flask", "REST APIs", "MongoDB", "PostgreSQL", "Docker"],
  },
];

export { services, technologies, experiences, testimonials, projects, stats, skillCategories };
