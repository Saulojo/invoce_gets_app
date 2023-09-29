import React from 'react';

import { View  } from 'react-native';


import Header from '../../components/header/index.js'
import Fatura_footer from '../../components/fatura_footer/index.js'
import Fatura_cards from '../../components/fatura_cards/index.js';

export default function Fatura_page() {
  return (
    <View ClassName="container" >
      <Header/>
      <Fatura_cards/>
      <Fatura_footer/>
    </View>
    
  );
}

