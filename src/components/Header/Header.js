import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { AiFillCode } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", aligiItems: "center", color: "white", marginBottom: "20px"}}>
          <AiFillCode /> <Span> Bishal</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li href="#projects">
        <NavLink>Projects</NavLink>
      </li>
      <li href="#tech">
        <NavLink>Technologies</NavLink>
      </li>
      <li href="#about">
        <NavLink>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/bishalr0y">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/bishalr0y">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/bishalr0y">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
