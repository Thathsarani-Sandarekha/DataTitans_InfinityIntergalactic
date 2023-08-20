import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItemList } from '@react-navigation/drawer';
import { User } from '../assets/images/profile.jpeg';
import { COLORS } from '../constents';

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: COLORS.of,
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={User}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: 'bold',
            color: COLORS.black,
          }}
        >
          Isabella Joanna
        </Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};
export default CustomDrawerContent;
