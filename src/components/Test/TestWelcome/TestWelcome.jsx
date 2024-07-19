import { useAuth } from 'hooks';
import { Text, Title, TitleBox } from 'components/Typography';
import { Form, Input } from 'components/Forms';
import { LinkBlue } from 'components/Links';
import { useState, useEffect } from 'react';
import { usePopup } from 'contexts/PopupContext';
import { avatarGenerate } from 'utils/avatarGenerate';
import css from './TestWelcome.module.scss';

const TestWelcome = ({ setIsButtonDisabled }) => {
  const { user, isLoggedIn } = useAuth();
  const { popupOpen } = usePopup();
  const [email, setEmail] = useState(user?.email || '');

  useEffect(() => {
    const updateSessionEmail = email => {
      const existingSession = JSON.parse(localStorage.getItem('session'));
      if (existingSession) {
        existingSession['user'] = {
          email,
          avatarUrl: isLoggedIn ? user.avatarUrl : avatarGenerate(email),
        };
        localStorage.setItem('session', JSON.stringify(existingSession));
      }
    };

    if (email) {
      setIsButtonDisabled(false);
      updateSessionEmail(email);
    }
  }, [email, setIsButtonDisabled, isLoggedIn, user.avatarUrl]);

  const emailValidate = input => {
    if (input.classList.contains('invalid')) {
      setIsButtonDisabled(true);
      return;
    }
    setIsButtonDisabled(false);
    setEmail(input.value);
  };

  const handleChange = e => {
    emailValidate(e.target);
  };

  const showPolicy = () => {
    popupOpen('policy');
  };

  return (
    <div className={css.Welcome}>
      <TitleBox>
        <Title teg="h1" size="h1">
          Добро пожаловать
        </Title>

        <Form initialState={{ email: email }}>
          <Input type="email" name="email" placeholder="Email" label="Введите свою почту" required onChange={handleChange} />
        </Form>

        <Text color="grey" size="big">
          ПРЕДУПРЕЖДЕНИЕ: Для лучших результатов тестированя приложение записываем фронтальную камеру. Ознакомьтесь с
          <LinkBlue onClick={showPolicy}>политикой конфиденциальности</LinkBlue>.
        </Text>
      </TitleBox>
    </div>
  );
};

export default TestWelcome;
