import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../App.css';
import PaginationComponent from './PaginationComponent';

const MainComponent = () => {
  const [posts, setPosts] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const[totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0');
        setPosts(response.data.hits);
        setTotalPages(response.data.nbPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
        <main className="main-container">
        {posts.map((post, index) => (
            <div key={index} className="column">
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
            {/* Mostrar otros detalles del post según la estructura de los datos de la API */}
            </div>
        ))}
        </main>
        <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        />
    </div>
  );
};

export default MainComponent;
