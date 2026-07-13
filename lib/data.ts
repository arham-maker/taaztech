import { img } from "./images";
import { SITE_NAME } from "./site";

export const navLinks = [
  { label: "App Development", href: "/services/mobile-app-development" },
  { label: "Web Development", href: "/services/website-design-and-development" },
  { label: "SEO", href: "/services/seo-services" },
  { label: "PPC", href: "/services/ppc" },
  { label: "SEM", href: "/services/sem-services" },
];

export const clientLogos = [
  { src: img("2024/12/R1L.png"), alt: "Client logo" },
  { src: img("2024/12/SF5.png"), alt: "Client logo" },
  { src: img("2024/12/SS5.png"), alt: "Client logo" },
  { src: img("2024/12/STH5.png"), alt: "Client logo" },
  { src: img("2024/12/TGTS5.png"), alt: "Client logo" },
  { src: img("2024/12/TTR5.png"), alt: "Client logo" },
  { src: img("2024/12/ACT5.png"), alt: "Client logo" },
  { src: img("2024/12/AL5.png"), alt: "Client logo" },
];

export const successStories = [
  {
    title: "Psych-File",
    description:
      "Together with Psych-File, we revolutionized psychiatry through seamless, secure management of electronic health records.",
    image: img("2026/01/PSYCH-FILE-SCREENS.webp"),
    href: "#success-stories",
  },
  {
    title: "Empowered People",
    description:
      "Our collaboration with Empowered People transforms mental health care by improving clinician guidance and crisis management.",
    image: img("2026/01/EMPOWERED-PEOPLE-SCREENS.webp"),
    href: "#success-stories",
  },
  {
    title: "ShipSearch",
    description:
      "Partnering with ShipSearch, we empower the maritime industry with an intuitive app that simplifies cargo management and essential features.",
    image: img("2026/01/Ship-Search.webp"),
    href: "#success-stories",
  },
  {
    title: "Mustang Logistical Services",
    description:
      "Working with Mustang Logistical Services, we optimize truck dispatch solutions to guarantee timely and efficient deliveries.",
    image: img("2026/01/Mustang-Mockup-1.webp"),
    href: "#success-stories",
  },
  {
    title: "AspireX",
    description:
      "We partnered with AspireX to merge advanced data analysis with LinkedIn profile integration, enhancing networking and insights.",
    image: img("2026/01/Aspire-App-Mockup-1-1024x549-1.webp"),
    href: "#success-stories",
  },
  {
    title: "Behavioral Therapy",
    description:
      "We joined forces with Behavioral Therapy to develop a cross-platform solution, powered by advanced machine learning for mental health.",
    image: img("2026/01/Behavioral-Portfilio-main-1.webp"),
    href: "#success-stories",
  },
];

export const services = [
  {
    icon: img("2024/12/mobile-development.png"),
    iconHover: img("2024/12/mobile-development-1.png"),
    title: "App Development",
    description:
      "We design and build high-performance Android, iOS, and cross-platform apps tailored to your business goals. From MVPs to enterprise-grade products, our team delivers intuitive interfaces, reliable backends, and scalable architecture that keeps users engaged and operations running smoothly.",
  },
  {
    icon: img("2024/12/app-development.png"),
    iconHover: img("2024/12/app-development-1.png"),
    title: "Web Development",
    description:
      "We create fast, responsive, and conversion-focused websites and web applications for brands that need to stand out online. Whether you need a corporate site, e-commerce store, or custom web platform, we combine modern frameworks with clean UX to drive measurable growth.",
  },
  {
    icon: img("2025/01/seo.png"),
    iconHover: img("2024/12/seo-1.png"),
    title: "SEO",
    description:
      "We help your business rank higher on Google with data-driven SEO strategies built for long-term visibility. Our approach covers technical optimization, keyword research, on-page improvements, and content planning to attract qualified traffic and turn searches into leads.",
  },
  {
    icon: img("2025/01/bullhorn-2.png"),
    iconHover: img("2024/12/bullhorn-1.png"),
    title: "PPC",
    description:
      "We run targeted pay-per-click campaigns across Google Ads and other platforms to generate immediate, high-intent traffic. With precise audience targeting, compelling ad copy, and continuous bid optimization, we maximize your ad spend and improve cost per acquisition.",
  },
  {
    title: "SEM",
    customIcon: "sem",
    description:
      "We deliver full search engine marketing programs that combine paid and organic search for maximum reach. From campaign structure and landing page alignment to performance tracking, we build SEM strategies that increase brand visibility and deliver consistent, measurable ROI.",
  },
];

