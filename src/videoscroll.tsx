import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';

function Videoscroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], // spans the whole 6000px scroll
  });

  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 1502; i++) {
      const img = new Image();
      img.src = `/images/${i}.webp`;
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  const render = useCallback(
    (index: number) => {
      const img = images[index - 1];
      const ctx = canvasRef.current?.getContext('2d');
      if (img && ctx) {
        if (img.complete) {
          ctx.drawImage(img, 0, 0);
        } else {
          img.onload = () => ctx.drawImage(img, 0, 0);
        }
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 1502]);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    render(1);
  }, [render]);

  return (
  
  <>
 
 <div className='' ref={containerRef} style={{ height: '6000px', position: 'relative' }}>
  <div
    style={{
      position: 'sticky',
      top: 0,
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <canvas
    className='h-screen'
      width={1000}
      height={470}
      ref={canvasRef}
      style={{
        height: '100vh',
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'cover',
      }}
    />
  </div>
</div>
 
     </>
  );
}

export default Videoscroll;