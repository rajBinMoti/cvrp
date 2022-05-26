import MainComponent from './src/MainComponent';
// import { StatusBar } from 'expo-status-bar';
{/* <StatusBar style="auto" /> */ }
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

export default function App() {

  const url = 'http://192.168.43.221:80';

  return (
    <SafeAreaProvider>
      <MainComponent url={url} />
    </SafeAreaProvider>
  );
}