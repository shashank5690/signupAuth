import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
      elevation: 2, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    image: {
      width: '100%',
      height: 200,
    },
    info: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    statsItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    stats: {
      fontSize: 14,
      color: '#555',
      marginLeft: 5,
      marginBottom: 5,
    },
  });

  export default styles;