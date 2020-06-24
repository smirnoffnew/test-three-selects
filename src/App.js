import React from 'react';
import Navbar from './components/Navbar'
import ContainerContextProvider from './contexts/containerContext';
import './App.css'
import Page from './components/Page';

const App = () => {
  return (
    <div className="App">
      <ContainerContextProvider>
        <Navbar />
        <Page />
      </ContainerContextProvider>
    </div>
  );
}

export default App;

