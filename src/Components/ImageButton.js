import React from 'react';
import { TouchableOpacity , Image} from 'react-native';

const ImageButton = (prop) => {

    return (

    <TouchableOpacity onPress={() => prop.action() } activeOpacity={1} >
        <Image 
            style={prop.style} 
            source={prop.image} 
        />
    </TouchableOpacity >

    )

}

export default ImageButton;