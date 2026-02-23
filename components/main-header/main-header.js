"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { ChevronDown } from "./iconds.jsx";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

import logo from "public/categories/testlogo.png";
import Image from "next/image";

export default function MainHeader() {
  const chevron = <ChevronDown className={classes.chevronIcon} />;

  /* Aprender ASL dropdown */
  const aprenderASL = [
    {
      key: "diccionario",
      label: "Diccionario",
      href: "/aprender-asl/diccionario",
    },
    {
      key: "clases",
      label: "Clases gratuitas",
      href: "/aprender-asl/clases-gratuitas",
    },
    {
      key: "videos",
      label: "Videos",
      href: "/aprender-asl/videos",
    },
    {
      key: "historias",
      label: "Historias",
      href: "/aprender-asl/historias",
    },
  ];

  /* Programas dropdown */
  const programas = [
    {
      key: "clases-asl",
      label: "Clases ASL",
      href: "/aprender-asl",
    },
    {
      key: "manejo",
      label: "Manejo",
      href: "/programas/manejo",
    },
    {
      key: "aplicacion",
      label: "Aplicación",
      href: "/programas/aplicacion",
    },
  ];

  const inmigracionItems = [
    {
      key: "kyr",
      label: "Conozca sus derechos",
      href: "/inmigracion/kyr",
    },
    {
      key: "recursos",
      label: "Recursos",
      href: "/inmigracion/recursos",
    },
    {
      key: "talleres",
      label: "Talleres",
      href: "/inmigracion/talleres",
    },
  ];

  return (
    <div className={classes.headerWrapper}>
      <MainHeaderBackground />

      <Navbar className={classes.navbar}>
        <header className={classes.header}>
          {/* Logo */}
          <Link className={classes.logo} href="/">
            <Image src={logo} width={500} height={"auto"} alt="Manos Unidas" />
          </Link>

          <NavbarContent justify="center" className={classes.navContent}>
            {/* Mobile Home */}
            <NavbarItem>
              <Link
                href="/"
                className={`${classes.link} ${classes.mobileOnly}`}
              >
                Inicio
              </Link>
            </NavbarItem>

            {/* Aprender ASL */}
            <Dropdown className={classes.dropdown}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button disableRipple className={classes.customButton}>
                    <Link href="/aprender-asl" className={classes.navMainLink}>
                      Aprender ASL
                    </Link>

                    <span className={classes.chevronTrigger}>{chevron}</span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu aria-label="Aprender ASL">
                {aprenderASL.map((item) => (
                  <DropdownItem key={item.key} className={classes.dditem}>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* Inmigración */}
            <Dropdown className={classes.dropdown}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button disableRipple className={classes.customButton}>
                    <Link href="/inmigracion" className={classes.navMainLink}>
                      Inmigración
                    </Link>

                    <span className={classes.chevronTrigger}>{chevron}</span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu aria-label="Inmigración">
                {inmigracionItems.map((item) => (
                  <DropdownItem key={item.key} className={classes.dditem}>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* Programas */}
            <Dropdown className={classes.dropdown}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button disableRipple className={classes.customButton}>
                    <Link href="/programas" className={classes.navMainLink}>
                      Programas
                    </Link>

                    <span className={classes.chevronTrigger}>{chevron}</span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu aria-label="Programas">
                {programas.map((item) => (
                  <DropdownItem key={item.key} className={classes.dditem}>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* Donar */}
            <NavbarItem>
              <Link href="/donar" className={classes.link}>
                Donar
              </Link>
            </NavbarItem>
          </NavbarContent>
        </header>
      </Navbar>
    </div>
  );
}
