/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";


import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

interface RootNavigatorProps {
  theme: string;
}

function RootNavigator() {

  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors[colorScheme].tint,
        shadowOpacity: 0,
        elevation: 0
      },
      headerTintColor: Colors[colorScheme].headerText,
      headerTitleAlign: "left",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
    }>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{
        title: "WhatsApp",
        headerRight: () => (
          <View style={{ flexDirection: "row", width: 60, justifyContent: "space-between", marginRight: 10 }}>
            <Octicons name="search" size={22} color={Colors[colorScheme].headerText} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors[colorScheme].headerText} />
          </View>
        )
      }} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen}
        options={({ route }) => ({
          title: route?.params?.name,
          headerRight: () => (
            <View style={{ flexDirection: "row", width: 100, justifyContent: "space-between" }}>
              <FontAwesome5 name="video" size={22} color={Colors[colorScheme].headerText} />
              <MaterialIcons name="call" size={22} color={Colors[colorScheme].headerText} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors[colorScheme].headerText} />
            </View>
          )

        })
        }
      />
      <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Contacts' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
