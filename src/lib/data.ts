import { TestimonialData, MessageItem } from "@/lib/types";

export const TESTIMONIALS: TestimonialData[] = [
  {
    name: "Alice Johnson",
    text: "This tool has revolutionized the way I create mockups for my projects. Highly recommend for any designer looking for realistic data sets!",
    social: "twitter",
    username: "alicej",
    img: "https://randomuser.me/api/portraits/women/87.jpg",
  },
  {
    name: "Cathy Lee",
    text: "A must-have for anyone in tech looking to streamline their design process. The quality of datasets provided is top-notch.",
    social: "linkedin",
    username: "cathylee",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Kim",
    text: "I've been using this tool for all my UI/UX projects, and it's a game-changer. The realistic data sets make prototyping so much easier.",
    social: "instagram",
    username: "davek",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    name: "Eva Green",
    text: "If you're not using this for your development projects, you're missing out. It's perfect for testing and refining designs.",
    social: "facebook",
    username: "evagreen",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Bob Smith",
    text: "Absolutely essential for developers! It saves so much time and helps avoid common pitfalls in data handling.",
    social: "twitter",
    username: "bobsmith82",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Frank Moore",
    text: "This tool has been invaluable in my software development workflow. It helps simulate real user data effectively.",
    social: "facebook",
    username: "frankm",
    img: "https://randomuser.me/api/portraits/men/80.jpg",
  },
];

export const PLACEHOLDER_TEXT_MESSAGES: MessageItem[] = [
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    sent_by_user: false,
  },
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    sent_by_user: true,
  },
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    sent_by_user: false,
  },
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    sent_by_user: true,
  },
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    sent_by_user: true,
  },
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    sent_by_user: false,
  },
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    sent_by_user: true,
  },
];

export const TEXT_MESSAGES: MessageItem[] = [
  {
    content:
      "Hey, have you checked out that new SaaS tool for developers? It's amazing for creating realistic datasets!",
    sent_by_user: false,
  },
  {
    content: "No, I haven't! What's it called?",
    sent_by_user: true,
  },
  {
    content:
      "It's called WantData. It lets you design and implement placeholders that look super realistic.",
    sent_by_user: false,
  },
  {
    content: "That sounds useful, especially for our current project.",
    sent_by_user: true,
  },
  {
    content: "Does it support multiple data formats?",
    sent_by_user: true,
  },
  {
    content:
      "Yes, it supports JSON, CSV, and even SQL exports. Perfect for any kind of project you're working on.",
    sent_by_user: false,
  },
  {
    content:
      "Awesome, I'll definitely give it a try. Thanks for the recommendation!",
    sent_by_user: true,
  },
];
