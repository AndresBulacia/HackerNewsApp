import React from 'react';
import moment from 'moment';
import TimerIcon from '../assets/icons/timer/iconmonstr-time-2.png';
import iconFav from '../assets/icons/favorite/iconmonstr-favorite-3.png';
import iconUnfav from '../assets/icons/favorite/iconmonstr-favorite-2.png';

const PostList = ({ posts, openTab, handleFav, favorites }) => {
    const isPostFavorite = (postId) => {
        return favorites.includes(postId);
    };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="column" onClick={() => openTab(post)}>
          <div className='date'>
            <img src={TimerIcon} alt='timer'/>
            <span> {moment(post.created_at).fromNow()} by {post.author}</span>
          </div>
          <div className='story_title'>{post.story_title}</div>
          <div className='likeCard' onClick={() => handleFav(post.objectID)}>
            <img src={isPostFavorite(post.objectID) ? iconFav : iconUnfav} alt="No Fovorite" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
