import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, 
    backgroundColor: '#E8F5E9', 
    justifyContent: 'center', 
  },
  title: {
    fontSize: 30, 
    marginBottom: 32, 
    textAlign: 'center',
    fontWeight: '700', 
    color: '#2E7D32', 
  },
  input: {
    height: 50,
    borderColor: '#A5D6A7', 
    borderWidth: 1.5,
    borderRadius: 12, 
    marginBottom: 20, 
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF', 
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 20, 
    textAlign: 'center',
    fontSize: 16, 
  },
  registerPrompt: {
    marginTop: 24,
    textAlign: 'center',
  },
  registerLink: {
    color: '#007BFF', 
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    borderRadius: 12, 
    backgroundColor: '#4CAF50', 
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, 
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: '700', 
  },
});

export default styles;
