import { Container, Text, Button, Center, Heading, VStack, HStack, Checkbox, Box, Input, IconButton, Icon } from "native-base";
import React from "react";
import { justifyContent } from "styled-system";
import { Feather,Entypo } from "@expo/vector-icons"

export default function TodoList({ todoList, setTodoList }: any) {
    console.log("Todo List", todoList)

    const handleDelete=(id:Number)=>{
        const updatedList = todoList.filter((item:any)=>{

            return item.id != id;

        })
        setTodoList(updatedList)
    }

    const handleStatusChange = (id: Number) => {
        const updatedList = todoList.map((item : any)=>{
            if(item.id == id){
                return {
                    ...item, isCompleted: !item.isCompleted
                }

            }  
            return item 
        })
        setTodoList(updatedList)

    }

    return (
        <Box >
 
            {/* <VStack space={4} > */}
               

                <VStack 
                space={2} 
                >
                    {todoList.map((item: any) => (

                        <HStack
                            w="100%"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Checkbox
                                isChecked={item.isCompleted} value={""}
                                onChange={()=> handleStatusChange(item.id)}
                            >

                                <Text 
                                key={item.id}
                                mx="2" 
                                strikeThrough={item.isCompleted}
                                _light={{
                                    color: item.isCompleted ? "gray.400" : "coolGray.800"
                                }}
                                _dark={{
                                    color: item.isCompleted ? "gray.400" : "coolGray.50"
                                }}
                                
                                >
                                    {item.title}
                                </Text>

                            </Checkbox>
                            <IconButton 
                            size= "sm"
                            colorScheme="trueGray"
                            icon={
                                <Icon 
                                as={Entypo}
                                name="minus"
                                size="xs"
                                color="trueGray.400"
                                />
                            }
                            onPress={()=>handleDelete(item.id)}

                            />
                        </HStack>

                    ))

                    }
                </VStack>



            {/* </VStack> */}

            {/* </Center> */}
        </Box>
    )

}