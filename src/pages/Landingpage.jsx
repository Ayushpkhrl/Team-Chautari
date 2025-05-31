import React from 'react'
import Header from '../components/navbar/Header'
import Card from '../components/content/Card'
import Hero from '../components/content/hero'

const Landingpage = () => {
  const image= 'ayush.jpg'
  const user="oll"
  const UserName="Ayush";
  const city ="Gachhiya";
  return (
    <div>
    <Header UserName={UserName} />
    <Hero/>
      {/*<Card  UserName={UserName} city={city} image={image}/>*/}
   
    </div>
  )
}

export default Landingpage
