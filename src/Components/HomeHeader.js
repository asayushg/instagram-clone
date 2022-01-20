import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text } from 'react-native';
import ImageButton from './ImageButton';


const HomeHeader = () =>{

    return (
        <SafeAreaView style={styles.container} >
            <ImageButton 
                image={require('../../assests/header-logo.svg')}
                style={styles.logo}
                action={() => {
                    console.log("Logo Clicked")
                }}
            />
            <View style={{flexDirection: 'row', marginRight: 10}} >
            <ImageButton 
                image={require('../../assests/new-post.png')}
                style={styles.newPost}
                action={() => {
                    console.log("New Post Clicked")
                }}
            />

            <View style={styles.unreadBadge} ><Text style={styles.badgeText} >1</Text></View>
            <ImageButton 
                image={require('../../assests/messenger.png')}
                style={styles.newPost}
                action={() => {
                    console.log("Chat Clicked")
                }}
            />

            </View>

        </SafeAreaView>
    )

}

export default HomeHeader;

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },

    logo:{
        width: 120,
        height: 40,
        resizeMode: 'contain',
        margin: 8,
        tintColor: 'black'
    },
    
    newPost: {
        width: 25,
        height: 25,
        margin: 10,
        tintColor: 'black'
    },

    unreadBadge:{
        position: 'absolute',
        backgroundColor: '#FF3250',
        paddingStart: 6,
        paddingEnd: 6,
        alignItems: 'center',
        borderRadius: 24,
        right: -1,
        top: 3,
        zIndex: 100,
    },

    badgeText: {
        color: 'white',
        fontWeight: '600'
    }
    

})