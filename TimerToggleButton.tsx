import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  startCountDownHandler: () => void;
  stopCountDownHandler: () => void;
  isTimerRunning: boolean;
  setIsTimerRunning: (value: boolean) => void;
};

export const TimerToggleButton: React.FC<Props> = ({
  startCountDownHandler,
  stopCountDownHandler,
  isTimerRunning,
}) => {
  const toggleTimer = () => {
    isTimerRunning ? stopCountDownHandler() : startCountDownHandler();
  };

  return (
    <Pressable
      onPress={toggleTimer}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
    >
      <View style={styles.container}>
        <FontAwesome
          style={styles.icon}
          name={isTimerRunning ? "pause" : "play"}
          size={75}
          color="#fff"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    borderColor: "#fff",
    marginVertical: 50,
  },
  icon: { alignSelf: "center" },
});