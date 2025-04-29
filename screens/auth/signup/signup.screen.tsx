import { useState } from 'react';
import { useAuth } from '@/context/authContext'
import { useRouter } from 'expo-router'
import { View, Text, TextInput, Button } from 'react-native';


export default function SignUpScreen() {
  const { signup } = useAuth ()
  const router = useRouter()
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')

  const handleSignup =async () => {
    try { 
    await signup (email, password)
    router.replace('/(routes)/(auth)/information')
  } catch (err) {
    console.log("Erreur lors de complement d'information", err)
  }}
  return (
    <View>
      <Text>Inscription</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Mot de passe" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="S'inscrire" onPress={handleSignup} />
    </View>
  );
}
