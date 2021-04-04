
import styles from './Coins.module.css'
import React from 'react'
import Link from 'next/link'


const Coins = (props) => {
  return (
    <Link href='/coin/[id[' as={`/coin/${props.id}`}>

    <div className={styles.coinContainer}> 

      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={props.image} alt={props.name} className={styles.coinImg}>
          </img>
          <h1 className={styles.coinh1}>{props.name}</h1>
          <p className={styles.symbol}></p>

        </div>
      </div>
    </div>
  
  </Link>
  )
}

export default Coins
