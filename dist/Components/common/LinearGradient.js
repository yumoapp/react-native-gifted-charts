var LinearGradient;
try {
    // for bare react-native projects
    LinearGradient = require('react-native-linear-gradient').LinearGradient;
}
catch (e) {
    try {
        // for expo-based projects
        LinearGradient = require('expo-linear-gradient').LinearGradient;
    }
    catch (e) {
        throw new Error('Gradient package was not found. Make sure "react-native-linear-gradient" or "expo-linear-gradient" is installed');
    }
}
export default LinearGradient;
