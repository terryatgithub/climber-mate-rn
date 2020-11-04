import React from "react";
import { NavigationContainerRef } from "@react-navigation/native";
export const navRef = React.createRef<NavigationContainerRef>()

export function navigate(routeName, params) {
    return navRef.current?.navigate(routeName, params)
}

export function goBack() {
    return navRef.current?.goBack()
}
