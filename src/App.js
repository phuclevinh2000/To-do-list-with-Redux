import React from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import HomeSceen from './Screen/HomeSceen';
import Footer from "./components/Footer"

function App() {
  return (
    <FormContainer>
      <HomeSceen />
      <Footer />
    </FormContainer>
    
  );
}

export default App;
