import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import SignUpScreen from '@/screens/auth/signup/signup.screen';
import SignInScreen from '@/screens/auth/signin/signin.screen';
import ForgotScreen from '@/screens/auth/forgot/forgot.screen';

export default function AuthScreen() {
  const [screen, setScreen] = useState<'signin' | 'signup' | 'forgot'>('signup'); // par défaut sur l'inscription

  return (
    <View style={styles.container}>
      {screen === 'signin' && (
        <>
        <Text style={styles.link}>
            connexion
        </Text>
        <SignInScreen />
          <Pressable onPress={() => setScreen('forgot')} style={styles.switchButton}>
            <Text style={styles.link}>Mot de passe oublié ?</Text>
          </Pressable>

          <Pressable onPress={() => setScreen('signup')} style={styles.switchButton}>
            <Text style={styles.link}>Pas encore inscrit ? S'inscrire</Text>
          </Pressable>
        </>
      )}

      {screen === 'signup' && (

        <>
        <Text style={styles.link}>inscription</Text>
          <SignUpScreen />
          <Pressable onPress={() => setScreen('signin')} style={styles.switchButton}>
            <Text style={styles.link}>Déjà inscrit ? Se connecter</Text>
          </Pressable>
        </>
      )}

      {screen === 'forgot' && (
        <>
        <Text style={styles.link}> Mots de passe oublie</Text>
        < ForgotScreen />
          <Pressable onPress={() => setScreen('signin')} style={styles.switchButton}>
            <Text style={styles.link}>Retour à la connexion</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  switchButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
 
});
