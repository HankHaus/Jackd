import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import BarbellScreen from "../screens/Barbell/BarbellScreen";
import WorkoutCreatorScreen from "../screens/WorkoutCreator/WorkoutCreatorScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import ExercisePlanScreen from "../screens/WorkoutCreator/ExercisePlanScreen";
const screens = {
  Home: {
    screen: BarbellScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  WorkoutCreator: {
    screen: WorkoutCreatorScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ExercisePlanScreen: {
    screen: ExercisePlanScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
