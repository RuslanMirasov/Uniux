import css from './ProfileInfo.module.scss';
import { useState } from 'react';
import { useAuth } from 'hooks';
import Icon from 'components/Icon/Icon';
import { LogoutButton } from 'components/Buttons';
import { AvatarForm, ProfileForm } from 'components/Forms';

const ProfileInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoggedIn, BASE } = useAuth();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClose = () => {
    setIsOpen(false);
  };

  return (
    isLoggedIn && (
      <div className={css.ProfileInfo}>
        <div className={css.Avatar} onClick={handleClick}>
          <img src={user.avatarUrl.includes('http') ? user.avatarUrl : `${BASE}${user.avatarUrl}`} alt="Uniux" />
        </div>
        <p className={css.Name} onClick={handleClick}>
          {user.name !== 'New User' ? user.name : user.email}
        </p>
        <div className={`${css.Arrow} ${isOpen && css.Open}`} onClick={handleClick}>
          <Icon name="select-arrow" size="7" />
        </div>
        {isOpen && (
          <div className={css.ProfileSettings}>
            <AvatarForm />
            <ProfileForm closeProfile={handleProfileClose} />
            <LogoutButton />
          </div>
        )}
      </div>
    )
  );
};

export default ProfileInfo;
