import React from 'react';

const LazyLoadedImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
      };
    };

    loadImage();
  }, [src]);

  return <img className={className} src={imageSrc || 'placeholder-image-url'} alt={alt} />;
};

export default LazyLoadedImage;
