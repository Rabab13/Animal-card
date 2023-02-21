import * as React from "react";
import { Image, StyleSheet } from "react-native";

const IPhone14Pro14 = () => {
  return (
    <Image
      style={styles.iphone14Pro14}
      resizeMode="cover"
      source={require("../assets/iphone-14-pro--14.png")}
    />
  );
};

const styles = StyleSheet.create({
  iphone14Pro14: {
    flex: 1,
    width: "100%",
    height: 960,
    overflow: "hidden",
  },
});

export default IPhone14Pro14;
