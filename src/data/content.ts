export const languages = [
  { name: "English", level: "advanced" },
  { name: "German", level: "intermediate" },
  { name: "Spanish", level: "native" },
  { name: "C++, Scala", level: "intermediate" },
  { name: "CSS, HTML", level: "advanced" },
  {
    name: "TypeScript, JavaScript, CoffeeScript",
    level: "advanced",
  },
] as const;

export const technologies = [
  "bash, zsh, git, docker, kubernetes",
  "nodejs, npm, yarn, lerna",
  "expressjs, koa",
  "mocha, jest, tape",
  "MongoDB, MySQL",
  "RabbitMQ, Kafka",
  "material-ui, nextjs, jss",
  "bootstrap, playframework",
  "browserify, webpack, gulp, grunt",
  "React.js, React Native, zustand, redux, rxjs, GraphQL",
] as const;

export type ExperienceEntry = {
  period: string;
  location: string;
  role: string;
  client?: { label: string; href: string };
  agency?: { label: string; href: string };
  team?: string;
  stack?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "March 2022 - present",
    location: "Fulda, Germany",
    role: "Freelance Software Engineer",
    client: { label: "Lampenwelt", href: "https://www.lampenwelt.de/" },
    agency: {
      label: "WEBTEAM LEIPZIG GmbH",
      href: "https://wtl.de/",
    },
    team: "Team: 4-9. B2C.",
    stack:
      "7 backend/devops devs and 1 PO. Stack: GCP, AWS, Kafka, NodeJs, TypeScript. Developing apps and services used by the company internally and in marketplaces platforms.",
    bullets: [],
  },
  {
    period: "Sep 2021 - Jan 2022",
    location: "Berlin, Germany",
    role: "Freelance Software Engineer",
    client: { label: "recover", href: "https://www.recoverapp.de/" },
    agency: { label: "Railslove GmbH", href: "https://railslove.com/" },
    team: "Team: 6. B2B.",
    stack:
      "2 product, 2 designer and 2 devs. Stack: Next.js, redux, TypeScript. Setup for localization for the whole app for DE, EN, and PL.",
    bullets: [],
  },
  {
    period: "Sep 2021 - Nov 2021",
    location: "Berlin, Germany",
    role: "Freelance Software Engineer",
    client: { label: "getquin", href: "https://www.getquin.com/" },
    agency: { label: "Railslove GmbH", href: "https://railslove.com/" },
    team: "Team: 10+. B2C.",
    stack: "Stack: ReactNative, redux, TypeScript.",
    bullets: [
      "Social network for investing on crypto with friends. Helping developing last features before app launch.",
    ],
  },
  {
    period: "Aug 2021",
    location: "Köln, Germany",
    role: "Freelance Software Engineer",
    client: {
      label: "SC Fortuna Köln",
      href: "https://play.google.com/store/apps/details?id=de.fortunakoeln.fortunaapp",
    },
    agency: { label: "Railslove GmbH", href: "https://railslove.com/" },
    team: "Team: 10+. B2B.",
    stack:
      "Stack: ReactNative, redux, TypeScript. SC Fortuna Köln app MVP developed in one week at the team's headquarters.",
    bullets: [
      "I setup the frontend and then worked with product, 2 designers, 5 more frontend, 2 backend devs on it together.",
    ],
  },
  {
    period: "Mar 2021 - Jan 2022",
    location: "Berlin, Germany",
    role: "Freelance Software Engineer",
    client: {
      label: "Meine Checkins",
      href: "https://meinecheckins.de/",
    },
    agency: { label: "Railslove GmbH", href: "https://railslove.com/" },
    team: "Team: 4. B2C.",
    stack:
      "1 designer, 1 product, 2 devs. Stack: TypeScript, ReactNative, redux. Commissioned by City of Cologne. Contact tracing app for the COVID-19 pandemic.",
    bullets: [],
  },
  {
    period: "Aug 2019 - Jan 2020",
    location: "Berlin, Germany",
    role: "Freelance Software Engineer",
    client: { label: "SitEinander UG", href: "https://mello-app.com/" },
    team: "Team: 6. B2C.",
    stack:
      "2 devs including me. Stack: TypeScript, Firebase, ReactNative, rxjs. Mobile MVP from scratch with one other frontend dev. Then helping after launch.",
    bullets: [],
  },
  {
    period: "Sep 2018 - Aug 2021",
    location: "Berlin, Germany",
    role: "Freelance Software Engineer",
    client: { label: "Websitebutler GmbH", href: "https://www.sitejet.io/" },
    team: "Team: 7. B2C. 2 backend, 4 frontend and me.",
    stack: "Stack: PHP, React, redux, JS, TS, JSS, SASS.",
    bullets: [
      "Improving code quality and communication",
      "Added webpack, typescript to all front-end",
      "Helping to adopt React and redux in all products",
    ],
  },
  {
    period: "Feb 2018 - Jun 2018",
    location: "Berlin, Germany",
    role: "Growth Engineer",
    client: { label: "Home HT GmbH", href: "https://www.home.ht" },
    team: "Team: 10+. B2C. Mobile App for renting.",
    stack: "Stack: AWS, nodejs, ReactNative, TypeScript.",
    bullets: [
      "Email generation with React and TypeScript",
      "Features for a ReactNative app in TypeScript",
    ],
  },
  {
    period: "Jan 2017 - Feb 2018",
    location: "Berlin, Germany",
    role: "Software Engineer",
    client: { label: "Zalando SE (MOVMNT)", href: "https://www.zalando.com" },
    team: "Team: 10+. B2C. Developing a separate product.",
    stack: "Stack: AWS, Scala, React, JS, TS, HTML, SASS.",
    bullets: [
      "Added payment methods (Scala, JavaScript)",
      "Created merchant app (React, TypeScript)",
      "Migrated frontend to ES7 (Scala, JavaScript)",
    ],
  },
  {
    period: "Aug 2015 - Dec 2016",
    location: "Berlin, Germany",
    role: "Frontend Developer",
    client: {
      label: "Fit Analytics GmbH",
      href: "https://www.fitanalytics.com",
    },
    team: "Team: 10+. B2B.",
    stack: "Stack: nodejs, CoffeeScript, JS, CSS, HTML.",
    bullets: [
      "Working with clients needs.",
      "Maintained integrations (JavaScript)",
      "Created widget versions (CoffeeScript)",
      "Created new build process (nodejs, CoffeeScript)",
    ],
  },
  {
    period: "Sep 2013 - Feb 2015",
    location: "Granada, Spain",
    role: "Junior Programmer",
    client: { label: "NGA HR", href: "https://www.ngahr.com" },
    team: "Team: 10+. B2B.",
    stack: "Stack: SAP, ABAP.",
    bullets: [
      "Issue consultant, developer (SAPgui, ABAP)",
      "Main contact for an account in DACH region",
    ],
  },
];

