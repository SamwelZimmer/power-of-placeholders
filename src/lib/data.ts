import {
  TestimonialData,
  MessageItem,
  BookItem,
  NewsArticleItem,
} from "@/lib/types";

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

export const FAKE_ARTICLE: NewsArticleItem = {
  type: "politics",
  date: "2023-11-29",
  headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sapiente quidem. At soluta error qui quo dolores incidunt architecto magni voluptate sapiente obcaecati exercitationem, consequuntur dolore ex veniam aliquid dolor?",
  author: "John Smith",
  readTime: 5,
};

export const ARTICLES: NewsArticleItem[] = [
  {
    body: "Stock markets around the world experienced a surge today following the release of positive economic data from several major economies.",
    date: "2023-12-01",
    type: "business",
    author: "Emily Tran",
    headline: "Global Markets Rally on Positive Economic Indicators",
    readTime: 3,
  },
  {
    body: "Scientists at the University of California have announced a significant breakthrough in solar panel efficiency, potentially lowering costs and increasing adoption.",
    date: "2023-12-02",
    type: "technology",
    author: "Mark Johnson",
    headline: "Major Breakthrough in Renewable Energy Technology",
    readTime: 5,
  },
  {
    body: "The federal government today unveiled a comprehensive plan aimed at overhauling the national education system to improve student outcomes.",
    date: "2023-12-03",
    type: "politics",
    author: "Linda Smith",
    headline: "Government Announces New Education Reform Plan",
    readTime: 4,
  },
  {
    body: "Critically acclaimed author Jane Doe has released her latest novel, which has already topped bestseller lists across the country.",
    date: "2023-12-04",
    type: "culture",
    author: "Sarah Lee",
    headline: "Celebrated Author Releases New Bestselling Novel",
    readTime: 3,
  },
  {
    body: "A new artificial intelligence program has been developed to accurately diagnose diseases faster than traditional methods, promising major improvements in healthcare.",
    date: "2023-12-05",
    type: "technology",
    author: "James Wilson",
    headline: "Innovative AI Tool Revolutionizes Medical Diagnostics",
    readTime: 5,
  },
  {
    body: "In a historic move, leaders from two long-time rival countries signed a peace agreement today, marking a significant step towards lasting peace in the region.",
    date: "2023-12-06",
    type: "politics",
    author: "Michael Brown",
    headline: "Historic Peace Agreement Signed Between Rival Nations",
    readTime: 4,
  },
  {
    body: "Researchers have found that a specific diet can significantly improve cognitive function and reduce the risk of dementia.",
    date: "2023-12-07",
    type: "health",
    author: "Jessica Taylor",
    headline: "Breakthrough Study Links Diet to Improved Cognitive Function",
    readTime: 4,
  },
  {
    body: "In a stunning move, two of the largest tech companies have announced a merger, creating the biggest IT corporation in the world.",
    date: "2023-12-08",
    type: "business",
    author: "Daniel Lee",
    headline: "Tech Giants Merge to Form Largest IT Company",
    readTime: 3,
  },
  {
    body: "Astronomers announce that a rare celestial event, which last occurred over a century ago, will be visible in many parts of the world next week.",
    date: "2023-12-09",
    type: "science",
    author: "Emma Johnson",
    headline: "Rare Astronomical Event to be Visible Next Week",
    readTime: 2,
  },
  {
    body: "The government has introduced new legislation designed to provide significant support to small businesses struggling in the current economic climate.",
    date: "2023-12-10",
    type: "politics",
    author: "Olivia Martin",
    headline: "New Legislation Aims to Boost Small Businesses",
    readTime: 3,
  },
  {
    body: "A new technique for recycling plastic waste promises to drastically reduce environmental pollution and improve sustainability efforts worldwide.",
    date: "2023-12-11",
    type: "environment",
    author: "Lucas Anderson",
    headline: "Revolutionary Plastic Recycling Technique Unveiled",
    readTime: 4,
  },
  {
    body: "The National Health Service announced today that it will be significantly expanding its mental health services to better meet the needs of the population.",
    date: "2023-12-12",
    type: "health",
    author: "Sophia Williams",
    headline: "National Health Service Expands Mental Health Support",
    readTime: 3,
  },
  {
    body: "The commissioner of a major sports league has revealed plans to expand the league by adding several new teams over the next decade.",
    date: "2023-12-13",
    type: "sport",
    author: "Ethan Brown",
    headline: "Major Sports League Announces Expansion Plans",
    readTime: 3,
  },
  {
    body: "A recent study highlights the severe impacts of climate change on marine ecosystems, including rising sea levels and increased acidification.",
    date: "2023-12-14",
    type: "environment",
    author: "Ava Garcia",
    headline: "New Study Shows Impact of Climate Change on Oceans",
    readTime: 5,
  },
  {
    body: "Experts from around the world will gather next month to discuss the latest developments in cybersecurity and strategies for protecting digital infrastructure.",
    date: "2023-12-15",
    type: "technology",
    author: "Mason Lee",
    headline: "Global Conference on Cybersecurity to Begin Next Month",
    readTime: 4,
  },
  {
    body: "The annual film festival focusing on independent filmmakers has kicked off, showcasing a diverse range of talents and stories from around the globe.",
    date: "2023-12-16",
    type: "culture",
    author: "Isabella Wilson",
    headline: "Film Festival Celebrates Indie Filmmakers",
    readTime: 3,
  },
  {
    body: "Recent excavations in the Middle East have uncovered artifacts that provide new insights into the lives of ancient civilizations.",
    date: "2023-12-17",
    type: "science",
    author: "William Johnson",
    headline:
      "New Archaeological Discoveries Shed Light on Ancient Civilizations",
    readTime: 4,
  },
  {
    body: "Urban farming is gaining popularity as innovative techniques make it more viable and sustainable, contributing to local food security.",
    date: "2023-12-18",
    type: "environment",
    author: "Mia Brown",
    headline: "Innovative Urban Farming Techniques Promote Sustainability",
    readTime: 3,
  },
  {
    body: "Researchers have achieved a significant milestone in quantum computing, potentially paving the way for advancements in various fields including cryptography and complex modeling.",
    date: "2023-12-19",
    type: "technology",
    author: "Noah Wilson",
    headline: "Breakthrough in Quantum Computing Achieved",
    readTime: 5,
  },
  {
    body: "The city council has announced a new policy aimed at improving the efficiency and reliability of public transport systems to ease commuter congestion.",
    date: "2023-12-20",
    type: "politics",
    author: "Emma Thompson",
    headline: "New Policy to Improve Public Transport Efficiency",
    readTime: 3,
  },
];
