import { useState, useEffect } from "react";
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (e) {
        // handle error
      }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (e) {
        // handle error
      }
    };
    saveTodos();
  }, [todos]);

  const addTodo = () => {
    if (todo.trim().length === 0) return;
    setTodos([...todos, todo.trim()]);
    setTodo("");
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <View className="flex-1 bg-white p-4 pt-16">
      <Text className="mb-4 font-bold text-blue-600 text-2xl text-center">
        Todo App
      </Text>
      <View className="flex-row mb-4">
        <TextInput
          className="flex-1 bg-gray-100 mr-2 p-2 border rounded-lg"
          placeholder="Add a new todo"
          value={todo}
          onChangeText={setTodo}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View className="flex-row items-center bg-gray-50 mb-2 p-2 rounded-lg">
            <Text className="flex-1 text-base">{item}</Text>
            <TouchableOpacity
              className="bg-red-500 ml-2 px-2 py-1 rounded"
              onPress={() => removeTodo(index)}
            >
              <Text className="text-white">Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text className="mt-8 text-gray-400 text-center">No todos yet!</Text>
        }
      />
      <Button
        title="Go back to Home"
        onPress={() => router.replace('/')}
      />
    </View>
  );
}
