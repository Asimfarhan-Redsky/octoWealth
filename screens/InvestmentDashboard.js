import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { BaseStyle } from "../shared/styles";
import { widthPercentageToDP as wp } from "../utils";
import { spacings, style } from "../shared/constants/fonts";
import {
  whiteColor,
  lightGrayColor,
  royalBlue,
  lawnGreen,
  pictonBlue,
  lightSkyBlue,
  lightCyan,
} from "../constants/colors";
import {
  ADD_INVESMENTS,
  INVESTMENT_TYPE_SELECTION,
} from "../constants/constants";
import TotalInvestmentAmount from "../components/TotalInvestmentAmount";
import MonthSelector from "../components/MonthSelector";
import InvestmentBarChart from "../components/InvestmentBarChart";
import Button from "../components/Button";
import InvestmentPortfolioCard from "../components/InvestmentPortfolioCard";

const { width100Percent, alignItemsCenter, textAlignCenter } = BaseStyle;

const portfolioData = [
  {
    name: "Abyan Capital",
    portfolioValue: 22600.0,
    profitLoss: 500.0,
    profitLossPercentage: 10,
    investments: [
      { title: "Equities", color: lawnGreen, amount: 50 },
      { title: "Instruments", color: pictonBlue, amount: 30 },
      { title: "Real Estate", color: lightSkyBlue, amount: 10 },
    ],
    type: "growth portfolio",
  },
  {
    name: "Derayah Financial",
    portfolioValue: 22600.0,
    profitLoss: 500.0,
    profitLossPercentage: 10,
    investments: [
      { title: "Equities", color: lawnGreen, amount: 50 },
      { title: "Instruments", color: pictonBlue, amount: 35 },
      { title: "Real Estate", color: lightSkyBlue, amount: 15 },
    ],
    type: "growth portfolio",
  },
];

const allInvestmentsData = {
  name: "All your investments",
  portfolioValue: 22600.0,
  profitLoss: 1300.0,
  profitLossPercentage: 10,
  investments: [
    { name: "Abyan Capital", color: lawnGreen, amount: 60 },
    { name: "Derayah Financial", color: lightCyan, amount: 40 },
  ],
  type: "The growth rate over the previous month",
};

const months = [
  { year: 2024, month: "Jan" },
  { year: 2024, month: "Feb" },
  { year: 2024, month: "Mar" },
  { year: 2024, month: "Apr" },
  { year: 2024, month: "May" },
  { year: 2024, month: "Jun" },
  { year: 2024, month: "Jul" },
  { year: 2024, month: "Aug" },
  { year: 2024, month: "Sep" },
  { year: 2024, month: "Oct" },
  { year: 2024, month: "Nov" },
  { year: 2024, month: "Dec" },
];

const InvestmentDashboard = ({ navigation }) => {
  const [activeMonth, setActiveMonth] = useState("Jan");

  const handleAddInvestmentPress = () => {
    navigation.navigate(INVESTMENT_TYPE_SELECTION);
  };

  return (
    <>
      <TotalInvestmentAmount />
      <View style={styles.monthSelectorContainer}>
        <FlatList
          data={months}
          renderItem={({ item }) => (
            <MonthSelector
              year={item.year}
              month={item.month}
              onPress={() => setActiveMonth(item.month)}
              isActive={activeMonth === item.month}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          contentContainerStyle={styles.monthListContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={[styles.chartContainer, width100Percent, alignItemsCenter]}
          >
            <InvestmentBarChart />
            <Button
              buttonText={ADD_INVESMENTS}
              buttonStyle={styles.buttonStyle}
              textStyle={[styles.buttonTextStyle, textAlignCenter]}
              onPress={handleAddInvestmentPress}
            />
          </View>
          <InvestmentPortfolioCard item={allInvestmentsData} />
          <FlatList
            data={portfolioData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <InvestmentPortfolioCard item={item} />}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default InvestmentDashboard;

const styles = StyleSheet.create({
  monthSelectorContainer: {
    width: wp(100),
    backgroundColor: whiteColor,
  },
  monthListContainer: {
    gap: wp(4.7),
    paddingHorizontal: spacings.xxxLarge,
    paddingVertical: spacings.xxxLarge,
  },
  container: {
    backgroundColor: lightGrayColor,
    paddingHorizontal: spacings.Large1x,
    width: wp(100),
  },
  chartContainer: {
    marginTop: wp(6),
    gap: wp(3),
    marginBottom: spacings.large,
  },
  buttonStyle: {
    backgroundColor: royalBlue,
    width: wp(70),
    paddingVertical: spacings.xxLarge,
    borderRadius: 24,
  },
  buttonTextStyle: {
    color: whiteColor,
    fontSize: style.fontSizeMedium.fontSize,
    fontWeight: style.fontWeightThin1x.fontWeight,
  },
  flatListContainer: {
    marginBottom: spacings.ExtraLarge,
  },
});
