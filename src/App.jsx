// import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import TinderCard from './Components/Tinder-card/TinderCard';
import ButtonContainer from './Components/ButtonContainer/Button-Container';
import ChatScreen from './Components/chatScreen/ChatScreen';


function App() {

  return (
    <>
      <div className="box">


        <Header />
        <TinderCard />
        <ButtonContainer />

        {/* <ChatScreen /> */}
        {/* individual chat icon */}

      </div>
    </>
  )
}

export default App
