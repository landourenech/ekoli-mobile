import axios from "axios";
import { useEffect, useState } from "react";    
import { CourseType } from "@/types/course";
const SERVER_URI = process.env.REACT_APP_SERVER_URI;

// Voir tous les cours 

export const Courses = () => {
    const [courses, setCourses] = useState<CourseType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
     
    useEffect ( () => {
        const fetchCourses =async () => {
            console.log("Récupération de tous les cours");
            try {
                const res = await axios.get(`${SERVER_URI}/courses`);
                console.log("Liste des cours :", res.data.courses);
                setCourses(res.data.courses);
            } catch (error: any) {
                console.log("Erreur récupération des cours :", error.message);
                setError(error.message);
            } finally {
                console.log("Fin du chargement des cours");
                setLoading(false);
            }
        }
        fetchCourses();
    }, []);
    return { courses, loading, error };
            }
    
// Voir les détails d’un cours
export const CourseDetails = (courseId: string) => {
    const [courseDetails, setCourseDetails] = useState<CourseType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchDetails = async () => {
            console.log(`Récupération des détails du cours ${courseId}`);
            try {
                const res = await axios.get(`${SERVER_URI}/courses/${courseId}`);
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
    }, [courseId]);
    return { courseDetails, loading, error };
}

// 