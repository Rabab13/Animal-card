import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
  Margin,
} from "../GlobalStyles";

const IPhone14Pro6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro6}>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.heyNiceTo, styles.settingsFlexBox, styles.proTypo]}>
        Hey, nice to see you!
      </Text>
      <Text style={[styles.settings, styles.settingsFlexBox, styles.proTypo]}>
        Settings
      </Text>
      <Pressable
        style={styles.buyProAccessWrapper}
        onPress={() => navigation.navigate("IPhone14Pro13")}
      >
        <Pressable onPress={() => navigation.navigate("IPhone14Pro13")}>
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.buy}>{`Buy `}</Text>
            <Text style={styles.proTypo}>PRO</Text>
            <Text style={styles.buy}> access</Text>
          </Text>
        </Pressable>
      </Pressable>
      <Text style={[styles.contact, styles.guideLayout]}>Contact</Text>
      <Text style={[styles.changeLanguage, styles.guideLayout]}>
        Change language
      </Text>
      <Text style={[styles.notifications, styles.guideLayout]}>
        Notifications
      </Text>
      <Text
        style={[styles.privacyTerms, styles.guideLayout]}
      >{`Privacy & Terms`}</Text>
      <Text style={[styles.logout, styles.guideLayout]}>Logout</Text>
      <Text style={[styles.guide, styles.guideLayout]}>Guide</Text>
      <Text
        style={[styles.deleteAccount, styles.parkscanTypo, styles.textTypo]}
      >
        Delete account
      </Text>
      <Text style={[styles.shareWithFriends, styles.guideLayout]}>
        Share with friends
      </Text>
      <Text style={[styles.giveUsA, styles.guideLayout]}>Give us a review</Text>
      <Text style={[styles.stopGettingThoseContainer, styles.settingsFlexBox]}>
        <Text style={styles.stopGettingThoseAnnoyingPa}>
          <Text style={styles.stopGettingThoseAnnoyingPa1}>
            <Text
              style={styles.parkscanTypo}
            >{`Stop getting those annoying parking tickets. `}</Text>
          </Text>
        </Text>
        <Text style={styles.readMore}>
          <Text style={styles.stopGettingThoseAnnoyingPa1}>
            <Text style={styles.proTypo}>
              <Text style={styles.read2}>Read</Text>
            </Text>
          </Text>
          <Text>
            <Text>{` `}</Text>
            <Text>more</Text>
          </Text>
        </Text>
      </Text>
      <View style={[styles.iphone14Pro6Child, styles.iphone14ChildPosition]} />
      <View style={styles.iphone14Pro6Item} />
      <View style={[styles.iphone14Pro6Inner, styles.iphone14Position]} />
      <View style={[styles.lineView, styles.iphone14Position]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <View style={[styles.iphone14Pro6Child1, styles.iphone14ChildPosition]} />
      <View style={[styles.iphone14Pro6Child2, styles.iphone14ChildPosition]} />
      <Image
        style={styles.iphone14Pro6Child3}
        resizeMode="cover"
        source={require("../assets/line-20.png")}
      />
      <Image
        style={[styles.iphone14Pro6Child4, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <View style={[styles.iphone14Pro6Child5, styles.iphone14Position]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Text style={[styles.version100, styles.parkscanPosition]}>
        Version: 1.0.0
      </Text>
      <View
        style={[
          styles.iconAccountLogoutWrapper,
          styles.iconWrapperPosition1,
          styles.iconWrapperLayout,
        ]}
      >
        <Image
          style={styles.iconAccountLogout}
          resizeMode="cover"
          source={require("../assets/-icon-account-logout.png")}
        />
      </View>
      <View
        style={[styles.iconPowerStandbyWrapper, styles.iconWrapperPosition1]}
      >
        <Image
          style={styles.iconPowerStandby}
          resizeMode="cover"
          source={require("../assets/-icon-power-standby.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.iconBellWrapper}>
          <Image
            style={styles.iconBell}
            resizeMode="cover"
            source={require("../assets/-icon-bell.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.iconLanguageWrapper,
          styles.iconWrapperPosition1,
          styles.iconWrapperLayout,
        ]}
      >
        <Image
          style={styles.iconLanguage}
          resizeMode="cover"
          source={require("../assets/-icon-language.png")}
        />
      </View>
      <View style={styles.iphone14Pro6Inner1}>
        <TouchableOpacity
          style={styles.vectorWrapper}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("IPhone14Pro7")}
        >
          <Pressable style={styles.vector} onPress={() => {}}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector12.png")}
            />
          </Pressable>
        </TouchableOpacity>
      </View>
      <Text
        style={[styles.parkscan, styles.parkscanPosition, styles.parkscanTypo]}
      >
        parkscan
      </Text>
      <View style={[styles.iconStarWrapper, styles.iconWrapperPosition]}>
        <View
          style={[styles.iconStar, styles.iconPosition, styles.iconLayout2]}
        >
          <Image
            style={[styles.vectorIcon10, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/vector13.png")}
          />
        </View>
      </View>
      <View style={[styles.iconShareAltWrapper, styles.iconWrapperPosition]}>
        <View style={[styles.iconLayout1, styles.iconPosition]}>
          <Image
            style={styles.vectorIcon11}
            resizeMode="cover"
            source={require("../assets/vector14.png")}
          />
        </View>
      </View>
      <View style={[styles.iphone14Pro6Inner2, styles.iconWrapperPosition]}>
        <View style={styles.iconLayout1}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/-icon-envelope-open.png")}
          />
        </View>
      </View>
      <View style={[styles.iconDescriptionWrapper, styles.frameViewPosition]}>
        <Image
          style={styles.iconDescription}
          resizeMode="cover"
          source={require("../assets/-icon-description.png")}
        />
      </View>
      <View style={[styles.iphone14Pro6Inner3, styles.frameViewPosition]}>
        <View style={styles.iconLayout}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/-icon-cart.png")}
          />
        </View>
      </View>
      <View style={[styles.iconListWrapper, styles.iconWrapperPosition]}>
        <Image
          style={styles.iconList}
          resizeMode="cover"
          source={require("../assets/-icon-list.png")}
        />
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  proTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 30,
  },
  guideLayout: {
    width: "63.77%",
    height: "3.74%",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    left: "20.05%",
    color: Color.black,
    textAlign: "left",
    lineHeight: 30,
    position: "absolute",
  },
  parkscanTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  iphone14ChildPosition: {
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    left: "4.32%",
    right: "5.8%",
    width: "89.89%",
    height: "0.12%",
    borderStyle: "solid",
    position: "absolute",
  },
  iphone14Position: {
    right: "5.55%",
    width: "90.13%",
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    left: "4.32%",
    height: "0.12%",
    position: "absolute",
  },
  lineIconLayout: {
    maxHeight: "100%",
    height: "0.24%",
    maxWidth: "100%",
    left: "4.44%",
    right: "5.68%",
    width: "89.88%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "91.86%",
    right: "5.63%",
    width: "2.51%",
    height: "1.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parkscanPosition: {
    left: "4.58%",
    textAlign: "left",
    position: "absolute",
  },
  iconWrapperPosition1: {
    left: "6.11%",
    position: "absolute",
  },
  iconWrapperLayout: {
    height: "2.7%",
    left: "6.11%",
  },
  frameViewPosition: {
    left: "5.85%",
    position: "absolute",
  },
  iconWrapperPosition: {
    left: "5.6%",
    position: "absolute",
  },
  iconPosition: {
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    width: 29,
    height: 26,
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
    top: "97.54%",
    right: "2.29%",
    bottom: "0%",
    left: "2.54%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  heyNiceTo: {
    width: "77.54%",
    top: "15.78%",
    left: "10.4%",
    fontSize: 24,
    color: Color.darkslategray_200,
    lineHeight: 30,
    height: "3.02%",
  },
  settings: {
    width: "43.74%",
    top: "29.47%",
    left: "10.87%",
    color: Color.black,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    height: "3.02%",
  },
  buy: {
    fontFamily: FontFamily.dMSansRegular,
  },
  text: {
    color: Color.black,
  },
  buyProAccessWrapper: {
    height: "3.54%",
    width: "54.24%",
    top: "34.83%",
    right: "25.71%",
    bottom: "61.63%",
    left: "20.05%",
    position: "absolute",
  },
  contact: {
    top: "40.47%",
  },
  changeLanguage: {
    top: "46.08%",
  },
  notifications: {
    top: "51.7%",
  },
  privacyTerms: {
    top: "57.31%",
  },
  logout: {
    top: "78.95%",
  },
  guide: {
    top: "73.8%",
  },
  deleteAccount: {
    height: "3.76%",
    width: "67.18%",
    left: "15.78%",
    color: "#d81111",
    top: "84.98%",
    position: "absolute",
  },
  shareWithFriends: {
    top: "63.04%",
  },
  giveUsA: {
    top: "68.65%",
  },
  stopGettingThoseAnnoyingPa1: {
    fontSize: FontSize.size_xs,
  },
  stopGettingThoseAnnoyingPa: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  read2: {
    textDecoration: "underline",
  },
  readMore: {
    margin: Margin.m_sm,
  },
  stopGettingThoseContainer: {
    height: "4.41%",
    width: "82.27%",
    top: "21.23%",
    left: "10.64%",
    lineHeight: 17,
    color: Color.black,
  },
  iphone14Pro6Child: {
    top: "39.85%",
    bottom: "60.04%",
  },
  iphone14Pro6Item: {
    top: "45.51%",
    bottom: "54.37%",
    left: "4.07%",
    width: "90.13%",
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    right: "5.8%",
    height: "0.12%",
    position: "absolute",
  },
  iphone14Pro6Inner: {
    top: "51.18%",
    bottom: "48.7%",
  },
  lineView: {
    top: "56.85%",
    bottom: "43.03%",
  },
  lineIcon: {
    top: "62.34%",
    bottom: "37.43%",
  },
  iphone14Pro6Child1: {
    top: "84.12%",
    bottom: "15.76%",
  },
  iphone14Pro6Child2: {
    top: "78.93%",
    bottom: "20.96%",
  },
  iphone14Pro6Child3: {
    top: 760,
    height: 2,
    maxWidth: "100%",
    left: "4.44%",
    right: "5.68%",
    width: "89.88%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone14Pro6Child4: {
    top: "68.24%",
    bottom: "31.52%",
  },
  iphone14Pro6Child5: {
    top: "73.61%",
    bottom: "26.27%",
  },
  vectorIcon: {
    top: "41.55%",
    bottom: "56.57%",
  },
  vectorIcon1: {
    top: "35.92%",
    bottom: "62.21%",
  },
  vectorIcon2: {
    top: "47.18%",
    bottom: "50.94%",
  },
  vectorIcon3: {
    top: "52.82%",
    bottom: "45.31%",
  },
  vectorIcon4: {
    top: "58.33%",
    bottom: "39.79%",
  },
  vectorIcon5: {
    top: "80.05%",
    bottom: "18.08%",
  },
  vectorIcon6: {
    top: "74.88%",
    bottom: "23.24%",
  },
  vectorIcon7: {
    top: "85.92%",
    bottom: "12.21%",
  },
  vectorIcon8: {
    top: "64.08%",
    bottom: "34.04%",
  },
  vectorIcon9: {
    top: "69.37%",
    bottom: "28.76%",
  },
  version100: {
    width: "29.52%",
    top: "90.73%",
    fontSize: 14,
    letterSpacing: 0.1,
    color: "#5a5a5a",
    height: "3.05%",
    fontFamily: FontFamily.dMSansRegular,
    lineHeight: 30,
  },
  iconAccountLogout: {
    height: 23,
    width: 24,
  },
  iconAccountLogoutWrapper: {
    width: "5.85%",
    top: "79.58%",
    bottom: "17.72%",
    right: "88.04%",
  },
  iconPowerStandby: {
    width: 23,
    height: 27,
  },
  iconPowerStandbyWrapper: {
    height: "3.13%",
    width: "5.89%",
    right: "88.01%",
    bottom: "11.89%",
    flexDirection: "row",
    top: "84.98%",
  },
  iconBell: {
    height: 27,
    width: 24,
  },
  iconBellWrapper: {
    height: 27,
    width: 24,
  },
  frameView: {
    top: "51.88%",
    bottom: "44.94%",
    width: "6.11%",
    height: "3.18%",
    right: "88.04%",
  },
  iconLanguage: {
    width: 25,
    height: 23,
  },
  iconLanguageWrapper: {
    width: "5.95%",
    top: "46.71%",
    right: "87.94%",
    bottom: "50.59%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 12,
    height: 18,
  },
  vectorWrapper: {
    borderRadius: Border.br_2xs,
    shadowColor: "rgba(186, 175, 175, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    width: 37,
    height: 40,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_md,
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  iphone14Pro6Inner1: {
    height: "4.69%",
    width: "9.56%",
    top: "6.43%",
    right: "85.12%",
    bottom: "88.88%",
    left: "5.31%",
    position: "absolute",
  },
  parkscan: {
    height: "2.93%",
    width: "20.1%",
    top: "93.78%",
    letterSpacing: -1,
    lineHeight: 22,
    display: "flex",
    fontSize: FontSize.size_xl,
    color: Color.darkslategray_200,
    alignItems: "center",
  },
  vectorIcon10: {
    height: 26,
  },
  iconStar: {
    height: 26,
  },
  iconStarWrapper: {
    width: "6.9%",
    top: "68.9%",
    right: "87.51%",
    bottom: "28.05%",
    height: "3.05%",
  },
  vectorIcon11: {
    height: 26,
    width: 25,
  },
  iconLayout1: {
    width: 26,
    height: 26,
  },
  iconShareAltWrapper: {
    top: "63.38%",
    right: "88.3%",
    bottom: "33.6%",
    width: "6.11%",
    height: "3.02%",
  },
  iphone14Pro6Inner2: {
    height: "3.03%",
    width: "6.62%",
    top: "40.61%",
    right: "87.79%",
    bottom: "56.36%",
  },
  iconDescription: {
    width: 25,
    height: 27,
  },
  iconDescriptionWrapper: {
    height: "3.19%",
    top: "57.39%",
    bottom: "39.42%",
    width: "6.11%",
    flexDirection: "row",
    right: "88.04%",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  iphone14Pro6Inner3: {
    height: "2.84%",
    width: "6.16%",
    top: "35.09%",
    right: "87.99%",
    bottom: "62.06%",
  },
  iconList: {
    width: 28,
    height: 27,
  },
  iconListWrapper: {
    width: "6.64%",
    top: "74.17%",
    right: "87.76%",
    bottom: "22.65%",
    height: "3.18%",
  },
  iphone14Pro6: {
    flex: 1,
    height: 847,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
    width: "100%",
  },
});

export default IPhone14Pro6;
