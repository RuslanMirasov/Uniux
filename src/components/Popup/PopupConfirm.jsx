import Icon from 'components/Icon/Icon';
import { Title, Text } from 'components/Typography';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupConfirm = ({ title, text }) => {
  return (
    <PopupAnimation>
      <Icon name="confirm" color="var(--green)" />
      {title && (
        <Title tag="h4" size="h3">
          {title}
        </Title>
      )}
      {text && (
        <Text size="big" color="grey">
          {text}
        </Text>
      )}
    </PopupAnimation>
  );
};

export default PopupConfirm;
