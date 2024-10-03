import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: boolean;
  circle?: boolean;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height, rounded, circle, className }) => {
  let classes = 'skeleton';

  if (rounded) classes += ' rounded-full';
  if (circle) classes += ' rounded-full';
  if (className) classes += ` ${className}`;

  return (
    <div
      className={classes}
      style={{ width: width || '100%', height: height || '1em' }}
    />
  );
};

export default Skeleton;