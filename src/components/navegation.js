import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
  &.actual-page {
    border-bottom: 2px solid #fff;
  }
`

const Navegation = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="actual-page">
        Inicio
      </NavLink>
      <NavLink to={"/aboutus"} activeClassName="actual-page">
        Nosotros
      </NavLink>
    </Nav>
  )
}

export default Navegation
