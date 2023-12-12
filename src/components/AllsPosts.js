// AllsPosts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllsPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0'
        );
        setPosts(response.data.hits.slice(0, 8)); // Mostrar solo los primeros 8 posteos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='all-posts'>
      {posts.map((post) => (
        <div key={post.objectID} className='post'>
          <h3>{post.title}</h3>
          {/* Mostrar otros detalles del post si es necesario */}
        </div>
      ))}
    </div>
  );
};

export default AllsPosts;
