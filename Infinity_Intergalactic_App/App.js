import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './navigations/drawer.navigation'; // Your DrawerNavigator component
import StackNavigation from './navigations/stack.navigation'; // Your StackNavigation component

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};