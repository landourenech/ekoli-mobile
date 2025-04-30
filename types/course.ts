export interface CourseType {
    id: number;
    title: string;
    description: string;
    image: string;
    instructor: string;
    price: number;
    rating: number;
    reviewCount: number;
    students: number;
    duration: string;
    level: string;
    category: string;
    learningPoints: string[];
    modules: {
      title: string;
      duration: string;
      lessons: {
        title: string;
        duration: string;
      }[];
    }[];
  }