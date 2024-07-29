import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Light background for a modern look
    justifyContent: 'center', // Center content vertically
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333', // Darker color for better readability
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25, // Increased border radius
    marginBottom: 16,
    paddingHorizontal: 16, // Larger padding for better user experience
    backgroundColor: '#fff', // White background for inputs
    shadowColor: '#000', // Shadow for better visibility
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Elevation for Android
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
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
    borderRadius: 25, // Larger border radius for buttons
    backgroundColor: '#28a745', // Green color for the button
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Shadow for button
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 12, // Elevation for Android
  },
  buttonText: {
    color: '#fff', // White text color for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
