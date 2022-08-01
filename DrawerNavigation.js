import React from "react";
import { createDrawerNavigation } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <DrawerNavigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </DrawerNavigator>
    );
};

export default DrawerNavigator;
