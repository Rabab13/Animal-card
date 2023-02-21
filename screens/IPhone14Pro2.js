import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  Border,
  Padding,
  FontSize,
} from "../GlobalStyles";

const IPhone14Pro2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro2}>
      <Image
        style={[
          styles.unsplashp5a9mj4vlsIcon,
          styles.iphone14Pro2Inner3Position,
        ]}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls.png")}
      />
      <View style={styles.statusbarIphone13}>
        <Image
          style={[styles.notchIcon, styles.sideIconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View
          style={[
            styles.leftSide,
            styles.leftSideLayout,
            styles.sideIconPosition,
          ]}
        >
          <View
            style={[
              styles.statusbarTime,
              styles.statusbarTimePosition,
              styles.leftSideLayout,
            ]}
          >
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.sideIconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <LinearGradient
        style={[styles.iphone14Pro2Child, styles.homeindicatorPosition]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#60219f"]}
      />
      <TouchableOpacity
        style={styles.signinwithapple}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro5")}
      >
        <View style={styles.appleLogo}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Text
          style={[
            styles.continueWithApple,
            styles.ml11,
            styles.get15ScansFlexBox1,
          ]}
        >
          Continue with Apple
        </Text>
      </TouchableOpacity>
      <Text
        style={[styles.byContinuingYouContainer, styles.noMoreFinesFlexBox]}
      >
        <Text style={styles.byContinuingYouContainer1}>
          <Text style={styles.byContinuingYouAgreeToOur}>
            <Text
              style={styles.byContinuingYou}
            >{`By continuing you agree to our `}</Text>
          </Text>
          <Text style={styles.termsOfUsePrivacyPolicy}>
            <Text>Terms of Use</Text>
            <Text>{` & `}</Text>
            <Text style={styles.noMoreFinesTypo}>Privacy Policy</Text>
          </Text>
        </Text>
      </Text>
      <Text
        style={[
          styles.noMoreFines,
          styles.noMoreFinesTypo,
          styles.noMoreFinesFlexBox,
        ]}
      >
        No more fines through AI.
      </Text>
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={[styles.iphone14Pro2Item, styles.statusbarTimePosition]}
        resizeMode="cover"
        source={require("../assets/group-46.png")}
      />
      <View
        style={[
          styles.iphone14Pro2Inner,
          styles.iphone14InnerShadowBox,
          styles.iphone14InnerShadowBox1,
        ]}
      >
        <View style={[styles.iconCheckCircleParent, styles.get15ScansFlexBox]}>
          <Image
            style={styles.iconCheckCircle}
            resizeMode="cover"
            source={require("../assets/-icon-check-circle.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-9.png")}
          />
          <Text
            style={[
              styles.get15Scans,
              styles.ml13,
              styles.get15ScansFlexBox,
              styles.get15ScansFlexBox1,
            ]}
          >
            Get 15 scans for free!
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.frameView,
          styles.iphone14InnerShadowBox,
          styles.frameViewShadowBox,
        ]}
      >
        <View style={[styles.iconCheckCircleParent, styles.get15ScansFlexBox]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-59.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-91.png")}
          />
          <Text
            style={[
              styles.get15Scans,
              styles.ml13,
              styles.get15ScansFlexBox,
              styles.get15ScansFlexBox1,
            ]}
          >
            You need a parking disc
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.iphone14Pro2Inner1,
          styles.iphone14InnerShadowBox,
          styles.iphone14InnerShadowBox1,
        ]}
      >
        <View style={[styles.iconCheckCircleParent, styles.get15ScansFlexBox]}>
          <Image
            style={styles.envoIcon}
            resizeMode="cover"
            source={require("../assets/envo.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-92.png")}
          />
          <Text
            style={[
              styles.get15Scans,
              styles.ml13,
              styles.get15ScansFlexBox,
              styles.get15ScansFlexBox1,
            ]}
          >
            You don’t need to pay
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.iphone14Pro2Inner2,
          styles.iphone14InnerShadowBox,
          styles.frameViewShadowBox,
        ]}
      >
        <View style={[styles.iconCheckCircleParent, styles.get15ScansFlexBox]}>
          <Image
            style={styles.iconCheckCircle}
            resizeMode="cover"
            source={require("../assets/-icon-check-circle1.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-93.png")}
          />
          <Text
            style={[
              styles.get15Scans,
              styles.ml13,
              styles.get15ScansFlexBox,
              styles.get15ScansFlexBox1,
            ]}
          >
            You can park until 11:41
          </Text>
        </View>
      </View>
      <View
        style={[styles.iphone14Pro2Inner3, styles.iphone14Pro2Inner3Position]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml11: {
    marginLeft: 11,
  },
  ml13: {
    marginLeft: Margin.m_lg,
  },
  iphone14Pro2Inner3Position: {
    top: "50%",
    position: "absolute",
  },
  sideIconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
  },
  statusbarTimePosition: {
    marginLeft: -27,
    left: "50%",
    position: "absolute",
  },
  homeindicatorPosition: {
    bottom: "0%",
    position: "absolute",
  },
  get15ScansFlexBox1: {
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  noMoreFinesFlexBox: {
    width: 132,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  noMoreFinesTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  iphone14InnerShadowBox: {
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: "#0b3132",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(11, 49, 50, 0.31)",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_sm,
    height: "7.28%",
    justifyContent: "center",
    paddingVertical: Padding.p_lg,
    position: "absolute",
  },
  iphone14InnerShadowBox1: {
    left: 37,
    right: 80,
    borderWidth: 1,
    borderColor: "#0b3132",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(11, 49, 50, 0.31)",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_sm,
    height: "7.28%",
  },
  get15ScansFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameViewShadowBox: {
    borderWidth: 1,
    borderColor: "#0b3132",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(11, 49, 50, 0.31)",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_sm,
    height: "7.28%",
  },
  unsplashp5a9mj4vlsIcon: {
    marginTop: -426,
    right: -66,
    maxWidth: "100%",
    height: 861,
    left: 0,
    overflow: "hidden",
  },
  notchIcon: {
    marginLeft: -82,
    width: 164,
    height: 32,
    top: 0,
  },
  text: {
    top: 1,
    height: 20,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody1,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody1_size,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
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
    left: -1,
    width: 390,
    height: 47,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14Pro2Child: {
    height: "50.59%",
    top: "49.41%",
    right: 0,
    backgroundColor: "transparent",
    left: 0,
  },
  vectorIcon: {
    width: 14,
    height: 18,
  },
  appleLogo: {
    borderRadius: Border.br_xl,
    width: 19,
    height: 22,
    paddingHorizontal: 2,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  continueWithApple: {
    width: 174,
    height: 23,
    alignItems: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody1,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody1_size,
    textAlign: "left",
  },
  signinwithapple: {
    height: "5.9%",
    top: "83.25%",
    right: 65,
    bottom: "10.85%",
    left: 62,
    paddingHorizontal: 40,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
    borderRadius: Border.br_2xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.black,
  },
  byContinuingYou: {
    fontFamily: FontFamily.dMSansRegular,
  },
  byContinuingYouAgreeToOur: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  termsOfUsePrivacyPolicy: {
    margin: Margin.m_sm,
  },
  byContinuingYouContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  byContinuingYouContainer: {
    height: "4.69%",
    top: "89.2%",
    left: 127,
    fontSize: FontSize.size_3xs,
    lineHeight: 11,
  },
  noMoreFines: {
    height: "4.11%",
    top: "74.88%",
    left: 128,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
  },
  homeIndicator: {
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
    borderRadius: Border.br_2xl,
  },
  homeindicator: {
    height: "2.46%",
    top: "97.54%",
    right: 9,
    left: 10,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iphone14Pro2Item: {
    height: "6.46%",
    top: "66.67%",
    bottom: "26.88%",
    maxHeight: "100%",
    width: 58,
  },
  iconCheckCircle: {
    width: 31,
    height: 31,
  },
  frameChild: {
    borderRadius: Border.br_lg,
    width: 1,
    height: 31,
  },
  get15Scans: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.midnightblue_200,
    lineHeight: 11,
  },
  iconCheckCircleParent: {
    paddingLeft: Padding.p_lg,
    paddingRight: Padding.p_2xs,
    flexDirection: "row",
  },
  iphone14Pro2Inner: {
    top: "51.53%",
    bottom: "41.2%",
  },
  frameItem: {
    width: 32,
    height: 32,
  },
  frameView: {
    top: "39.32%",
    right: 31,
    bottom: "53.4%",
    left: 86,
  },
  envoIcon: {
    width: 33,
    height: 25,
  },
  iphone14Pro2Inner1: {
    top: "29.23%",
    bottom: "63.5%",
  },
  iphone14Pro2Inner2: {
    top: "17.49%",
    right: 30,
    bottom: "75.23%",
    left: 87,
  },
  iphone14Pro2Inner3: {
    marginTop: -280,
    right: 121,
    left: 168,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iphone14Pro2: {
    height: 870,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.black,
  },
});

export default IPhone14Pro2;
