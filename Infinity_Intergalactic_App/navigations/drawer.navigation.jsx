import { createDrawerNavigator } from "@react-navigation/drawer";
import {Home, Planets, Profile, BookingHistory, Contact, FAQ, About, PlanetDescription, BookingPage, PaymentPage, TicketPrintPage} from '../screens/index';
import CustomDrawerContent from '../screens/drawerProfile';
import styles from '../screens/drawer.style';
import {SimpleLineIcons} from '@expo/vector-icons';
import { COLORS } from "../constents";
import StackNavigation from '../navigations/stack.navigation'; // Your StackNavigation component

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
  
  <Drawer.Navigator 
  drawerContent={CustomDrawerContent}
  screenOptions={{
    drawerStyle:styles.drawerStyle, 
    drawerLabelStyle:styles.drawerLabelStyle}}
    >
      
      <Drawer.Screen
      name="Stack"
      options={{
        drawerLabel: "Stack",
        title: "Stack",
        drawerItemStyle: { height: 0 }
      }}
      component={StackNavigation}
      />

      <Drawer.Screen
      name="Home"
      options={{
        drawerLabel: "Home",
        title: "Home",
        drawerIcon: () => (
        <SimpleLineIcons name="home" size={20} color={COLORS.red} />
        )
      }}
      component={Home}
      />
        
      <Drawer.Screen
      name="Planets"
      options={{
        drawerLabel: "Planets",
        title: "Planets",
        drawerIcon: () => (
        <SimpleLineIcons name="plane" size={20} color={COLORS.red} />
        )
      }}
      component={Planets}
      />
        
      <Drawer.Screen
      name="Profile"
      options={{
        drawerLabel: "Profile",
        title: "Profile",
        drawerIcon: () => (
        <SimpleLineIcons name="user" size={20} color={COLORS.red} />
        )
      }}
      component={Profile}
      />
      
      <Drawer.Screen
      name="Booking"
      options={{
        drawerLabel: "Booking",
        title: "Booking",
        drawerIcon: () => (
        <SimpleLineIcons name="rocket" size={20} color={COLORS.red} />
        )
      }}
      component={BookingPage}
      />
        
      <Drawer.Screen
      name="Booking History"
      options={{
        drawerLabel: "Booking History",
        title: "Booking History",
        drawerIcon: () => (
        <SimpleLineIcons name="calendar" size={20} color={COLORS.red} />
        )
      }}
      component={BookingHistory}
      />
        
      <Drawer.Screen
      name="Contact Us"
      options={{
        drawerLabel: "Contact Us",
        title: "Contact Us",
        drawerIcon: () => (
        <SimpleLineIcons name="phone" size={20} color={COLORS.red} />
        )
      }}
      component={Contact}
      />
        
      <Drawer.Screen
      name="FAQ"
      options={{
        drawerLabel: "FAQ",
        title: "FAQ",
        drawerIcon: () => (
        <SimpleLineIcons name="globe" size={20} color={COLORS.red} />
        )
      }}
      component={FAQ}
      />
      
      <Drawer.Screen
      name="About Us"
      options={{
        drawerLabel: "About Us",
        title: "About Us",
        drawerIcon: () => (
        <SimpleLineIcons name="star" size={20} color={COLORS.red} />
        )
      }}
      component={About}
      />
      </Drawer.Navigator>
  )
}

export default DrawerNavigator;