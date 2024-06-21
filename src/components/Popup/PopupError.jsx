import Icon from 'components/Icon/Icon';
import { Title, Text } from 'components/Typography';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupError = ({ title, text }) => {
  return (
    <PopupAnimation>
      <Icon name="error" />
      {title && (
        <>
          <Title tag="h4" size="h3">
            {title}
          </Title>
          <hr />
        </>
      )}
      {text && <Text size="big">{text}</Text>}
    </PopupAnimation>
  );
};

export default PopupError;
