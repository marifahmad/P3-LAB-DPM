import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StudentCard = ({ student }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }} // Ganti dengan gambar mahasiswa
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.info}>NIM: {student.nim}</Text>
        <Text style={styles.info}>Program Studi: {student.program}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});

export default StudentCard;