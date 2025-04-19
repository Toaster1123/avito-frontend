import React from 'react';

interface Props {
  adres: string;
  className?: string;
}

export const ListingAdres: React.FC<Props> = ({ adres, className }) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold mb-3">Адрес</h2>
      <span className="w-fit">г. {adres}</span>
    </div>
  );
};
