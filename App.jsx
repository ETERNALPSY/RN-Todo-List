import { useFonts } from 'expo-font'
import Navigator from './src/navigation/Navigator'
export default function App() {

   const [fontsLoaded] = useFonts({
      'Josefin': require('./assets/JosefinSans/JosefinSans-Regular.ttf')
   })

   if (!fontsLoaded) {
      return null
   }

   return (
      <Navigator />
   )
}
