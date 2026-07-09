import { img } from "./images";
import { SITE_NAME } from "./site";

export const mobileAppHero = {
  title: "Mobile App Development Company",
  subtitle: "Custom iOS, Android & AI-Powered Apps",
  intro: `${SITE_NAME} is a full-cycle mobile app development company serving startups, growth-stage companies, and enterprises across the United States. We design and build custom iOS apps, Android apps, cross-platform solutions, and AI-powered mobile applications — engineered to perform, built to scale, designed to convert.`,
  introSecondary:
    "From your first product conversation to App Store launch and beyond, we bring a structured process, genuine technical depth, and a team that treats your product like it's their own.",
  heroImage: img("2026/06/Gemini_Generated_Image_xl0h5axl0h5axl0h.webp"),
};

export const mobileAppStats = [
  { label: "Projects Completed", value: 200, suffix: "+" },
  { label: "Happy Customers", value: 120, suffix: "+" },
  { label: "Years of Experience", value: 6, suffix: "" },
  { label: "Awards & Achievements", value: 8, suffix: "" },
];

export const mobileAppWhyRows = [
  {
    what: "Full-cycle development",
    benefit:
      "From discovery and UX research to dev, QA, App Store launch, and post-release optimization. One partner. Zero hand-off chaos.",
  },
  {
    what: "Transparent agile sprints",
    benefit:
      "2-week sprints, bi-weekly demos, weekly Slack updates. You always know exactly what's built and what's next — no black boxes.",
  },
  {
    what: "Native + cross-platform expertise",
    benefit:
      "We build in Swift, Kotlin, Flutter, and React Native. You get the right technology for your goals and budget, not ours.",
  },
  {
    what: "AI-first capabilities",
    benefit:
      "We integrate OpenAI, TensorFlow, and custom ML models directly into your app. Intelligent features your competitors don't have yet.",
  },
  {
    what: "Security & compliance built in",
    benefit:
      "SOC 2-aware, HIPAA-compliant, PCI architecture for healthcare, fintech, and enterprise clients — not bolted on after the fact.",
  },
  {
    what: "US-led strategy, scalable delivery",
    benefit:
      "Strategic oversight and QA in the US, with engineering capacity that accelerates delivery without sacrificing quality.",
  },
];

export const mobileAppServices = [
  {
    icon: img("2024/12/mobile-development.png"),
    iconHover: img("2024/12/mobile-development-1.png"),
    category: "Custom Mobile App Development",
    title: "iOS App Development",
    description:
      "We build iPhone and iPad applications using Swift and SwiftUI, following Apple's Human Interface Guidelines from day one. Every iOS app is optimized for performance, accessibility, and App Store approval on the first submission.",
  },
  {
    icon: img("2024/12/software.png"),
    iconHover: img("2024/12/software-1.png"),
    category: "Software Development",
    title: "Android App Development",
    description:
      "Our Android team builds native apps in Kotlin and Java, using Material Design principles and deep device integration — camera, GPS, biometrics, NFC. Designed for the full Android ecosystem, not just flagship devices.",
  },
  {
    icon: img("2024/12/app-development.png"),
    iconHover: img("2024/12/app-development-1.png"),
    category: "Custom Web App Development",
    title: "Cross-Platform App Development",
    description:
      "Launch on both iOS and Android without doubling your budget. We build high-performance cross-platform apps using Flutter and React Native — a single codebase delivering a near-native experience on both platforms.",
  },
  {
    icon: img("2025/01/seo.png"),
    iconHover: img("2024/12/seo-1.png"),
    category: "Search Engine Optimization",
    title: "AI-Powered Mobile App Development",
    description:
      "AI isn't a feature you add later. We integrate machine learning, NLP, computer vision, and generative AI — OpenAI GPT, custom LLMs, TensorFlow — directly into your app's core. Intelligent chatbots, personalization, predictive analytics, and more.",
  },
  {
    icon: img("2025/01/bullhorn-2.png"),
    iconHover: img("2024/12/bullhorn-1.png"),
    category: "Digital Marketing",
    title: "Social Networking App Development",
    description:
      "Building the next community platform, marketplace, or content product? We architect real-time features — chat, feeds, notifications, user profiles, content moderation — with backend infrastructure built for millions of concurrent users.",
  },
  {
    icon: img("2025/01/digital-art-1.png"),
    iconHover: img("2024/12/digital-art.png"),
    category: "Digital Arts",
    title: "UI/UX Design & Prototyping",
    description:
      "Apps succeed or fail in the first three seconds. Our UX team conducts user research, maps information architecture, and builds interactive prototypes tested with real users before a single line of code is written.",
  },
  {
    icon: img("2025/01/mvp-1.png"),
    iconHover: img("2024/12/mvp.png"),
    category: "MVP Application Development",
    title: "MVP Development for Startups",
    description:
      "Validate your idea before you invest six figures. Our MVP process gets the leanest version that proves your concept into users' hands in 8–12 weeks — helping US startups secure funding and find product-market fit.",
  },
];

