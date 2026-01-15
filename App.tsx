/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';

import LottieView from "lottie-react-native";

function Animation() {
  return (
    <LottieView
      source={require("./loading.lottie")}
      style={{width: "200", height: "200"}}
      autoPlay
      loop
    />
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.text}>loading.lottie V2 format should render here!</Text>
          <Animation />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
  }
  text: {
    fontSize: 16,
  },
});

export default App;
