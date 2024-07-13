import { Title, Text, TitleBox } from 'components/Typography';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupPolicy = () => {
  return (
    <PopupAnimation>
      <TitleBox align="left">
        <Title tag="h3" size="h2">
          Privacy Policy
        </Title>
        <Text size="big" color="grey">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia animi eveniet quisquam obcaecati officiis vel ullam pariatur quam odio nihil
          sed, velit dicta debitis suscipit. Autem ducimus laborum aut deleniti? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia animi
          eveniet quisquam obcaecati officiis vel ullam pariatur quam odio nihil sed, velit dicta debitis suscipit. Autem ducimus laborum aut
          deleniti?
        </Text>
        <Title tag="h6" size="h5">
          Some title about camera
        </Title>
        <Text size="big" color="grey">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia animi eveniet quisquam obcaecati officiis vel ullam pariatur quam odio nihil
          sed, velit dicta debitis suscipit. Autem ducimus laborum aut deleniti?
        </Text>
        <Title tag="h6" size="h5">
          Some title about personal data
        </Title>
        <Text size="big" color="grey">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia animi eveniet quisquam obcaecati officiis vel ullam pariatur quam odio nihil
          sed, velit dicta debitis suscipit. Autem ducimus laborum aut deleniti?
        </Text>
      </TitleBox>
    </PopupAnimation>
  );
};

export default PopupPolicy;