export const mobileAppProcess = [
  {
    step: "1",
    title: "Discovery & Strategy",
    duration: "Week 1–2",
    description:
      "We learn your business goals, target users, competitive landscape, and technical constraints before writing a single requirement.",
    deliverables: ["Project brief", "Scope of work", "Tech recommendation", "Preliminary roadmap"],
  },
  {
    step: "2",
    title: "UX Research & Design",
    duration: "Week 2–4",
    description:
      "User journey mapping, information architecture, and interactive Figma prototypes reviewed and approved before dev begins.",
    deliverables: ["Wireframes", "Clickable prototype", "Design system"],
  },
  {
    step: "3",
    title: "Agile Development Sprints",
    duration: "Week 4–12+",
    description:
      "2-week sprints. Bi-weekly demos. Direct Slack access to your project team. You see real progress, not status reports.",
    deliverables: ["Working software increments", "Unit tests", "Documentation"],
  },
  {
    step: "4",
    title: "QA & Testing",
    duration: "Parallel + dedicated sprint",
    description:
      "Functional, performance, security, usability, and device compatibility testing across iOS and Android devices.",
    deliverables: ["QA report", "Bug-free release candidate"],
  },
  {
    step: "5",
    title: "App Store Launch",
    duration: "Week 12–14+",
    description:
      "App Store and Google Play submission, ASO metadata optimization, screenshot design, compliance review, and launch monitoring.",
    deliverables: ["Published app", "Launch monitoring dashboard"],
  },
  {
    step: "6",
    title: "Post-Launch Support",
    duration: "Ongoing",
    description:
      "Performance monitoring, crash reporting, user feedback analysis, and feature iteration. Most clients continue on a monthly retainer.",
    deliverables: ["Monthly performance reports", "Ongoing release cycle"],
  },
];

export const mobileAppTechnologies = [
  { icon: "ios", title: "Native iOS", subtitle: "High-performance iOS apps built for scale and polish.", stack: ["Swift", "SwiftUI", "Xcode", "TestFlight", "Objective-C"] },
  { icon: "android", title: "Native Android", subtitle: "Modern Android apps with native performance.", stack: ["Kotlin", "Java", "Android Studio", "Compose"] },
  { icon: "cross", title: "Cross-Platform", subtitle: "One codebase. Multiple platforms. Faster to market.", stack: ["Flutter", "React Native", "Expo", "Dart"] },
  { icon: "api", title: "Backend / API", subtitle: "Robust, secure APIs and scalable backend systems.", stack: ["Node.js", "Python", "Django", "GraphQL", "Express", "FastAPI", "Postman"] },
  { icon: "cloud", title: "Cloud Infrastructure", subtitle: "Secure hosting, storage, and scalable cloud foundations.", stack: ["AWS", "Google Cloud", "Azure", "Firebase"] },
  { icon: "ai", title: "AI / ML Integration", subtitle: "Intelligent features that deliver real business value.", stack: ["OpenAI API", "TensorFlow", "PyTorch", "LangChain", "Hugging Face"] },
  { icon: "database", title: "Databases", subtitle: "Reliable data storage for every kind of application.", stack: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"] },
  { icon: "devops", title: "DevOps & CI/CD", subtitle: "Streamlined delivery pipelines and stable deployment workflows.", stack: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "GitLab CI"] },
  { icon: "analytics", title: "Analytics", subtitle: "Actionable product, growth, and behavioral analytics tooling.", stack: ["Mixpanel", "Amplitude", "Firebase Analytics", "Segment"] },
  { icon: "payments", title: "Payments", subtitle: "Trusted payment integrations for checkout and subscriptions.", stack: ["Stripe", "Braintree", "Apple Pay", "Google Pay"] },
];

