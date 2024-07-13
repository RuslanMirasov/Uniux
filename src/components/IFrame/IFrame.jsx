import { useState, useEffect } from 'react';
import css from './IFrame.module.scss';
import IframeTop from 'images/iframe_top.svg';
import IframeBottomSmall from 'images/IF_bottom_small.svg';
import imagePlaceholder from 'images/placeholder_mobil.jpg';

const IFrame = ({ link, name, device = 'app', setStartTime }) => {
  const [embedUrl, setEmbedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const containsFigma = link?.includes('figma.com');
    const containsProto = link?.includes('proto');

    if (containsFigma || containsProto) {
      setEmbedUrl(`https://www.figma.com/embed?embed_host=share&url=${link}`);
      return;
    }

    setEmbedUrl(link);
  }, [link]);

  const iframeOnLoad = () => {
    setIsLoading(false);
    if (setStartTime) {
      const currentTime = new Date().getTime();
      setStartTime(currentTime);
    }
  };

  return (
    <div className={`${css.IFrameWrapper} ${isLoading && 'loading'} ${device !== 'app' && css.Desctop}`}>
      <div className={css.Top}>
        <img src={IframeTop} alt="Uniux" />
      </div>
      <div className={`${css.IFrame} ${!isLoading && css.Visible}`}>
        {link ? (
          <iframe src={embedUrl} allowFullScreen title={name} onLoad={iframeOnLoad} seamless></iframe>
        ) : (
          <img src={imagePlaceholder} alt={name} onLoad={iframeOnLoad} />
        )}
      </div>
      <div className={css.Bottom}>
        <img src={IframeBottomSmall} alt="Uniux" />
      </div>
    </div>
  );
};

export default IFrame;
