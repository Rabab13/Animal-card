import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const IPhone14Pro7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro7}>
      <Image
        style={styles.iphone14Pro7Child}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <View style={[styles.homeindicator, styles.frameViewPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Text
        style={[styles.parkscan, styles.textFlexBox, styles.parkscanFlexBox]}
      >
        parkscan
      </Text>
      <View style={styles.iphone14Pro7Inner}>
        <TouchableOpacity
          style={styles.wrapperPosition}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("IPhone14Pro6")}
        >
          <TouchableOpacity
            style={[styles.drowerBtnWrapper, styles.wrapperPosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("IPhone14Pro6")}
          >
            <TouchableOpacity
              style={styles.drowerBtn}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("IPhone14Pro6")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/vector17.png")}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <StatusBar barStyle="default" />
      <TouchableOpacity
        style={[styles.text, styles.textFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro15")}
      >
        <Text style={[styles.tapToScan, styles.parkscanFlexBox]}>
          Tap to scan
        </Text>
      </TouchableOpacity>
      <View
        style={[styles.frameView, styles.textFlexBox, styles.frameViewPosition]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-49.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewPosition: {
    left: "50%",
    alignItems: "center",
  },
  textFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  parkscanFlexBox: {
    textAlign: "center",
    color: Color.darkslategray_200,
  },
  wrapperPosition: {
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iphone14Pro7Child: {
    height: "84.51%",
    width: "190.08%",
    top: "73.59%",
    right: "-90.08%",
    bottom: "-58.1%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.45%",
    marginLeft: -185,
    top: "97.55%",
    width: 374,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: "0%",
    left: "50%",
    position: "absolute",
  },
  parkscan: {
    height: "9.24%",
    width: "62.05%",
    top: "88.3%",
    left: "18.97%",
    fontSize: FontSize.size_3xl,
    letterSpacing: -2,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  drowerBtn: {
    width: 20,
    height: 18,
  },
  drowerBtnWrapper: {
    borderRadius: Border.br_2xs,
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
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.labelColorDarkPrimary,
    right: "0%",
    top: "0%",
  },
  iphone14Pro7Inner: {
    top: 61,
    left: 24,
    width: 40,
    height: 36,
    position: "absolute",
  },
  tapToScan: {
    fontSize: FontSize.size_2xl,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    width: 156,
    height: 38,
  },
  text: {
    height: "4.44%",
    width: "59.49%",
    top: "30.29%",
    right: "17.69%",
    bottom: "65.26%",
    left: "22.82%",
    flexDirection: "row",
  },
  frameChild: {
    width: 194,
    height: 185,
  },
  frameView: {
    height: "20.7%",
    marginLeft: -81.64,
    top: "38.52%",
    bottom: "40.77%",
    width: 186,
    alignItems: "center",
  },
  iphone14Pro7: {
    flex: 1,
    height: 855,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.labelColorDarkPrimary,
  },
});

export default IPhone14Pro7;
