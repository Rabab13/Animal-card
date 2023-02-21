import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    top: 11,
    left: 13,
    width: 11,
    height: 18,
  },
  vectorParent: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.labelColorDarkPrimary,
    shadowColor: "rgba(186, 175, 175, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 40,
  },
});

export default FrameScreen;
