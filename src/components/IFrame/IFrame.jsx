// import { useEffect } from 'react';
import { useState } from 'react';
import css from './IFrame.module.scss';
import IframeTop from 'images/iframe_top.svg';
import IframeBottomSmall from 'images/IF_bottom_small.svg';
import imagePlaceholder from 'images/placeholder_mobil.jpg';

const IFrame = ({ link, name }) => {
  // const [embedUrl, setEmbedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setEmbedUrl(`https://www.figma.com/embed?embed_host=share&url=${link}`);
  // }, [link]);

  return (
    <div className={`${css.IFrameWrapper} ${isLoading && 'loading'}`}>
      <div className={css.Top}>
        <img src={IframeTop} alt="Uniux" />
      </div>
      <div className={`${css.IFrame} ${!isLoading && css.Visible}`}>
        <img src={imagePlaceholder} alt={name} onLoad={() => setIsLoading(false)} />
        {/* <iframe src={embedUrl} allowFullScreen title={name} onLoad={() => setIsLoading(false)}></iframe> */}
      </div>
      <div className={css.Bottom}>
        <img src={IframeBottomSmall} alt="Uniux" />
      </div>
    </div>
  );
};

export default IFrame;
