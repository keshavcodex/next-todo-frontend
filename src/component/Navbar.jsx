import React, { Component } from "react";
import styles from "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <li>Subject</li>
        <li>Topics</li>
        <li>Exams</li>
        <li>Calendar</li>
      {/* <div className={styles.navbox}>
        <li className={styles.nav}>Subject</li>
        <li className={styles.nav}>Topics</li>
        <li className={styles.nav}>Exams</li>
        <li className={styles.nav}>Calendar</li>
      </div>
      </div> */}
    );
  }
}
