import React, { useState } from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

export default (props) =>{
    //console.warn(Object.keys(props));
    //console.warn(Object.keys(props.route));
    //console.warn(Object.keys(props.route.params));
    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    return(
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder='Informe um Nome'
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder='Informe um Email'
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder='Informe a URL do Avatar'
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    props.navigation.goBack();
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input:{
        height: 40,
        borderColor: 'blue',
        borderWidth: 2,
        marginBottom: 15
    }
})