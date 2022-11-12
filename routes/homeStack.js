import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import BarbellScreen from "../screens/Barbell/BarbellScreen";
import WorkoutCreatorScreen from "../Exercise/WorkoutCreatorScreen";
import ExercisePlan from "../Exercise/ExercisePlan";
import SettingsScreen from "../screens/Settings/SettingsScreen";
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
  ExercisePlan: {
    screen: ExercisePlan,
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
