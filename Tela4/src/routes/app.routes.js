import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TelaA } from "../pages/TelaA";
import { TelaB } from "../pages/TelaB";
import { TelaC } from "../pages/TelaC";

const Top = createMaterialTopTabNavigator();

export default function Routes() {
  return (
      <Top.Navigator>
          <Top.Screen name="TelaA" component={TelaA} />
          <Top.Screen name="TelaB" component={TelaB} />
          <Top.Screen name="TelaC" component={TelaC} />
      </Top.Navigator>
  );
}