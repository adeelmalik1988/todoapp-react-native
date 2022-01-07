import React, { useEffect, useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Container,
  Stack,
  StatusBar,
  Box,
  Icon,
  IconButton
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {SafeAreaProvider} from 'react-native-safe-area-context'
//import { AppBar } from "react-native"

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

function AppBar() {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#6200ee" />

      <HStack bg='#6200ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
        <HStack space="4" alignItems='center'>
          <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
          <Text color="white" fontSize="20" fontWeight='bold'>TODO LIST</Text>
        </HStack>
        <HStack space="2">
          <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
          <IconButton icon={<Icon as={<MaterialIcons name='search' />}
            color="white" size='sm' />} />
          <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
        </HStack>
      </HStack>

    </>
  )
}

export default function App() {

  // const [isReady,setIsReady] = useState(false);

  // useEffect(()=>{
  //   (
  //     async()=>{
  //       await Font.loadAsync({
  //         Roboto: require('native-base/Fonts/Roboto.ttf'),
  //         Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //         ...Ionicons.font,
  //       });
  //       setIsReady(true);
  //     }
  //   )();
  // },[]);

  // if(!isReady) {
  //   return (
  //     <Text>Loading.....</Text>
  //   )
  // }

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "First Todo",
      isCompleted: false
    },
    {
      id: 2,
      title: "Second Todo",
      isCompleted: true
    },
    {
      id: 3,
      title: "Third Todo",
      isCompleted: false
    },



  ])



  return (
    <NativeBaseProvider  >
      <AppBar />
      <Center flex={1} px="3" >
        <AddTodo todoList={todoList} setTodoList = {setTodoList} />
        <TodoList todoList={todoList}  setTodoList = {setTodoList} />
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light" ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
