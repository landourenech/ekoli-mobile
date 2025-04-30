import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter(); // ⚠️ expo-router style navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password); // suppose que login est async
      router.replace('/(tabs)'); // redirection
    } catch (err) {
      console.log("Erreur de connexion", err);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
