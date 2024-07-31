import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000', // Black background for the card
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 6, // Elevated shadow effect
    shadowColor: '#888', // Gray shadow for a modern look
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#333', // Dark border for the image
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 20, // Increased font size for the title
    fontWeight: '700', // Bold text
    marginBottom: 10,
    color: '#FFF', // White text for better contrast
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stats: {
    fontSize: 16, // Increased font size for stats
    color: '#FFF', // White text for stats
    marginLeft: 5,
    fontWeight: '600', // Slightly bolder for better readability
  },
});

export default styles;
