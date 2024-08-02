import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  hometitle: {
    fontSize: 36,
    fontWeight: '900',
    marginVertical: 20,
    alignSelf: 'flex-start',
    color: '#212529',
    textShadowColor: '#e9ecef',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