export const education = [
  {
    period: "09.2005-12.2012",
    institution: "UGR (Granada, Spain)",
    degree: "Licenciado en Física (M.Sc., Physics)",
    details:
      "Some of the lectures: General Relativity, Quantum Field Theory, Computational Statistics with R, Computational Statistical Mechanics",
  },
  {
    period: "09.2009-09.2010",
    institution: "LMU (Munich, Germany)",
    degree: "Eramus Program, Biophysics",
    details:
      "Biophysics of Systems, Fortgeschrittendenn Praktikum Biophysik",
  },
  {
    period: "1996-2004",
    institution: "CPM (Jaén, Spain)",
    degree: "Musical Studies, Piano",
    details:
      "Music theory, analysis and harmony.\nCPM: Conservatorio Profesional de Música.",
  },
] as const;

export const educationFootnotes = [
  "UGR: University of Granada",
  "LMU: Ludwig-Maximilians-Universität",
  "CPM: Conservatorio Profesional de Música",
] as const;

export const services = [
  {
    title: "Definition",
    description:
      "Project definition and planning. We'll build implementation paths so you can choose better.",
    cta: "Schedule a call",
    subject: "Definition, schedule a call",
  },
  {
    title: "Creation",
    description:
      "Planning finished and now is time to write code. Great! Let's review it together and get started.",
    cta: "Get in touch",
    subject: "Creation, get in touch",
  },
  {
    title: "Research",
    description:
      "You found some performance issues, an application area or a topic you want to investigate?",
    cta: "Let's talk",
    subject: "Research, let's talk",
  },
] as const;
