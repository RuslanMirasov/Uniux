import { Oval } from 'react-loader-spinner';

const Loading = ({ height = '100%', margin = 'auto' }) => {
  return (
    <Oval
      height={30}
      width={30}
      color="var(--color)"
      wrapperStyle={{ justifyContent: 'center', alignItems: 'center', height: height, margin: margin }}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#888888"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export default Loading;
