import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{ //Responsável por gerar a opacidade quando se desliza o menu.
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}>

      <Nav>

        <NavItem>
          <Icon name='help-outline' size={20} color='#fff' />
          <NavText>Me Ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name='person-outline' size={20} color='#fff' />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name='credit-card' size={20} color='#fff' />
          <NavText>Configurar Cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name='smartphone' size={20} color='#fff' />
          <NavText>Condigurações do App</NavText>
        </NavItem>

      </Nav>

      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>

    </Container>

  );
}

