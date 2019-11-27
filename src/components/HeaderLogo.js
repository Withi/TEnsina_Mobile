import React from 'react';

import {View, Image, Platform} from 'react-native';

const valueMarignRight = Platform.select({
  ios: -5,
  android: 30,
});

export default function HeaderLogo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: valueMarignRight,
      }}>
      <Image
        style={{
          width: 170,
          height: 50,
        }}
        source={require('../images/logoToolbar.png')}
      />
    </View>
  );
}
