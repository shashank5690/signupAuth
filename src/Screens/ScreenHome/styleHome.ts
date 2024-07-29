import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9', // Light green background for a fresh feel
    padding: 20, // Added some padding for better spacing
  },
  title: {
    fontSize: 28, // Increased font size for prominence
    fontWeight: '700', // Bold font weight for emphasis
    color: '#2E7D32', // Darker green for contrast
    marginBottom: 20, // Adjusted margin for better spacing
    textAlign: 'center', // Centered text alignment
  },
  subtitle: {
    fontSize: 20, // Slightly smaller size for subtitle
    color: '#388E3C', // Dark green for subtitle
    marginBottom: 16, // Spacing between subtitle and other elements
    textAlign: 'center', // Centered text alignment
  },
  description: {
    fontSize: 16, // Standard size for description
    color: '#4CAF50', // Light green for description
    textAlign: 'center', // Centered text alignment
    paddingHorizontal: 20, // Added padding for better text readability
  },
  button: {
    marginTop: 30, // Spacing above the button
    backgroundColor: '#4CAF50', // Green background color for button
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 20, // Horizontal padding for button
    borderRadius: 8, // Rounded corners for button
  },
  buttonText: {
    color: '#FFFFFF', // White text color for button
    fontSize: 18, // Font size for button text
    textAlign: 'center', // Centered text alignment
  },
});

export default styles;
