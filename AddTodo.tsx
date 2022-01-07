import { HStack, Input, IconButton, Icon } from "native-base"
import React, { useState } from "react"
import { Feather, Entypo } from "@expo/vector-icons"



export default function AddTodo({ todoList, setTodoList }: any) {

    const [inputValue, setInputValue] = useState("")

    const addItem = (title: string) => {
        setTodoList([
            ...todoList,
            {
                id: Math.random(),
                title: title,
                isCompleted: false
            }
        ])

    }


    return <>
        <HStack>
            <Input
                flex={1}
                placeholder="Add Task"
                value={inputValue}
                onChangeText={(v) => setInputValue(v)}
            />

            {/* <Button onPress={() => {
                    alert("This is TODO LIST COMPONENT")
                }} >+</Button> */}
            <IconButton
                borderRadius="sm"
                variant="solid"
                icon={
                    <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
                }
                onPress={() => {
                    addItem(inputValue)
                    setInputValue("")
                }}

            />

        </HStack>

    </>
}