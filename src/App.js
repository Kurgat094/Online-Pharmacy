import React from 'react';
import Header from './components/Header';
import Doctors from './components/Doctors';
import Medicines from './components/Medicines';
import PaymentMethods from './components/PaymentMethods';
import Availability from './components/Availability';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Doctors />
        <Medicines />
        <PaymentMethods />
        <Availability />
      </div>
    </div>
  );
}

export default App;