export const mobileAppTimelines = [
  {
    title: "MVP / Prototype",
    duration: "8–12 weeks",
    audience: "Startups, idea validation, pre-seed fundraising",
    featured: false,
  },
  {
    title: "Mid-Level App",
    duration: "3–6 months",
    audience: "E-commerce, SaaS extensions, business apps",
    featured: true,
  },
  {
    title: "Complex / Enterprise App",
    duration: "6–12+ months",
    audience: "Enterprise platforms, marketplace apps",
    featured: false,
  },
  {
    title: "AI-Powered App",
    duration: "4–8 months",
    audience: "ML apps, intelligent assistants, recommendation engines",
    featured: false,
  },
];

export const mobileAppIndustries = [
  {
    icon: "healthcare",
    title: "Healthcare & MedTech",
    description:
      "HIPAA-compliant telehealth platforms, patient portals, wearable integrations, EHR apps, clinical workflow tools, and remote monitoring solutions.",
  },
  {
    icon: "fintech",
    title: "Fintech & Banking",
    description:
      "Secure payment apps, digital wallets, investment platforms, loan origination tools, and regulatory-compliant financial dashboards.",
  },
  {
    icon: "real-estate",
    title: "Real Estate & PropTech",
    description:
      "Property search apps, virtual tours, mortgage calculators, CRM integrations, agent tools.",
  },
  {
    icon: "ecommerce",
    title: "E-Commerce & Retail",
    description:
      "Mobile storefronts, loyalty apps, AR try-on features, inventory management, omnichannel experiences.",
  },
  {
    icon: "logistics",
    title: "Logistics & Transportation",
    description:
      "Fleet management, driver apps, route optimization, vehicle diagnostics, and customer booking apps.",
  },
  {
    icon: "maritime",
    title: "Maritime & Cargo",
    description:
      "Intuitive cargo management platforms with real-time tracking and compliance features.",
  },
];

export const mobileAppMarketStats = [
  {
    text: "The US app economy generates over $138 billion annually and is growing at 11.5% CAGR through 2028.",
    source: "Statista, 2025",
  },
  {
    text: "Americans spend an average of 4.8 hours per day on mobile apps — more time than any other digital medium.",
    source: "eMarketer, 2025",
  },
  {
    text: "Apps with strong UX see 200% higher user retention than apps with poor design.",
    source: "Forrester Research",
  },
  {
    text: "The average ROI on enterprise mobile app investment is 250% within the first 3 years.",
    source: "IBM Institute for Business Value",
  },
  {
    text: "87% of US consumers will abandon an app after 2–3 negative experiences.",
    source: "PwC Digital Consumer Survey",
  },
  {
    text: "Businesses using custom mobile apps report 34% faster decision-making and 27% lower operational costs.",
    source: "Salesforce State of Mobile",
  },
  {
    text: "Mobile commerce accounts for 72% of total US e-commerce traffic — a mobile app converts at 3x the rate of a mobile browser.",
    source: "Statista, 2025",
  },
];

export const mobileAppFaqImage = img("faq_section-removebg-preview.webp");

export const mobileAppFaqIntro = `At ${SITE_NAME}, we believe in transparency. That's why we provide detailed, itemized estimates after a free discovery call — no vague ballpark figures, no pressure.`;

