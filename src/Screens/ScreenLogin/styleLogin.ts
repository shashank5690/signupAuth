import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Increased padding for better spacing
    backgroundColor: '#E8F5E9', // Light green background for consistency with the theme
    justifyContent: 'center', // Center content vertically
  },
  title: {
    fontSize: 30, // Slightly larger font size for prominence
    marginBottom: 32, // Increased margin for better spacing
    textAlign: 'center',
    fontWeight: '700', // Bold weight for emphasis
    color: '#2E7D32', // Dark green color for title
  },
  input: {
    height: 50,
    borderColor: '#A5D6A7', // Light green border for consistency
    borderWidth: 1.5,
    borderRadius: 12, // Rounded corners for a modern look
    marginBottom: 20, // Increased margin for better spacing
    paddingHorizontal: 16, // Larger padding for better user experience
    backgroundColor: '#FFFFFF', // White background for inputs
    shadowColor: '#000000', // Shadow for better visibility
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Elevated shadow for Android
  },
  errorText: {
    color: '#D32F2F', // Red color for error messages
    marginBottom: 20, // Increased margin for better spacing
    textAlign: 'center',
    fontSize: 16, // Slightly larger font size for readability
  },
  registerPrompt: {
    marginTop: 24,
    textAlign: 'center',
  },
  registerLink: {
    color: '#007BFF', // Blue color for links
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    borderRadius: 12, // Rounded corners for modern design
    backgroundColor: '#4CAF50', // Consistent green color for button
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000', // Shadow for button
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, // Elevated shadow for Android
  },
  buttonText: {
    color: '#FFFFFF', // White text color for contrast
    fontSize: 18,
    fontWeight: '700', // Bold weight for emphasis
  },
});

export default styles;
