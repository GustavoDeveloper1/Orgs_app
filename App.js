// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import Cesta from './Component/Cesta/Cesta';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta />

    </SafeAreaView>
  );
}


