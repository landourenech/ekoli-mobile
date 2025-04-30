import axios from "axios";
import { useEffect, useState } from "react";
import { EvenementType } from "@/types/evenement";


const SERVER_URI = process.env.REACT_APP_SERVER_URI;


// Voir les evénements
export const fetchEvenement = async () => {
    const SERVER_URI = process.env.REACT_APP_SERVER_URI;
    const [evenement, setEvenement] = useState<EvenementType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchEvenement = async () => {
            console.log("Récupération de tous les événements");
            try {
                const res = await axios.get(`${SERVER_URI}/evenements`);
                console.log("Liste des événements :", res.data.evenements);
                setEvenement(res.data.evenements);
            } catch (error: any) {
                console.log("Erreur récupération des événements :", error.message);
                setError(error.message);
            } finally {
                console.log("Fin du chargement des événements");
                setLoading(false);
            }
        }
        fetchEvenement();
    }, []);
    return { evenement, loading, error };
}

// Voir les détails d’un événement
export const fetchEvenementDetails = async (evenementId: string) => {
    const SERVER_URI = process.env.REACT_APP_SERVER_URI;
    const [evenementDetails, setEvenementDetails] = useState<EvenementType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchDetails = async () => {
            console.log(`Récupération des détails de l'événement ${evenementId}`);
            try {
                const res = await axios.get(`${SERVER_URI}/evenements/${evenementId}`);
                console.log("Détails de l'événement :", res.data.evenement);
                setEvenementDetails(res.data.evenement);
            } catch (error: any) {
                console.log("Erreur récupération détails :", error.message);
                setError(error.message);
            } finally {
                console.log("Fin du chargement des détails de l'événement");
                setLoading(false);
            }
        };
        fetchDetails();
    }, [evenementId]);
    return { evenementDetails, loading, error };
}
