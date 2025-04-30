import axios from "axios";
import { useEffect, useState } from "react";
import { CourseType } from "@/types/course";
import { ProgressType } from "@/types/progress";

const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI 


// Voir tous les cours suivis par l'utilisateur
export const useUserCourses = (userId: string) => {
  const [userCourses, setUserCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string |null>(null);

  useEffect(() => {
    const fetchUserCourses = async () => {
      console.log("Récupération des cours de l'utilisateur :", userId);
      try {
        const res = await axios.get(`${SERVER_URI}/users/${userId}/courses`);
        console.log("Cours récupérés :", res.data.courses);
        setUserCourses(res.data.courses);
      } catch (error: any) {
        console.log("Erreur lors de la récupération des cours :", error.message);
        setError(error.message);
      } finally {
        console.log("Fin du chargement des cours suivis.");
        setLoading(false);
      }
    };

    fetchUserCourses();
  }, [userId]);

  return { userCourses, loading, error };
};

//  Ajouter un cours
export const addCourseToUser = async (userId: string, courseId: string) => {
  console.log(`Ajout du cours ${courseId} pour l'utilisateur ${userId}`);
  try {
    const res = await axios.post(`${SERVER_URI}/users/${userId}/courses`, { courseId });
    console.log("Cours ajouté avec succès :", res.data);
    return res.data;
  } catch (error: any) {
    console.log("Erreur lors de l'ajout du cours :", error.message);
    throw error;
  }
};

// Supprimer un cours
export const removeCourseFromUser = async (userId: string, courseId: string) => {
  console.log(` Suppression du cours ${courseId} pour l'utilisateur ${userId}`);
  try {
    const res = await axios.delete(`${SERVER_URI}/users/${userId}/courses/${courseId}`);
    console.log("Cours supprimé avec succès :", res.data);
    return res.data;
  } catch (error: any) {
    console.log("Erreur lors de la suppression du cours :", error.message);
    throw error;
  }
};

// Voir les détails d’un cours
export const useUserCourseDetails = (userId: string, courseId: string) => {
  const [courseDetails, setCourseDetails] = useState<CourseType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      console.log(`Récupération des détails du cours ${courseId} pour l'utilisateur ${userId}`);
      try {
        const res = await axios.get(`${SERVER_URI}/users/${userId}/courses/${courseId}`);
        console.log("Détails du cours :", res.data.course);
        setCourseDetails(res.data.course);
      } catch (error: any) {
        console.log("Erreur récupération détails :", error.message);
        setError(error.message);
      } finally {
        console.log("Fin du chargement des détails du cours");
        setLoading(false);
      }
    };

    fetchDetails();
  }, [userId, courseId]);

  return { courseDetails, loading, error };
};

// Progression dans un cours
export const useCourseProgress = (userId: string, courseId: string) => {
  const [progress, setProgress] = useState<ProgressType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      console.log(`Récupération de la progression pour le cours ${courseId} et l'utilisateur ${userId}`);
      try {
        const res = await axios.get(`${SERVER_URI}/users/${userId}/courses/${courseId}/progress`);
        console.log("Progression récupérée :", res.data.progress);
        setProgress(res.data.progress);
      } catch (error: any) {
        console.log("Erreur récupération progression :", error.message);
        setError(error.message);
      } finally {
        console.log("Fin du chargement de la progression");
        setLoading(false);
      }
    };

    fetchProgress();
  }, [userId, courseId]);

  return { progress, loading, error };
};
