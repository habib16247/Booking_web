import React from 'react'
import styles from "./Home.module.css"
import Header from '../Header/Header'

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.bg}>
      
      </div>
      <div className={styles.content}>
        <div className={styles.contents}>
        {/* <div className={styles.textContent}>
        <p className={styles.skew}>Tours & Travels</p>
        <h1 className={styles.startPoint}>Your Journey Begin Here</h1>
        <p className={styles.avilable}>8700  TOURS ARE AVAILABLE, <span className={styles.booking}>BOOK NOW</span></p>
        <button className={styles.startBtn} >Let's Get Started</button>
        </div> */}
      <Header />
        </div>
      </div>


    </section>
  )
}

export default Home