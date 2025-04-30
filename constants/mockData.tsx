import { CourseType } from '@/types/course';
import { ExploreItem } from '@/types/explore';

export const mockCourses: CourseType[] = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Start your journey in web development with this comprehensive course covering HTML, CSS, and JavaScript fundamentals. You\'ll build a strong foundation in front-end development and create your first interactive websites.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Sarah Johnson',
    price: 49.99,
    rating: 4.7,
    reviewCount: 327,
    students: 4256,
    duration: '12 hours',
    level: 'Beginner',
    category: 'Development',
    learningPoints: [
      'Understand HTML structure and semantics',
      'Create responsive layouts with CSS',
      'Build interactive features with JavaScript',
      'Implement modern design principles',
      'Deploy your website to the internet'
    ],
    modules: [
      {
        title: 'Introduction to HTML',
        duration: '3h 20min',
        lessons: [
          { title: 'HTML Document Structure', duration: '15min' },
          { title: 'Working with Text and Headings', duration: '20min' },
          { title: 'Links and Navigation', duration: '25min' },
          { title: 'Images and Media', duration: '30min' },
          { title: 'Forms and Input Elements', duration: '45min' },
        ]
      },
      {
        title: 'CSS Fundamentals',
        duration: '4h 15min',
        lessons: [
          { title: 'CSS Selectors and Properties', duration: '30min' },
          { title: 'The Box Model', duration: '35min' },
          { title: 'Flexbox Layout', duration: '45min' },
          { title: 'CSS Grid Layout', duration: '45min' },
          { title: 'Responsive Design', duration: '40min' },
        ]
      },
      {
        title: 'JavaScript Basics',
        duration: '4h 25min',
        lessons: [
          { title: 'JavaScript Syntax', duration: '30min' },
          { title: 'Variables and Data Types', duration: '35min' },
          { title: 'Functions and Events', duration: '50min' },
          { title: 'DOM Manipulation', duration: '45min' },
          { title: 'Building Interactive Elements', duration: '55min' },
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    description: 'Learn the principles of user interface and user experience design from industry experts. This course covers everything from wireframing to prototyping and user testing.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Michael Chen',
    price: 59.99,
    rating: 4.8,
    reviewCount: 215,
    students: 2134,
    duration: '14 hours',
    level: 'Intermediate',
    category: 'Design',
    learningPoints: [
      'Master the fundamentals of UI/UX design',
      'Create wireframes and prototypes',
      'Conduct effective user research',
      'Design responsive interfaces',
      'Build a professional design portfolio'
    ],
    modules: [
      {
        title: 'Design Fundamentals',
        duration: '3h 45min',
        lessons: [
          { title: 'Introduction to UI/UX', duration: '30min' },
          { title: 'Color Theory', duration: '45min' },
          { title: 'Typography', duration: '40min' },
          { title: 'Visual Hierarchy', duration: '35min' },
        ]
      },
      {
        title: 'Wireframing and Prototyping',
        duration: '4h 30min',
        lessons: [
          { title: 'Sketching Interfaces', duration: '45min' },
          { title: 'Digital Wireframing Tools', duration: '60min' },
          { title: 'Interactive Prototypes', duration: '75min' },
          { title: 'User Testing', duration: '50min' },
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing Essentials',
    description: 'Master the fundamentals of digital marketing, including SEO, social media, email campaigns, and analytics to grow your business online.',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Emma Rodriguez',
    price: 44.99,
    rating: 4.5,
    reviewCount: 189,
    students: 1845,
    duration: '10 hours',
    level: 'Beginner',
    category: 'Marketing',
    learningPoints: [
      'Create effective digital marketing strategies',
      'Optimize websites for search engines',
      'Run successful social media campaigns',
      'Build email marketing funnels',
      'Analyze marketing performance'
    ],
    modules: [
      {
        title: 'Digital Marketing Fundamentals',
        duration: '2h 15min',
        lessons: [
          { title: 'Introduction to Digital Marketing', duration: '25min' },
          { title: 'Creating Marketing Personas', duration: '30min' },
          { title: 'Setting Marketing Goals', duration: '40min' },
        ]
      },
      {
        title: 'SEO Fundamentals',
        duration: '3h 10min',
        lessons: [
          { title: 'Introduction to SEO', duration: '35min' },
          { title: 'Keyword Research', duration: '45min' },
          { title: 'On-Page Optimization', duration: '50min' },
          { title: 'Off-Page Optimization', duration: '30min' },
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'React JS for Beginners',
    description: 'Learn React from scratch and build modern, interactive web applications with the most popular JavaScript library.',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'David Wilson',
    price: 54.99,
    rating: 4.9,
    reviewCount: 276,
    students: 3245,
    duration: '15 hours',
    level: 'Intermediate',
    category: 'Development',
    learningPoints: [
      'Understand React fundamentals and architecture',
      'Create reusable components',
      'Manage state and props effectively',
      'Implement routing with React Router',
      'Build complete React applications'
    ],
    modules: [
      {
        title: 'React Basics',
        duration: '4h 30min',
        lessons: [
          { title: 'Introduction to React', duration: '30min' },
          { title: 'Setting Up Your Dev Environment', duration: '20min' },
          { title: 'Creating Your First Component', duration: '40min' },
          { title: 'JSX Fundamentals', duration: '35min' },
        ]
      },
      {
        title: 'State and Props',
        duration: '3h 45min',
        lessons: [
          { title: 'Understanding Component State', duration: '45min' },
          { title: 'Working with Props', duration: '40min' },
          { title: 'React Hooks', duration: '60min' },
          { title: 'Building a Simple App', duration: '40min' },
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Data Science with Python',
    description: 'Master data analysis, visualization, and machine learning using Python and its powerful libraries like Pandas, NumPy, and Scikit-Learn.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Alex Kim',
    price: 64.99,
    rating: 4.7,
    reviewCount: 235,
    students: 2876,
    duration: '18 hours',
    level: 'Advanced',
    category: 'Development',
    learningPoints: [
      'Analyze data using Pandas and NumPy',
      'Create compelling data visualizations',
      'Build machine learning models',
      'Process and clean real-world datasets',
      'Present data-driven insights'
    ],
    modules: [
      {
        title: 'Python for Data Science',
        duration: '4h 15min',
        lessons: [
          { title: 'Python Basics for Data Science', duration: '45min' },
          { title: 'Working with NumPy', duration: '50min' },
          { title: 'Data Analysis with Pandas', duration: '60min' },
          { title: 'Data Visualization Basics', duration: '40min' },
        ]
      },
      {
        title: 'Machine Learning Fundamentals',
        duration: '5h 30min',
        lessons: [
          { title: 'Introduction to Machine Learning', duration: '40min' },
          { title: 'Supervised Learning Algorithms', duration: '60min' },
          { title: 'Unsupervised Learning', duration: '55min' },
          { title: 'Model Evaluation and Validation', duration: '50min' },
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Financial Planning and Investment',
    description: 'Learn how to create a solid financial plan, understand investment options, and build wealth through smart money management strategies.',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Jennifer Taylor',
    price: 49.99,
    rating: 4.6,
    reviewCount: 178,
    students: 1932,
    duration: '12 hours',
    level: 'Beginner',
    category: 'Business',
    learningPoints: [
      'Create a comprehensive financial plan',
      'Understand different investment vehicles',
      'Build and manage a diversified portfolio',
      'Plan for retirement and major life expenses',
      'Optimize tax strategies'
    ],
    modules: [
      {
        title: 'Financial Planning Basics',
        duration: '3h 20min',
        lessons: [
          { title: 'Setting Financial Goals', duration: '30min' },
          { title: 'Budgeting Fundamentals', duration: '40min' },
          { title: 'Emergency Funds and Insurance', duration: '35min' },
          { title: 'Debt Management', duration: '35min' },
        ]
      },
      {
        title: 'Investment Strategies',
        duration: '4h 10min',
        lessons: [
          { title: 'Introduction to Investing', duration: '45min' },
          { title: 'Stocks and Bonds', duration: '50min' },
          { title: 'Mutual Funds and ETFs', duration: '45min' },
          { title: 'Building a Portfolio', duration: '50min' },
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Mobile App Development with Flutter',
    description: 'Build beautiful, natively compiled mobile applications for iOS and Android from a single codebase using Flutter and Dart.',
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Ryan Martinez',
    price: 59.99,
    rating: 4.8,
    reviewCount: 204,
    students: 2450,
    duration: '16 hours',
    level: 'Intermediate',
    category: 'Development',
    learningPoints: [
      'Master Flutter and Dart fundamentals',
      'Create beautiful, responsive UI',
      'Implement navigation and state management',
      'Connect to APIs and databases',
      'Publish apps to iOS and Android stores'
    ],
    modules: [
      {
        title: 'Getting Started with Flutter',
        duration: '3h 30min',
        lessons: [
          { title: 'Flutter Setup and Installation', duration: '30min' },
          { title: 'Dart Programming Basics', duration: '45min' },
          { title: 'Building Your First Flutter App', duration: '60min' },
          { title: 'Understanding Widgets', duration: '35min' },
        ]
      },
      {
        title: 'Flutter UI Development',
        duration: '4h 45min',
        lessons: [
          { title: 'Layout Widgets and Techniques', duration: '50min' },
          { title: 'Building Custom UI Components', duration: '55min' },
          { title: 'Animations and Effects', duration: '60min' },
          { title: 'Responsive Design', duration: '40min' },
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Photography Fundamentals',
    description: 'Learn the art and science of photography, from camera basics to composition, lighting, and post-processing techniques.',
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Lisa Anderson',
    price: 44.99,
    rating: 4.7,
    reviewCount: 192,
    students: 2156,
    duration: '10 hours',
    level: 'Beginner',
    category: 'Design',
    learningPoints: [
      'Master camera settings and techniques',
      'Understand composition principles',
      'Work with natural and artificial lighting',
      'Edit photos professionally',
      'Build a stunning photography portfolio'
    ],
    modules: [
      {
        title: 'Camera Fundamentals',
        duration: '2h 45min',
        lessons: [
          { title: 'Understanding Your Camera', duration: '35min' },
          { title: 'Exposure Triangle', duration: '40min' },
          { title: 'Focus and Depth of Field', duration: '30min' },
          { title: 'Lenses and Equipment', duration: '30min' },
        ]
      },
      {
        title: 'Composition and Lighting',
        duration: '3h 15min',
        lessons: [
          { title: 'Composition Rules', duration: '45min' },
          { title: 'Working with Natural Light', duration: '40min' },
          { title: 'Studio Lighting Basics', duration: '50min' },
          { title: 'Environmental Portraits', duration: '30min' },
        ]
      }
    ]
  }
];

export const mockCategories = [
  { id: 1, name: 'Design', iconName: 'pen-tool' },
  { id: 2, name: 'Development', iconName: 'code' },
  { id: 3, name: 'Marketing', iconName: 'trending-up' },
  { id: 4, name: 'Business', iconName: 'briefcase' },
  { id: 5, name: 'Photography', iconName: 'camera' },
  { id: 6, name: 'Music', iconName: 'music' },
];

// export const mockExploreItems: ExploreItem[] = [
//   {
//     id: 101,
//     type: 'course',
//     title: 'Complete Python Programming Bootcamp',
//     author: 'John Davis',
//     image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Development'
//   },
//   {
//     id: 102,
//     type: 'video',
//     title: 'How to Create a Stunning Logo Design',
//     author: 'Emily White',
//     image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Design'
//   },
//   {
//     id: 103,
//     type: 'podcast',
//     title: 'Marketing Strategies for 2025',
//     author: 'Robert Garcia',
//     image: 'https://images.pexels.com/photos/6953527/pexels-photo-6953527.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Marketing'
//   },
//   {
//     id: 104,
//     type: 'course',
//     title: 'Advanced Excel for Business Analytics',
//     author: 'Susan Lee',
//     image: 'https://images.pexels.com/photos/6476264/pexels-photo-6476264.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Business'
//   },
//   {
//     id: 105,
//     type: 'video',
//     title: 'Motion Graphics and Animation Basics',
//     author: 'Carlos Rivera',
//     image: 'https://images.pexels.com/photos/8293677/pexels-photo-8293677.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Design'
//   },
//   {
//     id: 106,
//     type: 'podcast',
//     title: 'The Future of Remote Work',
//     author: 'Patricia Johnson',
//     image: 'https://images.pexels.com/photos/6457569/pexels-photo-6457569.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Business'
//   },
//   {
//     id: 107,
//     type: 'course',
//     title: 'Mobile App UI Design Principles',
//     author: 'Mark Thompson',
//     image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Design'
//   },
//   {
//     id: 108,
//     type: 'video',
//     title: 'Building RESTful APIs with Node.js',
//     author: 'Sophia Chen',
//     image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'Development'
//   }
// ];