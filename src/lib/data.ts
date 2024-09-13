import { TestimonialData, MessageItem, BookItem } from "@/lib/types";

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

export const BOOKS: BookItem[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.7,
    description:
      "A tragic story of Jay Gatsby's love for Daisy Buchanan during the Roaring Twenties.",
    isFictional: true,
    yearPublished: 1925,
  },
  {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    rating: 3.3,
    description:
      "A philosophical novel that explores the role of the mind in man's existence and the consequences of abandoning intellectual achievement.",
    isFictional: true,
    yearPublished: 1957,
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    rating: 4.9,
    description:
      "An ancient Chinese military treatise attributed to Sun Tzu, focusing on military strategy and tactics.",
    isFictional: false,
    yearPublished: -500,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    rating: 4.5,
    description:
      "An epic tale of Captain Ahab's obsession with a giant white whale.",
    isFictional: true,
    yearPublished: 1851,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    rating: 3.8,
    description:
      "A mystery thriller that explores the secret of the Holy Grail.",
    isFictional: true,
    yearPublished: 2003,
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    rating: 3.2,
    description:
      "A romantic fantasy about a teenager who falls in love with a vampire.",
    isFictional: true,
    yearPublished: 2005,
  },

  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    rating: 4.8,
    description:
      "A historical novel about the French invasion of Russia and the impact of the Napoleonic era on Tsarist society.",
    isFictional: true,
    yearPublished: 1869,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4,
    description:
      "A story about the teenage angst and alienation of Holden Caulfield.",
    isFictional: true,
    yearPublished: 1951,
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4.6,
    description: "A dystopian novel about totalitarianism and surveillance.",
    isFictional: true,
    yearPublished: 1949,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    description: "A profound novel on racial injustice in the Deep South.",
    isFictional: true,
    yearPublished: 1960,
  },
  {
    title: "The Bible",
    author: "Various",
    rating: 4.7,
    description: "",
    isFictional: false,
    yearPublished: -1500,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    rating: 4.8,
    description: "An epic fantasy adventure in Middle-earth.",
    isFictional: true,
    yearPublished: 1954,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 3.6,
    description:
      "A philosophical story about an Andalusian shepherd boy who travels in search of a worldly treasure.",
    isFictional: true,
    yearPublished: 1988,
  },
  {
    title: "Infinite Jest",
    author: "David Foster Wallace",
    rating: 4.3,
    description:
      "A complex narrative that explores themes of addiction and recovery.",
    isFictional: true,
    yearPublished: 1996,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    rating: 4.1,
    description:
      "A modernist novel that parallels the epic of Homer with the ordinary events of a single day in Dublin.",
    isFictional: true,
    yearPublished: 1922,
  },
];

export const PLACEHOLDER_BOOK: BookItem = {
  title: "Book Title",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto, ipsam aliquam rem et quia ad delectus beatae dolorum harum.",
  author: "Author's Name",
  isFictional: true,
  yearPublished: 1212,
  rating: 3.5,
};
