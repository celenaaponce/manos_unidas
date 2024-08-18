"use client"
import { Link } from "@nextui-org/react";
import { Component } from "react";
import classes from "./main-footer.module.css"

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <div className={classes.footer}>
        <div className={classes.footerdiv}>
          <Link href="mailto:Celena<celena.a.ponce@gmail.com>" className={classes.contact}>
          ✉️ Contactar
          </Link>
          <p className={classes.copyright}>Copyright ©️ {current_year}, Hands United es una organziación 501(c)3</p>
        </div>
      </div>
    )
  }
}

export default Footer;