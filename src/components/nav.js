import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>Inicio</Link>
      <Link to={"/aboutus"}>Nosotros</Link>
    </nav>
  )
}

export default Nav
