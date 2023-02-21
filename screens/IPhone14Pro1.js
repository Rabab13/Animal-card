import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const IPhone14Pro1 = () => {
  return (
    <View style={styles.iphone14Pro1}>
      <View style={styles.statusbarIphone13}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side1.png")}
        />
      </View>
      <Text style={[styles.parkscan, styles.parkscanFlexBox]}>parkscan</Text>
      <Image
        style={styles.iphone14Pro1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <View style={[styles.iphone14Pro1Inner, styles.parkscanFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-48.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  parkscanFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    width: 164,
    height: 32,
    top: 0,
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldBody1_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody1,
    color: "#010101",
    textAlign: "center",
    height: 20,
    lineHeight: 22,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_md,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbarIphone13: {
    width: 390,
    height: 47,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  parkscan: {
    height: "10.35%",
    top: "86.4%",
    left: 131,
    fontSize: FontSize.size_3xl,
    letterSpacing: -2,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: "#1b0133",
    textAlign: "left",
    display: "flex",
    width: 127,
    lineHeight: 22,
  },
  iphone14Pro1Child: {
    height: "20.07%",
    width: "43.51%",
    top: "39.91%",
    right: "28.24%",
    bottom: "40.02%",
    left: "28.24%",
    borderRadius: 41,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    width: 80,
    height: 108,
  },
  iphone14Pro1Inner: {
    height: "12.56%",
    width: "18.83%",
    top: "43.26%",
    right: "40.71%",
    bottom: "44.19%",
    left: "40.46%",
    flexDirection: "row",
    justifyContent: "center",
  },
  iphone14Pro1: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    width: "100%",
    height: 860,
    overflow: "hidden",
  },
});

export default IPhone14Pro1;
