import React from 'react';

interface Props {
  className?: string;
}

export const LitingPagination: React.FC<Props> = ({ className }) => {
  return <div className={className}>Главаня {'->'} коты</div>;
};
