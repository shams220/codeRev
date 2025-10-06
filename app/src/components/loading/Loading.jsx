// LottieLoader.jsx
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { HeadingIcon } from 'lucide-react';

const Loading = () => {
  return (
    <div style={{width:'100%',height:"100%"}}>
        <DotLottieReact
      src="https://lottie.host/bfc627a2-e016-4c89-96fc-2de8fdef15c2/uPXSlB03bR.lottie"
      loop
      autoplay
    />
    </div>
  );
};

export default Loading;
