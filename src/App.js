import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './context/UsersContext';

const Stack = createNativeStackNavigator()

export default props =>{
    return(
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>
                    <Stack.Screen 
                        name="UserList" 
                        component={UserList} 
                        options={({ navigation })=>{
                            return {
                                title: "Lista de Usuários",
                                headerRight: ()=>(
                                    <Icon 
                                        name='add'
                                        color='#fff'
                                        size={35}
                                        onPress={()=> navigation.navigate("UserForm")}
                                    />
                                )
                            }
                        }} 
                    />
                    <Stack.Screen name="UserForm" component={UserForm} options={{title: "Formulário de Usuários"}} />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: { backgroundColor: '#f4511e'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold'}
}