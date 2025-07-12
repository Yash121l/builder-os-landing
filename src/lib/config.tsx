import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Builder OS by Hevarto",
  description:
    "Builder OS is your all-in-one operating system to manage your construction business — CRM, site tracking, billing, and team workflows.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://builder-os.hevarto.com",
  keywords: [
    "Builder OS",
    "Hevarto",
    "Construction CRM",
    "Project Management",
    "Real Estate SaaS",
    "Contractor Tools",
    "Builder Workflow Automation",
  ],
  links: {
    email: "support@hevarto.com",
    twitter: "https://twitter.com/hevarto",
    discord: "https://discord.gg/hevarto", // update with actual
    github: "https://github.com/hevarto", // update with actual
    instagram: "https://instagram.com/hevarto",
  },
  header: [
    {
      trigger: "Solutions",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Built for Builders",
          description: "Tools crafted for real estate and infrastructure teams.",
          href: "/solutions",
        },
        items: [
          {
            href: "/solutions/crm",
            title: "CRM for Builders",
            description: "Track leads, convert clients, and manage contacts.",
          },
          {
            href: "/solutions/projects",
            title: "Project Tracking",
            description: "Monitor project progress, timelines, and deliverables.",
          },
          {
            href: "/solutions/security",
            title: "Security Dashboard",
            description: "Control access and track site safety measures.",
          },
        ],
      },
    },
    {
      trigger: "Use Cases",
      content: {
        items: [
          {
            title: "Independent Builders",
            href: "/use-case/independent",
            description: "Manage multiple sites, teams, and clients from one OS.",
          },
          {
            title: "Construction Firms",
            href: "/use-case/firms",
            description:
              "Streamline every operation across your construction workflow.",
          },
          {
            title: "Real Estate Developers",
            href: "/use-case/developers",
            description: "Plan, build, sell — all within a centralized platform.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "STARTER",
      href: "/pricing",
      price: "₹0",
      period: "month",
      yearlyPrice: "₹0",
      features: [
        "1 Project",
        "Basic CRM",
        "Task Board",
        "Limited Reports",
        "Email Support",
      ],
      description: "Great for freelancers or small-scale builders.",
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "/pricing",
      price: "₹999",
      period: "month",
      yearlyPrice: "₹799",
      features: [
        "Unlimited Projects",
        "Advanced CRM",
        "Full Reporting",
        "WhatsApp Integration",
        "Priority Support",
      ],
      description: "Perfect for growing teams and serious operations.",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "/contact",
      price: "Custom",
      period: "",
      yearlyPrice: "Custom",
      features: [
        "Custom Integrations",
        "Dedicated Support",
        "Onboarding & Training",
        "White-labeling",
        "Team Analytics",
      ],
      description: "Tailored solutions for large builder firms & developers.",
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is Builder OS?",
      answer: (
        <span>
          Builder OS is a unified platform by Hevarto that helps builders,
          contractors, and real estate developers manage operations, CRM,
          security, and finances from one dashboard.
        </span>
      ),
    },
    {
      question: "Is Builder OS suitable for small contractors?",
      answer: (
        <span>
          Yes. Whether you’re managing a single site or scaling operations, our
          platform adapts to your needs.
        </span>
      ),
    },
    {
      question: "Can I track team attendance and security?",
      answer: (
        <span>
          Absolutely. Builder OS comes with security and team tracking modules
          to monitor site activity and access.
        </span>
      ),
    },
    {
      question: "Is there a free trial?",
      answer: (
        <span>
          Yes. All plans come with a 7-day free trial and no credit card is
          required to get started.
        </span>
      ),
    },
    {
      question: "Can Builder OS integrate with other software?",
      answer: (
        <span>
          Yes, our enterprise plan supports custom integrations and API access
          for CRM, finance, and HR tools.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "/features", text: "Features", icon: null },
        { href: "/pricing", text: "Pricing", icon: null },
        { href: "/docs", text: "Documentation", icon: null },
        { href: "/api", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", text: "About Us", icon: null },
        { href: "/careers", text: "Careers", icon: null },
        { href: "/blog", text: "Blog", icon: null },
        { href: "/partners", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/community", text: "Community", icon: null },
        { href: "/contact", text: "Contact", icon: null },
        { href: "/support", text: "Support", icon: null },
        { href: "/status", text: "System Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "https://twitter.com/hevarto",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "https://instagram.com/hevarto",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "https://youtube.com/@hevarto",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
