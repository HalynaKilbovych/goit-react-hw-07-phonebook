import { BallTriangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export function Loader() {
  return (
    <Wrapper>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#2cc929"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
        />
    </Wrapper>
  );
}