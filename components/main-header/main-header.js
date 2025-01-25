"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./iconds.jsx";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import classes from "./main-header.module.css"; // Import the CSS file
import MainHeaderBackground from "./main-header-background";
import logo from "public/categories/testlogo.png";
import Image from "next/image.js";

export default function MainHeader() {
  const icons = {
    chevron: <ChevronDown className={classes.chevronIcon} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  const items = [
    {
      key: "ASL",
      label: "ASL",
      href: "/ASL",
    },
    {
      key: "Clases",
      label: "Clases",
      href: "/ASL/Clases",
    },
    {
      key: "Diccionario",
      label: "Diccionario",
      href: "/ASL/Diccionario",
    },
    {
      key: "Libros",
      label: "Libros",
      href: "/ASL/Cuentos",
    },
  ];

  return (
    <Navbar>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} width={500} height={"auto"} alt="manos unidos"/>
        </Link>
        <nav className={classes.nav}>
          <NavbarContent justify="center">
            <Dropdown className={classes.dropdown}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className={classes.customButton}
                    endContent={icons.chevron}
                  >
                    <Link href="/ASL" className={classes.link}>Aprender ASL</Link>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu aria-label="Dynamic Actions" items={items}>

                {(item) => (
                  <DropdownItem
                    key={item.key}
                    className={classes.dditem}
                    textValue={item.label}
                  >
                    <Link href={item.href}>{item.label}</Link>
                    
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
            {/* <li className={classes.item}> */}
            <NavbarItem isActive>
              <Link href="/inmigracion" aria-current="page" className={classes.link}>
                Inmigración
              </Link>
            </NavbarItem>
            {/* </li> */}
            {/* <li className={classes.item}> */}
            <NavbarItem>
              <Link href="/otros" aria-current="page" className={classes.link}>
                Otros Servicios
              </Link>
            </NavbarItem>
            {/* </li> */}
          </NavbarContent>
        </nav>
      </header>
    </Navbar>
  );
}
