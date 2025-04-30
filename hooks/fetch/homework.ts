import axios from "axios";
import { useEffect, useState } from "react";
import { HomeworkType } from "@/types/homework";
const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI;


//  Voir le devoir

export const useHomework = (userId: string, courseId: string) => {
  const [homework, setHomework] = useState<HomeworkType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHomework = async () => {
      console.log(`Récupération du devoir pour le cours ${courseId} et l'utilisateur ${userId}`);
      try {
        const res = await axios.get(`${SERVER_URI}/users/${userId}/courses/${courseId}/homework`);
        console.log("Devoir récupéré :", res.data.homework);
        setHomework(res.data.homework);
      } catch (error: any) {
        console.log("Erreur récupération devoir :", error.message);
        setError(error.message);
      } finally {
        console.log("Fin du chargement du devoir");
        setLoading(false);
      }
    };

    fetchHomework();
  }, [userId, courseId]);

  return { homework, loading, error };
}
//  Envoyer le devoir
export const useSubmitHomework = (userId: string, courseId: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitHomework = async (homeworkData: HomeworkType) => {
    setLoading(true);
    try {
      console.log(`Envoi du devoir pour le cours ${courseId} et l'utilisateur ${userId}`);
      const res = await axios.post(`${SERVER_URI}/users/${userId}/courses/${courseId}/homework`, homeworkData);
      console.log("Devoir envoyé :", res.data);
    } catch (error: any) {
      console.log("Erreur envoi devoir :", error.message);
      setError(error.message);
    } finally {
      console.log("Fin de l'envoi du devoir");
      setLoading(false);
    }
  };

  return { submitHomework, loading, error };
}
//  Voir les devoirs rendus
export const useSubmittedHomework = (userId: string, courseId: string) => { 
    const [submittedHomework, setSubmittedHomework] = useState<HomeworkType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchSubmittedHomework = async () => {
        console.log(`Récupération des devoirs rendus pour le cours ${courseId} et l'utilisateur ${userId}`);
        try {
            const res = await axios.get(`${SERVER_URI}/users/${userId}/courses/${courseId}/homework/submitted`);
            console.log("Devoirs rendus récupérés :", res.data.homework);
            setSubmittedHomework(res.data.homework);
        } catch (error: any) {
            console.log("Erreur récupération devoirs rendus :", error.message);
            setError(error.message);
        } finally {
            console.log("Fin du chargement des devoirs rendus");
            setLoading(false);
        }
        };
    
        fetchSubmittedHomework();
    }, [userId, courseId]);
    
    return { submittedHomework, loading, error };
    }
