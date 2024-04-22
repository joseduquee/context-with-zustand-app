import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { BottomTabsNavigator } from './presentation/navigators/BottomTabsNavigator';


export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />   
    </NavigationContainer>
  )
}
