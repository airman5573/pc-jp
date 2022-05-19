import Indicator from './Indicator';

type Props = {
  children: JSX.Element;
  isAllImageLoaded: boolean;
};

function Container({ children, isAllImageLoaded }: Props) {
  const visibility = isAllImageLoaded ? 'visible' : 'hidden';
  return (
    <div className="container pt-10 pb-10">
      <div className="inner v-center">
        {!isAllImageLoaded && <Indicator />}
        {<div style={{ maxWidth: '640px', visibility }}>{children}</div>}
      </div>
    </div>
  );
}

export default Container;
