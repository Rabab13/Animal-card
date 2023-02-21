import * as React from "react";
import { Image, StyleSheet, StatusBar, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding } from "../GlobalStyles";

const IPhone14Pro15 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro15}>
      <Image
        style={[styles.parkeringskylt1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/parkeringskylt-1.png")}
      />
      <StatusBar barStyle="default" />
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Pressable style={[styles.backBtn, styles.backBtnPosition]}>
        <View style={[styles.backBtnChild, styles.childShadowBox]} />
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("IPhone14Pro7")}
        >
          <Pressable style={[styles.groupChild, styles.childShadowBox]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
        </Pressable>
      </Pressable>
      <Image
        style={[
          styles.iphone14Pro15Child,
          styles.backBtnPosition,
          styles.iconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={styles.nounScan23885591}>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector16.png")}
        />
      </View>
      <Image
        style={[styles.flashOnIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/flash-on.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  backBtnPosition: {
    bottom: "5.63%",
    position: "absolute",
  },
  childShadowBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(186, 175, 175, 0.5)",
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_2xs,
    right: "0%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  parkeringskylt1Icon: {
    height: "106.36%",
    width: "113.28%",
    right: "-13.28%",
    bottom: "-6.36%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  homeIndicator: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.46%",
    width: "95.9%",
    top: "97.54%",
    right: "1.79%",
    left: "2.31%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: "0%",
    position: "absolute",
  },
  backBtnChild: {
    left: "88.3%",
    width: "11.7%",
  },
  groupChild: {
    left: "0%",
    width: "100%",
  },
  vectorIcon: {
    height: "45%",
    width: "27.5%",
    top: "27.5%",
    right: "40%",
    bottom: "27.5%",
    left: "32.5%",
    position: "absolute",
  },
  rectangleParent: {
    right: "88.3%",
    width: "11.7%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  backBtn: {
    height: "4.69%",
    width: "87.02%",
    top: "89.67%",
    right: "6.62%",
    left: "6.36%",
  },
  iphone14Pro15Child: {
    height: "12.09%",
    width: "26.21%",
    top: "82.28%",
    right: "37.15%",
    left: "36.64%",
  },
  vectorIcon1: {
    width: 53,
    height: 53,
  },
  nounScan23885591: {
    height: "6.26%",
    width: "18.34%",
    top: "85.16%",
    right: "40.91%",
    bottom: "8.58%",
    left: "40.75%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  flashOnIcon: {
    height: "2.93%",
    width: "6.36%",
    top: "90.61%",
    right: "8.4%",
    bottom: "6.46%",
    left: "85.24%",
    position: "absolute",
  },
  iphone14Pro15: {
    backgroundColor: "#dffffe",
    flex: 1,
    height: 849,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone14Pro15;
