import './App.css';
import React from 'react';
import { makeStyles} from '@mui/styles';
import { Header } from './components/Header';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';
import {Join }from './components/Join'
import useWindowPosition from './hook/useWindowPosition';
import { useState,useEffect } from 'react';
const useStyles=makeStyles((theme)=>({
  root:{
    width: "100%",
    height: "300vh",
    backgroundSize: "cover",
    backgroundImage: `url( ${process.env.PUBLIC_URL+"/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }
}));
function App() {
  const comps=[
    {
        title:"community",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img:process.env.PUBLIC_URL+ "/assets/ac1.jpg",
        direction: "left"
    },
    {
        title:"Developers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
       img:process.env.PUBLIC_URL+ "/assets/ac2.jpg",
       direction: "right"
    }
]
  const classes=useStyles();
  const checked = useWindowPosition("header")
  const check2=useWindowPosition("destt2")

  return (
   <div className={classes.root}>
    <Header/>
    
    <Achievements comps={comps} checked={checked}/>
    
    <Join check2={check2}/>
    <Footer/>
    
   </div>
  );
}

export default App;
