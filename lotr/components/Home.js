import { View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#272727',
    },
    tolk: {
      borderRadius: 10,
      width: 350,
      height: 600,
      marginBottom: 20,
      marginTop: 20,
    },
    /*text: 
    {
      textAlign: 'center',
      fontSize: 20,
    }*/
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require('../assets/JRR-Tolkien.jpg')}
          style={styles.tolk}
        />
      </View>
    </ScrollView>
  );
}
