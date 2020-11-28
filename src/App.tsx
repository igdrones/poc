import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import UserPage from './Containers/UserPage/UserPage';

function App() {
  return (
    <div className="app-container">
      <Header />
        <UserPage />
      <Footer />
    </div>
  );
}

export default App;
