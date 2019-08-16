import { createSwitchNavigator } from "react-navigation";
import { screens } from "../../config";

import MainNavigator from "./MainNavigator";

const RootNavigator = createSwitchNavigator({
    [screens.MainNavigator]: { screen: MainNavigator }
});

export default RootNavigator;
