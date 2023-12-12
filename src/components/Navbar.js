import React, { useEffect, useState } from 'react'
import './../App.css'
import axios from 'axios';

export const Navbar = () => {
    const[activeTab, setActiveTab] = useState('Alls');
    const [posts, setPosts] = useState([]);

    const handleClick = (tabName) => {
        setActiveTab(tabName);
    }

    useEffect (() => {
        const fetchData = async () =>{
            try{
                const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0');
                setPosts(response.data.hits);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (activeTab === 'Alls') {
            fetchData();
        }
    },[activeTab]);
  return (
    <div className='navbar'>
        <div className={activeTab === 'Alls' ? 'active' : ''} onClick={() => handleClick('Alls')}>Alls</div>
        <div className={activeTab === 'My Favs' ? 'active': ''} onClick={() => handleClick('My Favs')}>My Favs</div>
    </div>
  )
}

export default Navbar;