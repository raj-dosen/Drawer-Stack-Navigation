import 'react-native-gesture-handler';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import { useEffect, useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import DrawerContent from './DrawerContent';
import SplashScreen from 'react-native-splash-screen';
import LoginPage from './Screens/Login&Register/Login';
import RegisterPage from './Screens/Login&Register/Register';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#0163d2',
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              size={30}
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen name="Home" component={StackNav} />
  </Drawer.Navigator>
);

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      // Simulate checking user authentication state
      // Replace with your authentication logic
      // setIsLoggedIn(true); // Set based on your auth state
    }, 900);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* {isLoggedIn ? ( */}
          
        {/* ) : ( */}
          {/* <> */}
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Drawer" component={DrawerNav} />
          {/* </> */}
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
