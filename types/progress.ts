export type ProgressType = {
    id: number;
    user_id: number;
    course_id: number;
    percentage: number; // Exemple : 75.5 (pour 75,5%)
    last_accessed_lesson: string | null;
    updated_at: string; // Date ISO (ex : "2025-04-29T12:30:00Z")
    created_at: string;
  };
  