import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { BaseStyle } from "../shared/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../utils";
import { spacings, style } from "../shared/constants/fonts";
import { blackColor, royalBlue, whiteColor } from "../constants/colors";
import { TOTAL_INVESTMENT, USD } from "../constants/constants";

const { flexDirectionRow, alignItemsCenter, alignSelfEnd, gap1 } = BaseStyle;

const TotalInvestmentAmount = () => {
  return (
    <View style={[styles.container, flexDirectionRow, alignItemsCenter]}>
      <View style={[styles.totalInvestmentAmount, alignSelfEnd]}>
        <Text style={styles.totalInvestmentText}>{TOTAL_INVESTMENT}</Text>
        <Text style={styles.investmentAmountText}>
          $ 75,259.<Text style={styles.centsText}>00</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.currencyButton,
          flexDirectionRow,
          alignSelfEnd,
          alignItemsCenter,
        ]}
      >
        <Text style={styles.currencyText}>{USD}</Text>
        <AntDesign name="caretdown" size={14} color={blackColor} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(TotalInvestmentAmount);

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: royalBlue,
    height: hp(15),
    paddingBottom: spacings.Large1x,
    paddingTop: spacings.Large2x + StatusBar.currentHeight,
    paddingHorizontal: spacings.Large2x,
    gap: wp(2),
  },
  currencyButton: {
    gap: wp(2),
    backgroundColor: whiteColor,
    paddingHorizontal: spacings.xLarge,
    paddingVertical: spacings.small,
    borderRadius: 5,
  },
  totalInvestmentAmount: {
    gap: Platform.OS === "web" ? wp(0.5) : gap1.gap
  },
  totalInvestmentText: {
    color: whiteColor,
    fontSize: style.fontSizeSmall1x.fontSize,
  },
  investmentAmountText: {
    color: whiteColor,
    fontSize: style.fontSizeLarge.fontSize,
    fontWeight: style.fontWeightBold.fontWeight,
  },
  centsText: {
    fontSize: style.fontSizeNormal2x.fontSize,
    fontWeight: style.fontWeightThin.fontWeight,
  },
  currencyText: {
    fontSize: style.fontSizeSmall1x.fontSize,
    color: blackColor,
  },
});
