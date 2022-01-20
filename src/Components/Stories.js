import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import fakeStoryData from './FakeData';
import Story from './Story';

const Stories = () =>{

    return (
        <View style={styles.container}>
           <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={fakeStoryData}
                renderItem={({item: story}) => (<Story story={story} />) }
                keyExtractor={story => story}
           />
        </View>
    )

}

export default Stories;

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        backgroundColor: 'white'
    },

})