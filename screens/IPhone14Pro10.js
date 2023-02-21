import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  StatusBar,
} from "react-native";
import {
  Margin,
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const IPhone14Pro10 = () => {
  return (
    <View style={styles.iphone14Pro10}>
      <View style={[styles.homeindicator, styles.homeindicatorFlexBox]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.iphone14Pro10Inner}>
        <View style={styles.rectangleParent}>
          <Pressable style={styles.groupChild} />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
      </View>
      <View style={[styles.iphone14Pro10Child, styles.groupItemShadowBox]} />
      <View style={styles.headerpriceParent}>
        <View style={styles.headerprice}>
          <View style={styles.header}>
            <Text style={[styles.pro, styles.proFlexBox]}>Pro</Text>
            <Text
              style={[styles.upgradeYourPlan, styles.mt8, styles.perYearTypo]}
            >
              Upgrade your plan
            </Text>
          </View>
        </View>
        <View style={[styles.headerprice, styles.mt10]}>
          <Text style={[styles.sek, styles.proFlexBox]}>59SEK</Text>
        </View>
      </View>
      <Text style={[styles.perYear, styles.perYearLayout, styles.perYearTypo]}>
        per year
      </Text>
      <Pressable style={[styles.framePressable, styles.homeindicatorFlexBox]}>
        <View style={styles.groupLayout}>
          <Pressable
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupItemShadowBox,
              styles.groupItemPosition,
            ]}
          />
          <Text style={[styles.startSubscription, styles.perYearLayout]}>
            Start subscription
          </Text>
        </View>
      </Pressable>
      <View style={[styles.iconCheckCircleWrapper, styles.iconPosition]}>
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle7.png")}
        />
      </View>
      <View style={[styles.iconCheckCircleContainer, styles.iconPosition]}>
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle8.png")}
        />
      </View>
      <View style={[styles.iconCheckCircleFrame, styles.iconPosition]}>
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle9.png")}
        />
      </View>
      <Text style={[styles.unlimitedScanning, styles.cancelAnytimeTypo]}>
        Unlimited scanning
      </Text>
      <Text style={[styles.customerSupportPriority, styles.cancelAnytimeTypo]}>
        Customer support priority
      </Text>
      <Text style={[styles.cancelAnytime, styles.cancelAnytimeTypo]}>
        Cancel anytime
      </Text>
      <View
        style={[
          styles.iphone14Pro10Item,
          styles.iphone14ChildLayout,
          styles.iphone14ChildPosition,
        ]}
      />
      <View style={[styles.lineView, styles.iphone14ChildLayout]} />
      <View
        style={[
          styles.iphone14Pro10Child1,
          styles.iphone14ChildLayout,
          styles.iphone14ChildPosition,
        ]}
      />
      <View
        style={[
          styles.iphone14Pro10Child2,
          styles.iphone14ChildLayout,
          styles.iphone14ChildPosition,
        ]}
      />
      <StatusBar style={styles.groupItemPosition} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_md,
  },
  mt10: {
    marginTop: 10,
  },
  homeindicatorFlexBox: {
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
  },
  groupItemShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
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
    position: "absolute",
  },
  proFlexBox: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    alignSelf: "stretch",
    flex: 1,
  },
  perYearTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  perYearLayout: {
    lineHeight: 30,
    position: "absolute",
  },
  groupLayout: {
    height: 56,
    width: 263,
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  iconPosition: {
    left: "11.96%",
    right: "79.4%",
    width: "8.64%",
    height: "3.98%",
    position: "absolute",
  },
  cancelAnytimeTypo: {
    width: 221,
    color: Color.black,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 32,
    left: 97,
    height: "3.76%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  iphone14ChildLayout: {
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    width: "77.6%",
    height: "0.12%",
    borderStyle: "solid",
    position: "absolute",
  },
  iphone14ChildPosition: {
    left: "12.11%",
    right: "10.29%",
    borderColor: "#e9e9e9",
    width: "77.6%",
    height: "0.12%",
  },
  homeIndicator: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.44%",
    width: "97.4%",
    top: "97.56%",
    right: "1.04%",
    bottom: "0%",
    left: "1.56%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    shadowColor: "rgba(186, 175, 175, 0.5)",
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
    backgroundColor: Color.labelColorDarkPrimary,
    left: 0,
    top: 0,
    height: 40,
    width: 40,
    position: "absolute",
  },
  vectorIcon: {
    height: "45%",
    width: "27.5%",
    top: "27.5%",
    right: "40%",
    bottom: "27.5%",
    left: "32.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    height: 40,
    width: 40,
  },
  iphone14Pro10Inner: {
    height: "4.69%",
    width: "10.18%",
    top: "6.46%",
    right: "84.22%",
    bottom: "88.85%",
    left: "5.6%",
    flexDirection: "row",
    position: "absolute",
  },
  iphone14Pro10Child: {
    height: "49.65%",
    width: "91.6%",
    top: "18.19%",
    right: "3.82%",
    bottom: "32.16%",
    left: "4.58%",
    borderRadius: Border.br_md,
    backgroundColor: Color.labelColorDarkPrimary,
    shadowColor: "rgba(0, 0, 0, 0.07)",
  },
  pro: {
    fontSize: FontSize.size_2xl,
    lineHeight: 40,
    color: Color.gray_100,
  },
  upgradeYourPlan: {
    lineHeight: 26,
    alignSelf: "stretch",
  },
  header: {
    height: 74,
    alignSelf: "stretch",
  },
  headerprice: {
    alignSelf: "stretch",
    flex: 1,
  },
  sek: {
    fontSize: FontSize.size_4xl,
    color: Color.midnightblue_100,
  },
  headerpriceParent: {
    height: "17.98%",
    top: "20.65%",
    right: "7.63%",
    bottom: "61.37%",
    left: "8.91%",
    width: "83.46%",
    position: "absolute",
  },
  perYear: {
    height: "4.21%",
    top: "38.86%",
    left: "9.38%",
    width: "83.46%",
  },
  groupItem: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.mediumorchid,
  },
  startSubscription: {
    top: 14,
    right: 8,
    fontSize: FontSize.size_xl,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    width: 250,
    height: 26,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 30,
  },
  framePressable: {
    height: "6.57%",
    top: "72.65%",
    right: 51,
    bottom: "20.77%",
    left: 68,
    justifyContent: "flex-end",
  },
  iconCheckCircle: {
    width: 34,
    height: 34,
  },
  iconCheckCircleWrapper: {
    top: "46.01%",
    bottom: "50.01%",
  },
  iconCheckCircleContainer: {
    top: "52.58%",
    bottom: "43.43%",
    justifyContent: "center",
  },
  iconCheckCircleFrame: {
    top: "59.27%",
    bottom: "36.74%",
    justifyContent: "flex-end",
  },
  unlimitedScanning: {
    top: "46.24%",
  },
  customerSupportPriority: {
    top: "52.7%",
  },
  cancelAnytime: {
    top: "59.74%",
  },
  iphone14Pro10Item: {
    top: "50.64%",
    bottom: "49.25%",
  },
  lineView: {
    top: "44.26%",
    right: "10.03%",
    bottom: "55.63%",
    left: "12.37%",
    borderColor: "#e9e9e9",
    width: "77.6%",
    height: "0.12%",
  },
  iphone14Pro10Child1: {
    top: "57.25%",
    bottom: "42.63%",
  },
  iphone14Pro10Child2: {
    top: "63.98%",
    bottom: "35.9%",
  },
  iphone14Pro10: {
    backgroundColor: Color.whitesmoke_100,
    width: "100%",
    height: 862,
    overflow: "hidden",
    flex: 1,
  },
});

export default IPhone14Pro10;
