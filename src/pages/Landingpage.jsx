import React from 'react';
import Header from '../components/navbar/Header';
import Card from '../components/content/Card';
import Hero from '../components/content/hero';
import login from '../login/Login';
import { Outlet } from 'react-router-dom';

const Landingpage = () => {
  const image = 'ayush.jpg'; // Ensure this is correctly placed
  const UserName = 'Ayush';
  const city = 'Gachhiya';

  return (
    <div>
      <login/>
      <Header UserName={UserName} />
      <Hero />
      <Outlet/>
      <Card UserName={UserName} city={city} image={image} />
    </div>
  );
};

export default Landingpage;
