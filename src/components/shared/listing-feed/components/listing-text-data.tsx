import React from 'react';

interface Props {
  name: string;
  description: string;
  className?: string;
}

export const ListingTextData: React.FC<Props> = ({ name, description, className }) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold mb-3">{name}</h2>
      <span className="w-fit">{description}</span>
    </div>
  );
};
