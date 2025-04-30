


export type HomeworkType = {
    id: number;
    title: string;
    description: string;
    dueDate: string; // Date ISO (ex : "2025-04-29T12:30:00Z")
    courseId: number;
    courseTitle: string;
    courseImage: string;
    status: 'pending' | 'completed' | 'overdue';
    createdAt: string; // Date ISO (ex : "2025-04-29T12:30:00Z")
    updatedAt: string; // Date ISO (ex : "2025-04-29T12:30:00Z")
    submittedAt: string | null; // Date ISO (ex : "2025-04-29T12:30:00Z") ou null si pas encore soumis
    feedback: string | null; // Commentaire du professeur ou null si pas encore noté        
}