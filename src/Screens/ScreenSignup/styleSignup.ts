import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Slightly increased padding for better spacing
    backgroundColor: '#E8F5E9', // Light green background to match the Home screen
    justifyContent: 'center', // Center content vertically
  },
  title: {
    fontSize: 30, // Increased font size for prominence
    marginBottom: 24,
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
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF', // White background for inputs
    shadowColor: '#000000', // Shadow for better visibility
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Elevated shadow for Android
  },
  errorText: {
    color: '#D32F2F', // Red color for error messages
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16, // Increased font size for readability
  },
  button: {
    height: 50,
    borderRadius: 12, // Rounded corners for a modern look
    backgroundColor: '#4CAF50', // Green color for button, consistent with the theme
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000', // Shadow for better visibility
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
