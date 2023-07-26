import { useFonts } from 'expo-font'
import Navigator from './src/navigation/Navigator'
import { Provider } from 'react-redux'
import store from './src/store'

export default function App() {

   const [fontsLoaded] = useFonts({
      'Josefin': require('./assets/JosefinSans/JosefinSans-Regular.ttf')
   })

   if (!fontsLoaded) {
      return null
   }

   return (
      <Provider store={store}>
         <Navigator />
      </Provider>
   )
}
