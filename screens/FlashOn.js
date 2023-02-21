import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const FlashOn = () => {
  return (
    <View style={[styles.flashOn, styles.flashOnLayout]}>
      <Image
        style={[styles.vectorIcon, styles.flashOnLayout]}
        resizeMode="cover"
        source={require("../assets/vector23.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flashOnLayout: {
    overflow: "hidden",
    width: "100%",
  },
  vectorIcon: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  flashOn: {
    flex: 1,
    height: 96,
  },
});

export default FlashOn;
