import React from 'react'

const NavBar = () => {
  const links = ["home", "about", "projects"];


  let elements = links.map((link, index) => {
    return <a key={index} href={link}>{link}</a>
  })



  return <nav>{elements}</nav>





}

export default NavBar
