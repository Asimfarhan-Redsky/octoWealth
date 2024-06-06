import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BaseStyle } from "../shared/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../utils";
import { spacings, style } from "../shared/constants/fonts";
import {
  CrimsonRed,
  blackColor,
  lightGrayColor,
  whiteColor,
} from "../constants/colors";

const { alignItemsCenter } = BaseStyle;

const MonthSelector = ({ month, year, isActive, onPress }) => {
  return (
    <View style={[styles.container, alignItemsCenter]}>
      <Text style={styles.yearText}>{year}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.monthButton,
          { backgroundColor: isActive ? CrimsonRed : "#F3F3F3" },
        ]}
      >
        <Text
          style={[
            styles.monthText,
            { color: isActive ? whiteColor : blackColor },
          ]}
        >
          {month}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(MonthSelector);

const styles = StyleSheet.create({
  container: {
    gap: wp(1.7),
  },
  monthButton: {
    borderRadius: 9,
    padding: spacings.xxxLarge,
  },
  monthText: {
    fontSize: style.fontSizeSmall1x.fontSize,
  },
  yearText: {
    fontSize: style.fontSizeSmall.fontSize,
    color: blackColor,
  },
});
