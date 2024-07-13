import { useState } from 'react';
import placeholder from 'images/placeholder.jpg';
import css from './Image.module.scss';

const Image = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const projectImage = src || placeholder;

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`${css.Image} ${loading && css.Loading}`}>
      <img src={projectImage} alt={alt} onLoad={handleImageLoad} />
    </div>
  );
};

export default Image;
