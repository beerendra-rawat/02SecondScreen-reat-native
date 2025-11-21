import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Images() {
  return (
    <View style={styles.card}>
      <Image 
        source={require('../assets/4.jpg')} 
        style={styles.img} 
      />

        <View style={styles.info}>
            <Text style={styles.title}>Product Name</Text>
            <Text style={styles.price}>₹499</Text>
            <Button title="Add to Cart" onPress={() => {}} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 12,
    margin: 10,
    elevation: 5
  },
  img:{
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  info:{
    marginLeft: 15,
    justifyContent: 'space-between'
  },
  title:{
    fontSize: 18,
    fontWeight: "600"
  },
  price:{
    fontSize: 16,
    color: 'green'
  }
});
