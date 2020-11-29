import React from 'react'
import { View, Text } from 'react-native'
 import { useSelector } from 'react-redux'
 import const from '../pages/Cardapio'

import styles from './styles'

export default fucrion Item({ id }) {
    return(
        <View style ={styles.container}>
          <image
              style={styles.image}
              source={{uri.item.url}}
          />
           <View style={styles.description}>
             <Text style={styles.title}>Seu Pedido</Text>
             <Text style={styles.titleName}>{item.name}</Text>
            </View>
            <TouchblaOpacity>
                <MaterialIcons name="remove-shopping-cart" color='#1e7e34' size={24}/>
            </TouchblaOpacity>
        </View>
    );
}
