import Icon from 'components/Icon/Icon';
import { Link, useLocation } from 'react-router-dom';
import css from './Button.module.scss';

const Button = ({
  to,
  href,
  onClick,
  variant = 'default',
  size = 'normal',
  full,
  target = '_self',
  disabled = false,
  isLoading = false,
  icon,
  children,
}) => {
  const location = useLocation();
  const buttonClasses = `
    ${css.Button} 
    ${css[`button--${variant}`]} 
    ${css[`size--${size}`]} 
    ${full ? css.Full : ''} 
    ${isLoading ? css.Loading : ''}
  `.trim();

  const buttonElement = to ? (
    <Link
      to={to}
      className={buttonClasses}
      target={target}
      disabled={disabled}
      full={full ? 'true' : undefined}
      state={{ from: `${location.pathname}${location.search}` }}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Link>
  ) : href ? (
    <a href={href} className={buttonClasses} target={target} disabled={disabled} full={full ? 'true' : undefined}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </a>
  ) : onClick ? (
    <button type="button" onClick={onClick} className={buttonClasses} disabled={disabled} full={full ? 'true' : undefined}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  ) : (
    <button type="submit" className={buttonClasses} disabled={disabled} full={full ? 'true' : undefined}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  );

  return buttonElement;
};

export default Button;
