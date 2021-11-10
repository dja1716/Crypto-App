import React from "react";
import Login from "../screens/Login";
import Join from "../screens/Join";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Nav = createNativeStackNavigator();

const OutNav = () => (
  <Nav.Navigator>
    <Nav.Screen name="Login" component={Login} />
    <Nav.Screen name="Join" component={Join} />
  </Nav.Navigator>
);

export default OutNav;
