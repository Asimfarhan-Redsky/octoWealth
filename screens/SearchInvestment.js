import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  Platform,
  SafeAreaView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../utils";
import { spacings, style } from "../shared/constants/fonts";
import {
  backgroundColor,
  blackColor,
  grayColor,
  redColor,
  whiteColor,
} from "../constants/colors";
import { CANCEL, INVESTMENT_DETAILS } from "../constants/constants";
import { BaseStyle } from "../shared/styles";
const {
  flexDirectionRow,
  alignItemsCenter,
  justifyContentSpaceBetween,
  gap1_5,
  flex
} = BaseStyle;
const platformWeb = Platform.OS === "web";
const data = ["Apple", "Samsung", "Viovo", "Oppo"];

const SearchInvestment = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // const filteredData = data.filter((item) =>
  //   item.toLowerCase().includes(searchQuery.toLowerCase()),
  // );

  const handleInputChange = (text) => {
    setSearchQuery(text);
  };

  const handleCancelPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[flex]}>
    <View style={styles.container}>
      <View
        style={[
          styles.searchContainer,
          flexDirectionRow,
          alignItemsCenter,
          justifyContentSpaceBetween,
        ]}
      >
        <View style={[styles.searchBar, flexDirectionRow, alignItemsCenter]}>
          <Feather name="search" size={25} color={blackColor} />
          <TextInput
            placeholder="Apple"
            placeholderTextColor={blackColor}
            onChangeText={handleInputChange}
            value={searchQuery}
            style={[styles.textInput, platformWeb && { outline: "none" }]}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.cancelButton, flexDirectionRow, alignItemsCenter]}
          onPress={handleCancelPress}
        >
          <MaterialIcons name="cancel" size={25} color={redColor} />
          <Text style={styles.cancelText}>{CANCEL}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        // data={filteredData}
        data={["Apple"]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.listItem,
              flexDirectionRow,
              alignItemsCenter,
              gap1_5,
            ]}
            onPress={() =>
              navigation.navigate(INVESTMENT_DETAILS, { itemName: item })
            }
          >
            <AntDesign name="apple1" size={25} color={grayColor} />
            <Text style={styles.listItemText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
    </SafeAreaView> 
  );
};

export default SearchInvestment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: platformWeb ? wp(3) : spacings.Large2x + StatusBar.currentHeight,
    paddingHorizontal: spacings.Large1x,
  },
  searchContainer: {
    gap: wp(2),
  },
  searchBar: {
    paddingHorizontal: spacings.xxLarge,
    borderRadius: 28,
    backgroundColor: whiteColor,
    height: hp(6.7),
    flex: 3,
    gap: wp(1.5),
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: style.fontSizeMedium.fontSize,

  },
  cancelButton: {
    gap: wp(1),
    flex: platformWeb ? 0.3 : 1,
  },
  cancelText: {
    fontSize: style.fontSizeMedium.fontSize,
  },
  listContentContainer: {
    paddingTop: platformWeb ? spacings.ExtraLarge : spacings.Large2x,
    gap: wp(3),
  },
  listItem: {
    paddingBottom: spacings.large,
    borderBottomWidth: 1.1,
    borderColor: grayColor,
  },
  listItemText: {
    fontSize: style.fontSizeMedium.fontSize,
    color: blackColor,
  },
});
