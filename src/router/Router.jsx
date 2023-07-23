import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../view/loginAndRegister/Login";
import { Register } from "../view/loginAndRegister/Register";
import { Home } from "../view/home/Home";
import { Search } from "../view/search/Search";
import { Details } from "../view/details/Details";

const Stack = createNativeStackNavigator();

export const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};