import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Margin,
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const IPhone14Pro4 = () => {
  return (
    <View style={styles.iphone14Pro4}>
      <Image
        style={[
          styles.unsplashp5a9mj4vlsIcon,
          styles.statusbarIphone13Position,
        ]}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls1.png")}
      />
      <View
        style={[styles.statusbarIphone13, styles.statusbarIphone13Position]}
      >
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
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.sideIconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <LinearGradient
        style={[styles.iphone14Pro4Child, styles.statusbarIphone13Position]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#60219f"]}
      />
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
      <View style={[styles.homeindicator, styles.homeindicatorFlexBox]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={[styles.iphone14Pro4Item, styles.statusbarTimePosition]}
        resizeMode="cover"
        source={require("../assets/group-461.png")}
      />
      <View
        style={[
          styles.iphone14Pro4Inner,
          styles.iphone14InnerShadowBox,
          styles.iphone14InnerShadowBox1,
        ]}
      >
        <View style={[styles.iconCheckCircleParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconCheckCircle}
            resizeMode="cover"
            source={require("../assets/-icon-check-circle5.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-94.png")}
          />
          <Text style={[styles.get15Scans, styles.ml13, styles.parentFlexBox]}>
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
        <View style={[styles.iconCheckCircleParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-591.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-95.png")}
          />
          <Text style={[styles.get15Scans, styles.ml13, styles.parentFlexBox]}>
            You need a parking disc
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.iphone14Pro4Inner1,
          styles.iphone14InnerShadowBox,
          styles.iphone14InnerShadowBox1,
        ]}
      >
        <View style={[styles.iconCheckCircleParent, styles.parentFlexBox]}>
          <Image
            style={styles.envoIcon}
            resizeMode="cover"
            source={require("../assets/envo1.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-96.png")}
          />
          <Text style={[styles.get15Scans, styles.ml13, styles.parentFlexBox]}>
            You don’t need to pay
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.iphone14Pro4Inner2,
          styles.iphone14InnerShadowBox,
          styles.frameViewShadowBox,
        ]}
      >
        <View style={[styles.iconCheckCircleParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconCheckCircle}
            resizeMode="cover"
            source={require("../assets/-icon-check-circle6.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-97.png")}
          />
          <Text style={[styles.get15Scans, styles.ml13, styles.parentFlexBox]}>
            You can park until 11:41
          </Text>
        </View>
      </View>
      <View style={[styles.iphone14Pro4Inner3, styles.homeindicatorFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
      </View>
      <Pressable style={styles.logGoogle}>
        <View style={[styles.googleParent, styles.parentFlexBox]}>
          <Image
            style={styles.googleIcon}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
          <Text
            style={[styles.continueWithGoogle, styles.ml9, styles.textTypo]}
          >
            Continue with Google
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_lg,
  },
  ml9: {
    marginLeft: 9,
  },
  statusbarIphone13Position: {
    left: 0,
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
  textTypo: {
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.defaultBoldBody1_size,
  },
  noMoreFinesFlexBox: {
    width: 132,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  noMoreFinesTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  homeindicatorFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  iphone14InnerShadowBox: {
    paddingVertical: Padding.p_lg,
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
    position: "absolute",
  },
  iphone14InnerShadowBox1: {
    left: 37,
    right: 80,
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
  },
  parentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameViewShadowBox: {
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
  },
  unsplashp5a9mj4vlsIcon: {
    marginTop: -423,
    right: -65,
    maxWidth: "100%",
    height: 861,
    top: "50%",
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
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody1,
    height: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
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
    width: 390,
    height: 47,
    top: 0,
    overflow: "hidden",
  },
  iphone14Pro4Child: {
    height: "50.59%",
    top: "49.41%",
    right: -3,
    backgroundColor: "transparent",
    bottom: "0%",
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
    width: 132,
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
    borderRadius: Border.br_2xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.46%",
    top: "97.54%",
    right: 9,
    left: 10,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    bottom: "0%",
  },
  iphone14Pro4Item: {
    height: "6.5%",
    top: "66.64%",
    bottom: "26.86%",
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
    textAlign: "left",
    display: "flex",
    alignSelf: "stretch",
    lineHeight: 11,
    letterSpacing: 0,
  },
  iconCheckCircleParent: {
    paddingLeft: Padding.p_lg,
    paddingRight: Padding.p_2xs,
    flexDirection: "row",
  },
  iphone14Pro4Inner: {
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
  iphone14Pro4Inner1: {
    top: "29.23%",
    bottom: "63.5%",
  },
  iphone14Pro4Inner2: {
    top: "17.49%",
    right: 30,
    bottom: "75.23%",
    left: 87,
  },
  iphone14Pro4Inner3: {
    marginTop: -280,
    right: 121,
    left: 168,
    height: 34,
    flexDirection: "row",
    justifyContent: "center",
    top: "50%",
  },
  googleIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  continueWithGoogle: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.defaultBoldBody1_size,
  },
  googleParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logGoogle: {
    height: "5.9%",
    top: "82.43%",
    right: 49,
    bottom: "11.67%",
    left: 54,
    backgroundColor: "#f85531",
    paddingHorizontal: 25,
    paddingVertical: Padding.p_sm,
    alignItems: "flex-end",
    borderRadius: Border.br_xl,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  iphone14Pro4: {
    backgroundColor: Color.black,
    height: 846,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default IPhone14Pro4;
