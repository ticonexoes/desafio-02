import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1024px-MarvelLogo.svg.png"
          alt=""
        />
      </Link>
    </Container>
  );
}

export default Header;
