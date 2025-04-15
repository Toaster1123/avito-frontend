import React from 'react';

interface Props {
  description: string;
  className?: string;
}

export const ListingDescription: React.FC<Props> = ({ description, className }) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold">Описание</h2>
      <span className="w-fit">{description}</span>
    </div>
  );
};
