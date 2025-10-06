import { useRef, useEffect, useState } from 'react';

const FadeContent = ({
  children,
  blur = true,
  duration = 1000,
  easing = 'ease',
  delay = 0,
  threshold =0.1 ,
  initialOpacity = 1,
  className = ''
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.unobserve(ref.current);
        setTimeout(() => {
          setInView(true);
        }, delay);
      }
    }, { threshold });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        height:"100%",width:"100%",
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none'
      }}>
      {children}
    </div>
  );
};

export default FadeContent;
