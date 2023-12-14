// FavoriteButton.js
import React from 'react';

const FavoriteButton = ({ postId, isFavorited, handleFav }) => {
  return (
    <div className='likeCard' onClick={() => handleFav(postId)}>
      <img src={isFavorited ? iconFav : iconUnfav} alt="No Fovorite" />
    </div>
  );
};

export default FavoriteButton;
