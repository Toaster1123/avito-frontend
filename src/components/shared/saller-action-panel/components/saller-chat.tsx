'use client';
import clsx from 'clsx';
import React from 'react';
import { SendOutlined } from '@ant-design/icons';

interface Props {
  className?: string;
}

export const SallerChat: React.FC<Props> = ({ className }) => {
  const [inputText, setInputText] = React.useState('Здравствуйте!');
  const changeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <div className={clsx('', className)}>
      <h2>Спросите у продавца</h2>
      <div className="flex items-center">
        <input onChange={(e) => changeInputText(e)} type="text" value={inputText} />
        <SendOutlined />
      </div>
    </div>
  );
};
