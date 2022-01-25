import React from 'react';
import {View, Text, FlatList} from 'react-native';
import users from '../data/users';
import { ListItem, Avatar } from 'react-native-elements';
import { TouchableHighlight } from "react-native";

export default props =>{

    function getUserItem({ item: user }){
        return (
            <ListItem 
            Component={TouchableHighlight}
            bottomDivider 
            disabledStyle={{ opacity: 0.5 }} 
            onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>
                        <Text>{user.name}</Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Text>{user.email}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList 
                data={users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    )
}