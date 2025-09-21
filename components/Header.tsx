import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className="bg-nature_dark_green py-5">
      <Container className="flex items-center justify-between text-lightColor">
        <Logo />
        <CartIcon />
      </Container>
    </header>
  );
};

export default Header;
