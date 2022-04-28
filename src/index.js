import React from 'react';
//A importação do STATUSBAR é apenas para que a barra de status do celular fique da mesma cor que o aplicativo.
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
    //O <></> é o fragment que permite colocar dentro varios encapsulamentos de componentes dentro.
    <>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/>
        <Routes />
    </>
);

export default App;
