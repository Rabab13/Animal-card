import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const IPhone14Pro13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro13}>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <TouchableOpacity
        style={[
          styles.iphone14Pro13Child,
          styles.iphone14Border,
          styles.iphone14ShadowBox,
        ]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro14")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <View
        style={[
          styles.iphone14Pro13Item,
          styles.iphone14Border,
          styles.iphone14ShadowBox,
        ]}
      />
      <View style={styles.headerpriceParent}>
        <View style={[styles.headerprice, styles.pricePosition]}>
          <View style={styles.header}>
            <Text style={[styles.pro, styles.proTypo]}>Pro</Text>
            <Text
              style={[styles.upgradeYourPlan, styles.mt8, styles.perYearTypo]}
            >
              Upgrade your plan
            </Text>
          </View>
        </View>
        <View style={[styles.price, styles.pricePosition]}>
          <Text style={[styles.sek, styles.proTypo]}>59SEK</Text>
          <Text style={[styles.perYear, styles.perYearTypo]}>per year</Text>
        </View>
      </View>
      <View
        style={[
          styles.iconCheckCircleWrapper,
          styles.iconFlexBox,
          styles.iconPosition,
        ]}
      >
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle2.png")}
        />
      </View>
      <View
        style={[
          styles.iconCheckCircleContainer,
          styles.iconFlexBox,
          styles.iconPosition,
        ]}
      >
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle3.png")}
        />
      </View>
      <View
        style={[
          styles.iconCheckCircleFrame,
          styles.iconFlexBox,
          styles.iconPosition,
        ]}
      >
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle4.png")}
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
          styles.iphone14Pro13Inner,
          styles.iphone14ChildBorder,
          styles.iphone14Position,
        ]}
      />
      <View style={[styles.lineView, styles.iphone14ChildBorder]} />
      <View
        style={[
          styles.iphone14Pro13Child1,
          styles.iphone14ChildBorder,
          styles.iphone14Position,
        ]}
      />
      <View style={[styles.iphone14Pro13Child2, styles.iphone14ChildBorder]} />
      <Pressable
        style={[
          styles.applePayButton,
          styles.iconFlexBox,
          styles.iphone14Border,
        ]}
      >
        <Text style={[styles.payWith, styles.payFlexBox]}>Pay with</Text>
        <Text style={[styles.pay, styles.ml3, styles.payFlexBox]}>Pay</Text>
      </Pressable>
      <StatusBar style={styles.vectorIconPosition} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_md,
  },
  ml3: {
    marginLeft: 3,
  },
  iphone14Border: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  iphone14ShadowBox: {
    borderColor: "#ddd",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  vectorIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  pricePosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  proTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  perYearTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignSelf: "stretch",
  },
  iconFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconPosition: {
    right: "79.4%",
    width: "8.64%",
    height: "3.98%",
    flexDirection: "row",
    left: "11.96%",
  },
  cancelAnytimeTypo: {
    color: Color.black,
    fontFamily: FontFamily.dMSansMedium,
    lineHeight: 32,
    left: "24.68%",
    width: "58.52%",
    height: "3.76%",
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  iphone14ChildBorder: {
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    position: "absolute",
  },
  iphone14Position: {
    left: "11.83%",
    right: "12.34%",
    borderColor: "#e9e9e9",
    width: "75.83%",
    height: "0.13%",
  },
  payFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  homeIndicator: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.46%",
    width: "95.17%",
    top: "97.18%",
    right: "2.54%",
    bottom: "0.35%",
    left: "2.29%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    position: "absolute",
  },
  iphone14Pro13Child: {
    height: "4.69%",
    width: "10.18%",
    top: "6.46%",
    right: "84.22%",
    bottom: "88.85%",
    left: "5.6%",
    borderRadius: Border.br_2xs,
    shadowColor: "rgba(186, 175, 175, 0.5)",
  },
  vectorIcon: {
    height: "2.11%",
    width: "2.8%",
    top: "7.75%",
    right: "88.3%",
    bottom: "90.14%",
    left: "8.91%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iphone14Pro13Item: {
    height: "49.65%",
    width: "91.6%",
    top: "18.19%",
    right: "3.82%",
    bottom: "32.16%",
    left: "4.58%",
    borderRadius: Border.br_md,
    shadowColor: "rgba(0, 0, 0, 0.07)",
  },
  pro: {
    fontSize: FontSize.size_2xl,
    lineHeight: 40,
    color: Color.gray_100,
  },
  upgradeYourPlan: {
    lineHeight: 26,
  },
  header: {
    alignSelf: "stretch",
  },
  headerprice: {
    height: "40.86%",
    top: "0%",
    bottom: "59.14%",
  },
  sek: {
    fontSize: FontSize.size_4xl,
    color: Color.midnightblue_100,
  },
  perYear: {
    lineHeight: 30,
  },
  price: {
    height: "55.96%",
    top: "44.04%",
    bottom: "0%",
  },
  headerpriceParent: {
    height: "21.26%",
    width: "89.06%",
    top: "20.89%",
    right: "-1.02%",
    bottom: "57.85%",
    left: "11.96%",
    position: "absolute",
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
  },
  iconCheckCircleFrame: {
    top: "59.27%",
    bottom: "36.74%",
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
  iphone14Pro13Inner: {
    top: "58.43%",
    bottom: "41.43%",
  },
  lineView: {
    top: "51.07%",
    right: "12.09%",
    bottom: "48.8%",
    left: "12.09%",
    width: "75.83%",
    height: "0.13%",
    borderColor: "#e9e9e9",
  },
  iphone14Pro13Child1: {
    top: "66.06%",
    bottom: "33.8%",
  },
  iphone14Pro13Child2: {
    top: 552,
    left: 47,
    width: 298,
    height: 1,
  },
  payWith: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 28,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  pay: {
    fontSize: 23,
    letterSpacing: -1,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 59,
    height: 28,
  },
  applePayButton: {
    height: "6%",
    width: "91.86%",
    top: "71.29%",
    right: "2.93%",
    bottom: "22.7%",
    left: "5.22%",
    borderRadius: 8,
    borderColor: "#ebebeb",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
    paddingVertical: Padding.p_xs,
  },
  iphone14Pro13: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 747,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone14Pro13;