export const mobileAppPortfolio = [
  {
    title: "Empowered People",
    description:
      "A mental health platform improving clinician guidance and crisis management workflows across care teams.",
    tags: ["App Dev", "UX/UI", "Lead Gen"],
  },
  {
    title: "Behavioral Therapy App",
    description:
      "A cross-platform app powered by machine learning for mental health assessment and treatment tracking.",
    tags: ["App Dev", "AI Integration"],
  },
  {
    title: "AspireX",
    description:
      "A networking and career intelligence platform merging LinkedIn data with advanced analytics.",
    tags: ["App Dev", "UX/UI Design"],
  },
  {
    title: "Psych-File",
    description:
      "A secure electronic health records platform for mental healthcare providers — fully HIPAA-aware.",
    tags: ["App Dev", "UX/UI Design"],
  },
  {
    title: "Land Buy",
    description:
      "A property search and buying platform for a mid-size Dallas real estate firm.",
    tags: ["iOS Dev", "UX/UI", "Web Design"],
  },
  {
    title: "ShipSearch",
    description:
      "A maritime cargo management app simplifying vessel tracking and operational logistics.",
    tags: ["Web App", "Mobile App", "Full Digital"],
  },
  {
    title: "Career Catalyst",
    description:
      "A career upskilling web app connecting professionals with growth pathways.",
    tags: ["Web App Dev", "UX/UI"],
  },
];

export const mobileAppFaqs = [
  {
    question: "How much does it cost to build a mobile app in the USA?",
    answer: `Mobile app development costs in the US vary based on feature complexity, the number of platforms (iOS, Android, or both), backend infrastructure requirements, and design quality. At ${SITE_NAME}, we provide detailed, itemized estimates after a free discovery call — no vague ballpark figures, no pressure.`,
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Timeline depends on scope. An MVP takes 8–12 weeks. A mid-complexity app takes 3–6 months. Enterprise or AI-heavy applications typically require 6–12+ months. We provide a detailed project roadmap after our initial discovery phase.",
  },
  {
    question: "Should I build a native app or a cross-platform app?",
    answer:
      "If maximum performance, deep device integration, and platform-specific features are critical, go native. If you need to launch on iOS and Android simultaneously within a limited budget, cross-platform (Flutter or React Native) is often the smarter choice. We give you an honest recommendation based on your goals, not on what's easier for us to build.",
  },
  {
    question: "Do you develop for both iOS and Android?",
    answer:
      "Yes. We build native iOS apps (Swift/SwiftUI), native Android apps (Kotlin), and cross-platform applications (Flutter, React Native). We also build and maintain the backend infrastructure and API layer your app needs to run reliably at scale.",
  },
  {
    question: "Can you integrate AI into my mobile app?",
    answer:
      "Absolutely. We integrate conversational AI (OpenAI GPT), computer vision, predictive analytics, personalization engines, and intelligent automation. AI integration is one of our fastest-growing service areas — we've already built it into several live products including the Behavioral Therapy platform and AspireX.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. All clients receive a 30-day post-launch warranty, and most continue with a monthly retainer for ongoing updates, performance optimization, bug fixes, and new feature development. We treat every app as a long-term product, not a one-time project.",
  },
  {
    question: "Are you able to work with clients outside Texas?",
    answer: `Absolutely. While ${SITE_NAME} is headquartered in Euless, TX, we serve clients across the entire United States and internationally. We collaborate remotely via Slack, Zoom, Jira, and Figma with clients in New York, California, Florida, Illinois, and across the globe. Geography has never stopped us from delivering great work.`,
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep experience in healthcare (HIPAA), fintech (PCI, SOC 2), real estate, logistics, enterprise SaaS, education, and maritime. Our industry expertise means we understand your compliance requirements and user expectations from the first conversation — not after a lengthy onboarding process.",
  },
];

export const mobileAppCtaPoints = [
  "Free 60-minute strategy session no sales pressure, no obligation",
  "Honest feasibility assessment and technology recommendation",
  "Detailed project roadmap and itemized investment estimate",
  "NDA-protected from your very first conversation",
];