export const partnerLogos = [
  { src: img("2025/01/upcity-svg.svg"), alt: "UpCity" },
  { src: img("2025/01/trustpilot-svg.svg"), alt: "Trustpilot" },
  { src: img("2025/01/crunchbase-svg.svg"), alt: "Crunchbase" },
  { src: img("2025/01/designrush-crop-svg.svg"), alt: "DesignRush" },
  { src: img("2025/01/agencyspotter-svg.svg"), alt: "Agency Spotter" },
  { src: img("2025/01/goodfirms-svg.svg"), alt: "GoodFirms" },
  { src: img("2025/01/clutch-svg-svg.svg"), alt: "Clutch" },
];

export const faqs = [
  {
    question: "How long does it take to develop a custom mobile or web app?",
    answer:
      "We deliver apps efficiently without compromising quality. Typical timelines depend on project complexity, platform (iOS, Android, web), and features required.",
  },
  {
    question: `Can ${SITE_NAME} integrate AI features into my software or business tools?`,
    answer:
      "Yes. We specialize in AI-powered solutions for automation, analytics, and smarter business processes. Your app or software can leverage AI for personalized experiences and better performance.",
  },
  {
    question:
      "How can your digital marketing services improve my online visibility and lead generation?",
    answer:
      "We combine SEO, PPC, content marketing, and social media strategies to increase website traffic, improve search rankings, and generate qualified leads tailored to your business goals.",
  },
  {
    question: "Do you provide responsive website design and custom web development?",
    answer:
      "Absolutely. We build websites that are fully responsive, SEO-friendly, and optimized for conversions. From corporate sites to e-commerce platforms, we handle the full development process.",
  },
  {
    question: "Can you integrate my existing tools with new software or apps?",
    answer:
      "Yes. Our solutions are designed to integrate seamlessly with CRMs, marketing platforms, analytics tools, and other business systems to ensure smooth workflow and data flow.",
  },
  {
    question:
      "How do you measure ROI for software development and digital marketing projects?",
    answer:
      "We track measurable KPIs like traffic growth, leads, conversions, app downloads, and revenue impact. Regular reports keep you informed about results and improvements.",
  },
  {
    question:
      "What industries do you serve, and can you handle complex business requirements?",
    answer:
      "We work with startups, SMBs, and enterprise clients across healthcare, finance, automotive, education, real estate, and more, delivering tailored solutions to meet complex business needs.",
  },
  {
    question: "Do you provide ongoing support and maintenance after project launch?",
    answer:
      "Yes. We offer post-launch support, updates, and maintenance to ensure your apps, websites, and marketing campaigns continue performing at their best.",
  },
];

export const processSteps = [
  {
    percent: "40%",
    title: "Plan",
    description:
      "We begin by understanding your goals and audience. Through research and collaboration, we create a tailored roadmap that aligns with your business objectives.",
  },
  {
    percent: "60%",
    title: "Execute",
    description:
      "With the plan in place, our team implements strategies with precision. We utilize the latest tools and technologies to bring your vision to life efficiently and effectively.",
  },
  {
    percent: "100%",
    title: "Result",
    description:
      "We measure success through meaningful outcomes that enhance your brand and engage customers. By analyzing performance, we ensure our strategies exceed expectations and drive growth.",
  },
];

export const stats = [
  { label: "Projects Completed", value: 200, suffix: "+" },
  { label: "Happy Customers", value: 120, suffix: "+" },
  { label: "Years of Experience", value: 6, suffix: "" },
  { label: "Awards & Achievements", value: 8, suffix: "" },
];

export const footerQuickLinks = [
  { label: "App Development", href: "/services/mobile-app-development" },
  { label: "Web Development", href: "/services/website-design-and-development" },
  { label: "SEO", href: "/services/seo-services" },
  { label: "PPC", href: "/services/ppc" },
  { label: "SEM", href: "/services/sem-services" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerServicesIntro = `${SITE_NAME} delivers end-to-end digital solutions—from custom apps and web platforms to search marketing—that help businesses innovate faster, scale smarter, and grow with confidence.`;
