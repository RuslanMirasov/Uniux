import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useState } from 'react';
import { updateAvatar } from '../../../redux/auth/operations';

import Icon from 'components/Icon/Icon';
import css from './AvatarForm.module.scss';

const AvatarForm = () => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { user, avatarLoading, BASE } = useAuth();

  const uploadPhoto = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    dispatch(updateAvatar(file));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <form action="/" method="post" className={css.AvatarForm} noValidate>
        <label className={`${css.Label} ${avatarLoading && css.Loading}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <input type="file" name="avatarUrl" onChange={uploadPhoto} />
          <img src={user.avatarUrl.includes('http') ? user.avatarUrl : `${BASE}${user.avatarUrl}`} alt="Uniux" />
          <Icon name="avatar_plus" />
        </label>
      </form>
      <div className={css.PersonalInfo}>
        <p>{user.name}</p>
        <span>{isHovered ? 'Change photo' : user.email}</span>
      </div>
    </>
  );
};

export default AvatarForm;
