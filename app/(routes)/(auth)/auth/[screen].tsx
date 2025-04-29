  import { useLocalSearchParams, useRouter } from 'expo-router';
  import React from 'react';
  import { View, Text, Pressable, StyleSheet } from 'react-native';
  import SignUpScreen from '@/screens/auth/signup/signup.screen';
  import SignInScreen from '@/screens/auth/signin/signin.screen';
  import ForgotScreen from '@/screens/auth/forgot/forgot.screen';

  export default function AuthScreen() {

    const { screen } = useLocalSearchParams(); // récupère 'signup', 'signin', 'forgot'
    const router = useRouter();

    return (
      <View style={styles.container}>
        {screen === 'signin' && (
          <>
            <Text style={styles.link}>Connexion</Text>
            <SignInScreen />
            <Pressable onPress={() => router.push('/auth/forgot' as const)} style={styles.switchButton}>
              <Text style={styles.link}>Mot de passe oublié ?</Text>
            </Pressable>
            <Pressable onPress={() => router.push('/auth/signup' as const)} style={styles.switchButton}>
              <Text style={styles.link}>Pas encore inscrit ? S'inscrire</Text>
            </Pressable>
          </>
        )}

        {screen === 'signup' && (
          <>
            <Text style={styles.link}>Inscription</Text>
            <SignUpScreen />
            <Pressable onPress={() => router.push('/auth/signin' as const)} style={styles.switchButton}>
              <Text style={styles.link}>Déjà inscrit ? Se connecter</Text>
            </Pressable>
          </>
        )}

        {screen === 'forgot' && (
          <>
            <Text style={styles.link}>Mot de passe oublié</Text>
            <ForgotScreen />
            <Pressable onPress={() => router.push('/auth/signin' as const )} style={styles.switchButton}>
              <Text style={styles.link}>Retour à la connexion</Text>
            </Pressable>
          </>
        )}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    switchButton: { marginTop: 10, alignItems: 'center' },
    link: { color: '#007bff', fontWeight: 'bold' },
  });
