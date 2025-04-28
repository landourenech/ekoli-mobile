import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

// Importation de l'image
import notFoundImage from '../assets/not_found.png';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      {/* Affichage de l'image importée */}
      <Image 
        source={notFoundImage} 
        style={styles.image}
      />
      <Text style={styles.text}>Cette page n'existe pas.</Text>
      <Link href="./" style={styles.link}>
        <Text>Retour à l'écran d'accueil</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20, // espace entre l'image et le texte
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,  // Pour rendre le bouton plus large
    borderWidth: 2,        // Utilisation de `borderWidth` au lieu de `border`
    borderColor: '#000',   // Définir la couleur de la bordure
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',   // Centrer le texte
  },
});
