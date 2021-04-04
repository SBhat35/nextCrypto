import Head from 'next/head'
import CoinList from '../components/CoinList'
import SearchBar from '../components/SearchBar'
import React, { useState, useEffect } from 'react';


export default function Home({filteredCoins}) {
  const [search, setSearch]= useState('')
  
  const allCoins = filteredCoins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = e =>{
    e.preventDefault();
    console.log(e)
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div >
      <Head>
        <title>Sachit App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h2>Crypto app</h2>
      < SearchBar type="text" placeholder="Search Crypto" onChange={handleChange}></SearchBar>
      <CoinList filteredCoins={allCoins}/>
    </div>
  )
}




export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  const filteredCoins = await res.json();
  return {
    props: {
      filteredCoins
    }
  }
}

const student = {
  name: 'John Doe',
  age: 16,
  scores: {
      maths: 74,
      english: 63,
      science: 85
  }
};