import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const IPhone14Pro5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro5}>
      <Image
        style={[styles.iphone14Pro5Child, styles.iphone14ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.iphone14Pro5Item, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-54.png")}
      />
      <View style={styles.nextButtonWrapper}>
        <View style={styles.nextButton}>
          <View style={styles.nextButtonChild} />
          <Pressable
            style={styles.nextButtonItem}
            onPress={() => navigation.navigate("IPhone14Pro7")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector18.png")}
          />
          <Text style={[styles.next, styles.textFlexBox1, styles.nextTypo]}>
            Next
          </Text>
        </View>
      </View>
      <View style={[styles.iphone14Pro5Inner, styles.iphone14ChildLayout1]} />
      <View style={[styles.rectangleView, styles.iphone14ChildLayout1]} />
      <View style={[styles.iphone14Pro5Child1, styles.iphone14ChildLayout1]} />
      <View style={[styles.iphone14Pro5Child2, styles.iphone14ChildLayout1]} />
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.fitTheWhole, styles.nextTypo]}>
          Fit the whole sign in the picture frame
        </Text>
      </View>
      <View style={[styles.homeindicator, styles.textFlexBox1]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.iconBolt, styles.iconPosition]}>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector19.png")}
        />
      </View>
      <View style={[styles.iconUserUnfollowWrapper, styles.iconPosition]}>
        <Image
          style={styles.iconUserUnfollow}
          resizeMode="cover"
          source={require("../assets/-icon-user-unfollow.png")}
        />
      </View>
      <View style={styles.iconSnowflake}>
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector20.png")}
        />
      </View>
      <View style={styles.iconCameraWrapper}>
        <Image
          style={styles.iconCamera}
          resizeMode="cover"
          source={require("../assets/-icon-camera.png")}
        />
      </View>
      <Image
        style={[styles.ellipseIcon, styles.iphone14ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.iphone14Pro5Child3, styles.iphone14ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Image
        style={[styles.iphone14Pro5Child4, styles.iphone14ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.iphone14Pro5Child5, styles.iphone14ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <StatusBar barStyle="default" />
      <View style={styles.text1}>
        <Text style={styles.someThingsBefore}>
          Some things before you start...
        </Text>
      </View>
      <View style={[styles.text2, styles.textFlexBox1]} />
      <View
        style={[
          styles.removeAnythingThatsCoverinWrapper,
          styles.wrapperFlexBox,
        ]}
      >
        <Text style={[styles.fitTheWhole, styles.nextTypo]}>
          Remove anything that’s covering the sign
        </Text>
      </View>
      <View style={[styles.text3, styles.textFlexBox]}>
        <Text style={[styles.fitTheWhole, styles.nextTypo]}>
          Stand still while scanning the park-sign
        </Text>
      </View>
      <View style={[styles.text4, styles.textFlexBox1]} />
      <View
        style={[styles.useTheFlashWhenScanningInWrapper, styles.wrapperFlexBox]}
      >
        <Text style={[styles.fitTheWhole, styles.nextTypo]}>
          Use the flash when scanning in the dark
        </Text>
      </View>
      <Image
        style={[styles.iphone14Pro5Child6, styles.iphone14ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iphone14ChildPosition]}
        resizeMode="cover"
        source={require("../assets/frame-98.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone14ChildPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox1: {
    alignItems: "center",
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  iphone14ChildLayout1: {
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    borderStyle: "solid",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_sm,
    left: "8.7%",
    width: "81.59%",
    height: "7.24%",
    right: "9.72%",
    position: "absolute",
  },
  textFlexBox: {
    left: "21.48%",
    height: "2.1%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconPosition: {
    left: "13.81%",
    position: "absolute",
  },
  iphone14ChildLayout: {
    width: 12,
    height: "2.34%",
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: Padding.p_sm,
    height: "4.32%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iphone14Pro5Child: {
    height: "4.44%",
    marginLeft: -111.5,
    top: "31.07%",
    bottom: "64.49%",
    width: 193,
  },
  iphone14Pro5Item: {
    height: "85.63%",
    width: "246.04%",
    top: "34%",
    right: "-146.04%",
    bottom: "-19.63%",
    left: "0%",
  },
  nextButtonChild: {
    height: "84.06%",
    top: "0%",
    right: 22,
    bottom: "15.94%",
    left: 23,
    borderRadius: 80,
    backgroundColor: Color.midnightblue_100,
    position: "absolute",
  },
  nextButtonItem: {
    marginTop: -20.42,
    right: 37,
    left: 160,
    borderRadius: 46,
    backgroundColor: "#f5f5f6",
    height: 30,
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    height: "15.94%",
    width: "2.61%",
    top: "34.78%",
    right: "25.75%",
    bottom: "49.28%",
    left: "71.64%",
  },
  next: {
    marginTop: -12.5,
    left: 21,
    fontSize: 15,
    letterSpacing: 0,
    lineHeight: 18,
    color: Color.labelColorDarkPrimary,
    display: "flex",
    width: 139,
    height: 14,
    textAlign: "center",
    top: "50%",
    justifyContent: "center",
  },
  nextButton: {
    width: 268,
    height: 69,
  },
  nextButtonWrapper: {
    height: "8.06%",
    top: "87.73%",
    right: "16.88%",
    bottom: "4.21%",
    left: "15.86%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    width: "67.26%",
    position: "absolute",
  },
  iphone14Pro5Inner: {
    top: "51.05%",
    bottom: "41.71%",
  },
  rectangleView: {
    top: "59.35%",
    bottom: "33.41%",
  },
  iphone14Pro5Child1: {
    top: "68.11%",
    bottom: "24.65%",
  },
  iphone14Pro5Child2: {
    top: "76.52%",
    bottom: "16.24%",
  },
  fitTheWhole: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    color: Color.gray_200,
    textAlign: "left",
    flex: 1,
  },
  text: {
    width: "62.92%",
    top: "53.86%",
    right: "15.6%",
    bottom: "44.04%",
  },
  homeIndicator: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "3.97%",
    width: "95.14%",
    top: "95.09%",
    right: "3.07%",
    bottom: "0.93%",
    left: "1.79%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
  },
  vectorIcon1: {
    width: 17,
    height: 20,
  },
  iconBolt: {
    width: "4.35%",
    top: "78.97%",
    bottom: "18.69%",
    right: "81.84%",
    height: "2.34%",
  },
  iconUserUnfollow: {
    width: 21,
    height: 25,
  },
  iconUserUnfollowWrapper: {
    height: "1.64%",
    width: "3.84%",
    top: "71.03%",
    right: "82.35%",
    bottom: "27.34%",
    justifyContent: "center",
  },
  vectorIcon2: {
    width: 20,
    height: 20,
  },
  iconSnowflake: {
    height: "1.75%",
    width: "5.63%",
    top: "61.8%",
    right: "81.07%",
    bottom: "36.45%",
    left: "13.3%",
    justifyContent: "center",
    position: "absolute",
  },
  iconCamera: {
    height: 18,
    width: 20,
  },
  iconCameraWrapper: {
    width: "5.12%",
    top: "53.62%",
    bottom: "44.28%",
    left: "13.04%",
    right: "81.84%",
    height: "2.1%",
    justifyContent: "center",
    position: "absolute",
  },
  ellipseIcon: {
    marginLeft: -72.6,
    top: "7.18%",
    bottom: "90.48%",
  },
  iphone14Pro5Child3: {
    marginLeft: 164.45,
    top: "23.68%",
    bottom: "73.97%",
    width: 16,
    height: "2.34%",
  },
  iphone14Pro5Child4: {
    marginLeft: 117.27,
    top: "8.82%",
    bottom: "88.84%",
  },
  iphone14Pro5Child5: {
    marginLeft: -158.03,
    top: "15.76%",
    bottom: "81.89%",
  },
  someThingsBefore: {
    fontSize: FontSize.size_2xl,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.darkslategray_200,
    height: 76,
    textAlign: "center",
    flex: 1,
  },
  text1: {
    height: "8.88%",
    width: "80.56%",
    top: "38.43%",
    bottom: "52.69%",
    left: "9.72%",
    right: "9.72%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text2: {
    marginTop: 107,
    right: 63,
    left: 85,
    height: 18,
    top: "50%",
    justifyContent: "center",
  },
  removeAnythingThatsCoverinWrapper: {
    width: "69.57%",
    top: "60.86%",
    right: "11.51%",
    bottom: "34.81%",
    left: "18.93%",
  },
  text3: {
    width: "64.71%",
    top: "71.14%",
    right: "13.81%",
    bottom: "26.75%",
  },
  text4: {
    marginTop: 254,
    right: 68,
    left: 88,
    height: 18,
    top: "50%",
    justifyContent: "center",
  },
  useTheFlashWhenScanningInWrapper: {
    top: "77.92%",
    right: "14.07%",
    bottom: "17.76%",
    left: "18.67%",
    width: "67.26%",
    height: "4.32%",
  },
  iphone14Pro5Child6: {
    height: "2%",
    marginLeft: -168.83,
    top: "30.49%",
    bottom: "67.51%",
    width: 18,
  },
  frameIcon: {
    height: "22.55%",
    marginLeft: -73.58,
    top: "11.21%",
    bottom: "66.24%",
    width: 142,
  },
  iphone14Pro5: {
    backgroundColor: Color.labelColorDarkPrimary,
    width: "100%",
    height: 856,
    overflow: "hidden",
    flex: 1,
  },
});

export default IPhone14Pro5;
