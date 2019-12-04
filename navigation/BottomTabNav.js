import { createBottomTabNavigator } from "react-navigation";

import Home from "../screens/Home";
import Notice from "../screens/Notice";
import Calendar from "../screens/Calendar";
import Community from "../screens/Community";
import TabBar from "../components/TabBar";

const BottomTabNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Notice: {
      screen: Notice,
    },
    Calendar: {
      screen: Calendar,
    },
    Community: {
      screen: Community,
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#0C2E86",
      inactiveTintColor: "#ddd",
    },
  }
);

export default BottomTabNav;
