import { StyleSheet } from "react-native";
import { spacings } from "../../shared/constants/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/index";
import { backgroundColor } from "../../constants/colors";
export const BaseStyle = StyleSheet.create({
  displayFlex: {
    display: "flex",
  },
  flexHalf: {
    flex: 0.5,
  },
  flex: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flexDirectionColumn: {
    flexDirection: "column",
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  flexDirectionRowReverse: {
    flexDirection: "row-reverse",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  gap1: {
    gap: wp(1),
  },
  gap1_5:{
    gap: wp(1.5)
  },
  gap2: {
    gap: wp(2),
  },
  gap3: {
    gap: wp(3),
  },
  gap4: {
    gap: wp(4),
  },
  gap5: {
    gap: wp(5),
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  alignJustifyCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  alignItemsFlexStart: {
    alignItems: "flex-start",
  },
  alignItemsFlexEnd: {
    alignItems: "flex-end",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  justifyContentSpaceEvenly: {
    justifyContent: "space-evenly",
  },
  justifyContentSpaceArround: {
    justifyContent: "space-around",
  },
  justifyContentFlexStart: {
    justifyContent: "flex-start",
  },
  textAlign: {
    textAlign: "center",
  },
  textAlignRight: {
    textAlign: "right",
  },
  widthHeight100: {
    width: "100%",
    height: "100%",
  },
  widthHeight100Wh: {
    width: wp(100),
    height: hp(100),
  },
  width100Wp: {
    width: wp(100),
  },
  width100Percent: {
    width: "100%",
  },
  height100Percent: {
    height: "100%",
  },
  height100hp: {
    height: hp(100),
  },
  positionAbsolute: {
    position: "absolute",
  },
  positionRelative: {
    position: "relative",
  },
  colorWhite: {
    color: "white",
  },
  resizeModeContain: {
    resizeMode: "contain",
  },
  resizeModeCover: {
    resizeMode: "cover",
  },
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  zIndex: {
    zIndex: 1,
  },
  overflowHidden: {
    overflow: "hidden",
  },
  overflowScroll: {
    overflow: "scroll",
  },
  overflowVisible: {
    overflow: "visible",
  },
  borderRadius3: {
    borderRadius: 3,
  },
  borderRadius4: {
    borderRadius: 4,
  },
  borderRadius5: {
    borderRadius: 5,
  },
  borderRadius6: {
    borderRadius: 6,
  },
  borderRadius7: {
    borderRadius: 7,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  borderRadius10: {
    borderRadius: 10,
  },
  borderRadius17: {
    borderRadius: 17,
  },
  borderRadius18: {
    borderRadius: 18,
  },
  borderRadius24: {
    borderRadius: 24,
  },
  borderRadius50: {
    borderRadius: 50,
  },
  borderWidth1: {
    borderWidth: 1,
  },
  borderWidth1_5: {
    borderWidth: 1.5,
  },
  borderBottomWidth1_5: {
    borderBottomWidth: 1.5,
  },
  borderWidth2: {
    borderWidth: 2,
  },
  borderWidth3: {
    borderWidth: 3,
  },
  borderWidth4: {
    borderWidth: 4,
  },
  borderWidth5: {
    borderWidth: 5,
  },
  shadowRadius10: {
    shadowRadius: 10,
  },
  shadowOpacity1: {
    shadowOpacity: 1,
  },
  elevation10: {
    elevation: 10,
  },
  textDecorationUnderline: {
    textDecorationLine: "underline",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  fontSize14: {
    fontSize: 14,
  },
  fontSize20: {
    fontSize: 20,
  },
  containerStyle: {
    width: wp(100),
    paddingHorizontal: spacings.Large1x,
    paddingVertical: spacings.Large2x,
    backgroundColor: backgroundColor,
  },
});
