import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../App.css';
import PaginationComponent from './PaginationComponent';

const MainComponent = () => {
  const [posts, setPosts] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const[totalPages, setTotalPages] = useState(0);
  const postsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${currentPage - 1}`);
        const filteredPosts = response.data.hits.filter(post => post.author && post.story_title && post.story_url && post.created_at);
        setPosts(filteredPosts);
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

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
        <main className="main-container">
        {currentPosts.map((post, index) => (
            <div key={index} className="column">
            <h3>{post.story_title}</h3>
            <p>Author: {post.author}</p>
            <p>Created At: {post.created_at}</p>
            <a href={post.story_url} target='_blank' rel='noopener noreferrer'>Read More</a>
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
