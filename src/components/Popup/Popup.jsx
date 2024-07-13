import ReactDOM from 'react-dom';
import { CloseButton } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import PopupError from './PopupError';
import PopupConfirm from './PopupConfirm';
import PopupPolicy from './PopupPolicy';
import './Popup.scss';

const Popup = () => {
  const { isPopupLoading, isOpenPopup, popupType, popupTitle, popupText, popupClose } = usePopup();

  const popupContentClasses = `
    popup-content
    ${popupType === 'login' ? 'type-login' : ''} 
    ${popupType === 'registration' ? 'type-registration' : ''} 
    ${popupType === 'error' ? 'type-error' : ''} 
    ${popupType === 'confirm' ? 'type-confirm' : ''} 
    ${popupType === 'policy' ? 'type-policy' : ''} 
    ${isPopupLoading ? 'is-loading' : ''}`.trim();

  return ReactDOM.createPortal(
    <>
      {isOpenPopup && (
        <div className="popup" onClick={popupClose}>
          <div className={popupContentClasses} onClick={e => e.stopPropagation()}>
            <CloseButton onClick={popupClose} />
            {popupType === 'error' && <PopupError title={popupTitle} text={popupText} />}
            {popupType === 'confirm' && <PopupConfirm title={popupTitle} text={popupText} />}
            {popupType === 'policy' && <PopupPolicy />}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Popup;
