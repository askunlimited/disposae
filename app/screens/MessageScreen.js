import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'How Much',
        description: 'How much is this?',
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'How Far',
        description: 'How much is this?',
        image: require('../assets/chair.jpg'),
    },
    {
        id: 3,
        title: 'Howdy',
        description: 'How much is this?',
        image: require('../assets/chair.jpg'),
    },
]

const MessageScreen = () => {
    
  return (
      <Screen style={styles.screen}>
          <FlatList 
            data= {messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({item}) => (
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('message selected', item)}
                    renderRightActions={ListItemDeleteAction}
                />
            )}
            ItemSeparatorComponent={ListItemSeperator }
            />
            
      </Screen>
    
  )
}

const styles = StyleSheet.create({
    
})

export default MessageScreen