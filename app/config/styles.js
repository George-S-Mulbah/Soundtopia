import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 20,
    padding:10,
    fontFamily: Platform.OS === "android" ? "Chewy_400Regular" : "Chewy_400Regular",
  },
};