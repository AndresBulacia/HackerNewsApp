import React from 'react';
import './../App.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='navbar'>
      <div className={activeTab === 'Alls' ? 'active' : ''} onClick={() => handleClick('Alls')}>Alls</div>
      <div className={activeTab === 'My Favs' ? 'active' : ''} onClick={() => handleClick('My Favs')}>My Favs</div>
    </div>
  );
};

export default Navbar;
