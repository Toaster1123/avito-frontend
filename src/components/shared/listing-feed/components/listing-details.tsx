import React from 'react';

interface Props {
  details: {
    name: string;
    value: string;
  }[];
  className?: string;
}

export const ListingDetails: React.FC<Props> = ({ details, className }) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold mb-3">Хараетеристики</h2>
      {details.map((item, id) => (
        <ul key={id} className="flex gap-2 items-center mb-3">
          <li className="text-neutral-500">{item.name}:</li>
          <li>{item.value}</li>
        </ul>
      ))}
    </div>
  );
};
