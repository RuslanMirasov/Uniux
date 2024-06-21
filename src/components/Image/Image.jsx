import { useState } from 'react';
import css from './Image.module.scss';

const Image = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`${css.Image} ${loading && css.Loading}`}>
      <img src={src} alt={alt} onLoad={handleImageLoad} />
    </div>
  );
};

export default Image;
