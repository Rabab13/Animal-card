import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  StatusBar,
} from "react-native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from "../GlobalStyles";

const IPhone14Pro9 = () => {
  return (
    <View style={styles.iphone14Pro9}>
      <Image
        style={styles.parkeringskylt1Icon}
        resizeMode="cover"
        source={require("../assets/parkeringskylt-11.png")}
      />
      <View style={[styles.iphone14Pro9Child, styles.homeindicator1FlexBox]} />
      <Image
        style={[
          styles.iphone14Pro9Item,
          styles.iphone14Layout,
          styles.iphone14Layout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={[
          styles.iphone14Pro9Inner,
          styles.iphone14Layout,
          styles.iphone14Layout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={styles.payWith}>PAY WITH</Text>
      <Image
        style={[styles.clipPathGroup, styles.clipGroupPosition]}
        resizeMode="cover"
        source={require("../assets/clip-path-group.png")}
      />
      <Image
        style={[styles.clipPathGroup1, styles.clipGroupPosition]}
        resizeMode="cover"
        source={require("../assets/clip-path-group1.png")}
      />
      <Image
        style={[styles.parkster1Icon, styles.iphone14Layout]}
        resizeMode="cover"
        source={require("../assets/parkster-1.png")}
      />
      <Text style={[styles.parkster, styles.parksterPosition]}>
        <Text style={styles.blankLine}>
          <Text style={[styles.blankLine1, styles.payWith1Typo]}> </Text>
        </Text>
        <Text style={styles.parkster1}>
          <Text style={styles.parkster2}>Parkster</Text>
        </Text>
      </Text>
      <Text
        style={[styles.payWith1, styles.parksterPosition, styles.payWith1Typo]}
      >
        PAY WITH
      </Text>
      <View style={styles.d829f32f427a85423734a4f4611bc1} />
      <View
        style={[
          styles.rectangleView,
          styles.iphone14ChildShadowBox1,
          styles.rectangleViewShadowBox,
        ]}
      />
      <View
        style={[
          styles.iphone14Pro9Child1,
          styles.iphone14ChildShadowBox1,
          styles.iphone14ChildShadowBox2,
        ]}
      />
      <View
        style={[
          styles.iphone14Pro9Child2,
          styles.iphone14ChildShadowBox1,
          styles.rectangleViewShadowBox,
        ]}
      />
      <View
        style={[
          styles.iphone14Pro9Child3,
          styles.iphone14ChildShadowBox1,
          styles.iphone14ChildShadowBox2,
        ]}
      />
      <View style={[styles.iconCheckCircleWrapper, styles.iconWrapperFlexBox]}>
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle10.png")}
        />
      </View>
      <Image
        style={[
          styles.vectorIcon,
          styles.iphone14ChildLayout,
          styles.iphone14ChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/vector-32.png")}
      />
      <Text style={styles.youCanPark}>You can park until 19:00</Text>
      <Image
        style={[
          styles.iphone14Pro9Child4,
          styles.iphone14ChildLayout,
          styles.iphone14ChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/vector-32.png")}
      />
      <Image
        style={[
          styles.iphone14Pro9Child5,
          styles.iphone14ChildLayout,
          styles.iphone14ChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/vector-32.png")}
      />
      <Image
        style={styles.iphone14Pro9Child6}
        resizeMode="cover"
        source={require("../assets/vector-12.png")}
      />
      <Image
        style={[styles.iphone14Pro9Child7, styles.iphone14ChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector-32.png")}
      />
      <Text style={[styles.youNeedTo, styles.youTypo]}>
        You need to pay a fee
      </Text>
      <Text style={[styles.youDontNeed, styles.youTypo]}>
        You don’t need a p-disc
      </Text>
      <Text style={styles.parkToThe}>Park to the right of the sign</Text>
      <Pressable style={styles.rectanglePressable} />
      <Text style={[styles.others, styles.othersTypo]}>OTHERS</Text>
      <Pressable
        style={[styles.iphone14Pro9Child8, styles.iphone14ChildShadowBox]}
      />
      <Text style={[styles.residents, styles.othersTypo, styles.electricClr]}>
        RESIDENTS
      </Text>
      <Pressable
        style={[styles.iphone14Pro9Child9, styles.iphone14ChildShadowBox]}
      />
      <Text style={[styles.electric, styles.othersTypo, styles.electricClr]}>
        ELECTRIC
      </Text>
      <View style={[styles.iconCreditCardWrapper, styles.frameViewPosition]}>
        <Image
          style={styles.iconCreditCard}
          resizeMode="cover"
          source={require("../assets/-icon-credit-card.png")}
        />
      </View>
      <View style={[styles.iconLocationPinWrapper, styles.iconWrapperFlexBox]}>
        <Image
          style={styles.iconLocationPin}
          resizeMode="cover"
          source={require("../assets/-icon-location-pin.png")}
        />
      </View>
      <View
        style={[
          styles.frameView,
          styles.frameViewPosition,
          styles.iconWrapperFlexBox,
        ]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-63.png")}
        />
      </View>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.homeLayout]} />
      </View>
      <View style={[styles.homeindicator1, styles.homeindicator1FlexBox]}>
        <View style={[styles.homeIndicator1, styles.homeLayout]} />
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  homeindicator1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  iphone14Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone14Layout1: {
    borderRadius: Border.br_xs,
    bottom: "3.05%",
    top: "89.91%",
    width: "40.96%",
    height: "7.05%",
    maxWidth: "100%",
  },
  clipGroupPosition: {
    bottom: "5.51%",
    top: "92.39%",
    height: "2.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parksterPosition: {
    left: "62.25%",
    top: "90.85%",
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  payWith1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iphone14ChildShadowBox1: {
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_sm,
    height: "7.86%",
    position: "absolute",
  },
  rectangleViewShadowBox: {
    left: 36,
    right: 38,
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_sm,
    height: "7.86%",
  },
  iphone14ChildShadowBox2: {
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_sm,
    height: "7.86%",
  },
  iconWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iphone14ChildLayout: {
    width: 1,
    borderRadius: Border.br_lg,
    height: 34,
    position: "absolute",
  },
  iphone14ChildPosition: {
    left: 99,
    width: 1,
  },
  youTypo: {
    width: 219,
    height: "4.23%",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 11,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: 116,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  othersTypo: {
    textAlign: "center",
    top: "79.34%",
    justifyContent: "center",
    lineHeight: 19,
    height: "4.23%",
    display: "flex",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    alignItems: "center",
    position: "absolute",
  },
  iphone14ChildShadowBox: {
    width: "24.05%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  electricClr: {
    color: Color.black,
    top: "79.34%",
  },
  frameViewPosition: {
    left: 53,
    position: "absolute",
  },
  homeLayout: {
    backgroundColor: Color.lightgray,
    borderRadius: Border.br_2xl,
    height: 5,
  },
  parkeringskylt1Icon: {
    top: 0,
    left: 0,
    width: 435,
    height: 903,
    position: "absolute",
  },
  iphone14Pro9Child: {
    height: "85.56%",
    width: "97.92%",
    top: "32.16%",
    right: "1.65%",
    bottom: "-17.73%",
    left: "0.43%",
    borderRadius: 20,
    backgroundColor: Color.whitesmoke_100,
    justifyContent: "flex-end",
  },
  iphone14Pro9Item: {
    right: "50.64%",
    left: "8.4%",
  },
  iphone14Pro9Inner: {
    right: "8.4%",
    left: "50.64%",
  },
  payWith: {
    height: "2%",
    width: "21.74%",
    top: "90.73%",
    left: "12.08%",
    color: "#56004d",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  clipPathGroup: {
    width: "15.24%",
    right: "71.76%",
    left: "13%",
  },
  clipPathGroup1: {
    width: "15.76%",
    right: "55.32%",
    left: "28.93%",
  },
  parkster1Icon: {
    height: "5.63%",
    width: "11.52%",
    top: "90.14%",
    right: "37.01%",
    bottom: "4.23%",
    left: "51.47%",
  },
  blankLine1: {
    fontSize: FontSize.size_xs,
  },
  blankLine: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  parkster2: {
    fontSize: 23,
    letterSpacing: -0.3,
    fontWeight: "800",
    fontFamily: FontFamily.georamaExtrabold,
  },
  parkster1: {
    margin: Margin.m_sm,
  },
  parkster: {
    width: "22.55%",
    color: Color.labelColorDarkPrimary,
    height: "3.99%",
  },
  payWith1: {
    height: "2.23%",
    width: "13.24%",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.size_2xs,
    left: "62.25%",
    top: "90.85%",
    fontWeight: "500",
  },
  d829f32f427a85423734a4f4611bc1: {
    top: 671,
    left: 333,
    width: 5,
    height: 5,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: "36.15%",
    bottom: "55.99%",
  },
  iphone14Pro9Child1: {
    width: "81.13%",
    top: "46.71%",
    right: "10.05%",
    bottom: "45.42%",
    left: "8.82%",
  },
  iphone14Pro9Child2: {
    top: "57.28%",
    bottom: "34.86%",
  },
  iphone14Pro9Child3: {
    top: "67.84%",
    right: 37,
    bottom: "24.3%",
    left: 37,
  },
  iconCheckCircle: {
    height: 34,
    width: 34,
  },
  iconCheckCircleWrapper: {
    height: "3.98%",
    top: "38.02%",
    bottom: "58%",
    left: 52,
    width: 34,
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    top: 325,
  },
  youCanPark: {
    height: "4.34%",
    top: "38.15%",
    width: 222,
    display: "flex",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 11,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: 116,
    color: Color.black,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  iphone14Pro9Child4: {
    top: 415,
  },
  iphone14Pro9Child5: {
    top: 505,
  },
  iphone14Pro9Child6: {
    top: 740,
    left: 35,
    width: 319,
    height: 2,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  iphone14Pro9Child7: {
    top: 595,
    left: 100,
  },
  youNeedTo: {
    top: "48.71%",
  },
  youDontNeed: {
    top: "59.27%",
  },
  parkToThe: {
    top: "69.84%",
    left: 117,
    lineHeight: 19,
    width: 219,
    height: "4.23%",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  rectanglePressable: {
    width: "23.99%",
    right: "66.83%",
    left: "9.18%",
    backgroundColor: Color.mediumorchid,
    borderColor: "#e8e8e8",
    bottom: "15.26%",
    top: "78.05%",
    height: "6.69%",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  others: {
    width: "16.67%",
    left: "12.23%",
    justifyContent: "center",
    color: Color.labelColorDarkPrimary,
  },
  iphone14Pro9Child8: {
    height: "6.67%",
    top: "77.78%",
    right: "37.95%",
    bottom: "15.56%",
    left: "38%",
  },
  residents: {
    width: "24.7%",
    left: "37.91%",
    justifyContent: "center",
  },
  iphone14Pro9Child9: {
    right: "9.38%",
    left: "66.57%",
    bottom: "15.26%",
    top: "78.05%",
    height: "6.69%",
    width: "24.05%",
  },
  electric: {
    width: "21.85%",
    left: "67.6%",
    justifyContent: "center",
  },
  iconCreditCard: {
    height: 27,
    width: 35,
  },
  iconCreditCardWrapper: {
    height: "3.14%",
    top: "49.37%",
    bottom: "47.49%",
    width: 35,
    justifyContent: "center",
  },
  iconLocationPin: {
    height: 72,
    width: 72,
  },
  iconLocationPinWrapper: {
    height: "8.42%",
    top: "57.2%",
    bottom: "34.38%",
    left: 34,
    width: 72,
    position: "absolute",
  },
  frameChild: {
    height: 36,
    width: 36,
  },
  frameView: {
    height: "4.28%",
    top: "69.83%",
    bottom: "25.89%",
    width: 36,
  },
  homeIndicator: {
    marginLeft: -67.43,
    bottom: 8,
    left: "50%",
    width: 134,
    position: "absolute",
  },
  homeindicator: {
    width: "97.68%",
    top: "96.01%",
    right: "0%",
    bottom: "0%",
    left: "2.32%",
    height: "3.99%",
    position: "absolute",
  },
  homeIndicator1: {
    width: 64,
  },
  homeindicator1: {
    height: "3.87%",
    width: "95.17%",
    top: "32.22%",
    right: "4.2%",
    bottom: "63.91%",
    left: "0.64%",
    paddingHorizontal: 155,
    paddingVertical: Padding.p_lg,
  },
  iphone14Pro9: {
    backgroundColor: "rgba(0, 0, 0, 0.98)",
    flex: 1,
    width: "100%",
    height: 847,
    overflow: "hidden",
  },
});

export default IPhone14Pro9;
