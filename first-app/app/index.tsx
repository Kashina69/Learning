import "../global.css";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Page() {
  return (
  
      <View style={{ flex: 1, justifyContent: "center", gap: 16 }}>
            <View className="flex-1 bg-white p-4 pt-16">
        <Text className="mb-4 font-bold text-blue-600 text-2xl text-center">
          Hello World
        </Text>
      </View>
        <Button
          title="Open ToDo App"
          onPress={() => router.push("/todolist/index")}
        />
      </View>
  );
}
