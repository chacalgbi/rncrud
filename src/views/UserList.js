import React, { useContext } from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import { ListItem, Avatar, Icon, Button } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props =>{

    const ctx = useContext(UsersContext);

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn("Excluido", user.id);
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }){
        return (
            <ListItem.Swipeable 
            bottomDivider 
            onPress={() => props.navigation.navigate('UserForm', user)}

            leftContent={
                <Button
                  title="Editar"
                  icon={{ name: 'edit', color: 'white' }}
                  buttonStyle={{ minHeight: '100%' }}
                  onPress={() => props.navigation.navigate('UserForm', user)}
                />
            }

            rightContent={
                <Button
                  title="Apagar"
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                  onPress={() => confirmUserDeletion(user)}
                />
            }

            >
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>
                        <Text>{user.name}</Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Text>{user.email}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        )
    }

    return(
        <View>
            <FlatList 
                data={ctx.users_data.users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    )
}