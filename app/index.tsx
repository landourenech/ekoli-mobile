import { useEffect } from "react";
import { useRouter, useRootNavigationState } from "expo-router";
import { useAuth } from "@/context/authContext";

export default function Index() {
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();
  const { user, isOnboardingComplete } = useAuth(); // Onboarding status
  const isAppReady = rootNavigationState?.key;

  useEffect(() => {
    if (!isAppReady) return; // Attend que la navigation soit prête

    if (!isOnboardingComplete) {
      // Si l'onboarding n'est pas terminé, redirige vers l'onboarding
      router.replace("/(routes)/onboarding");
    } else if (user) {
      // Si l'utilisateur est authentifié, va à la page d'accueil
      router.replace("/(tabs)");
    } else {
      // Sinon, redirige vers la page de connexion
      router.replace("/(routes)/auth");
    }
  }, [isAppReady, user, isOnboardingComplete]);

  return null;
}
