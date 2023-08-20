import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from "./navigations/stack.navigation";
import DrawerNavigator from './navigations/drawer.navigation'; // Your DrawerNavigator component
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};
