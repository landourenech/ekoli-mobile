export interface ExploreItem {
    id: number;
    type: 'course' | 'video' | 'podcast';
    title: string;
    author: string;
    image: string;
    category: string;
    createdAt: string; // Date ISO (ex : "2025-04-29T12:30:00Z")
    updatedAt: string; // Date ISO (ex : "2025-04-29T12:30:00Z")
    description: string;
  }