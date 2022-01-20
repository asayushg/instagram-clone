import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const Story = ({story}) => {

    let userName = story.userName;

    if(userName.length > 10) userName = userName.slice(0,10) + '...';

    return (
        <View style={styles.container} >
            <View style={styles.userImageContainer} >
                <Image style={styles.userImage} source={{uri: story.userImage }} />
            </View>
            <Text style={styles.userName} >{userName}</Text>
        </View>
    )

}

export default Story;

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },

    userImageContainer:{
        width : 70,
        height : 70,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'red',
        marginStart: 8,
        marginEnd: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },

    userImage:{
        width : 60,
        height : 60,
        borderRadius: 40,
        position: 'absolute'
    },

    userName:{
        textAlign:'center',
        fontSize: 12
    }

})