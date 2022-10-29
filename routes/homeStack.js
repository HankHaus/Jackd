import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../home/HomeScreen";
import WorkoutCreatorScreen from "../Exercise/WorkoutCreatorScreen";
import ExercisePlan from "../Exercise/ExercisePlan";
const screens = {
  Home: {
    screen: HomeScreen,
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
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
