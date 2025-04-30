export interface EvenementType {
    id: number;
    title: string;
    description: string;
    date: string; 
    location: string;
    image: string;
    createdAt: string; 
    updatedAt: string; 
    participants: number; 
    status: 'upcoming' | 'ongoing' | 'completed'; 
    category: string; 
}