import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ContactScreen from '../screens/ContactScreen';

export type RootTabParamList = {
  Home: undefined;
  Services: undefined;
  Gallery: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Services':
              iconName = 'build';
              break;
            case 'Gallery':
              iconName = 'photo-library';
              break;
            case 'Contact':
              iconName = 'contact-mail';
              break;
            default:
              iconName = 'help';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff6b35',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#333',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Ignite Laser'}}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{title: 'Our Services'}}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{title: 'Gallery'}}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{title: 'Get a Quote'}}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
