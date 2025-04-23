import { SearchOutlined } from '@ant-design/icons';
import clsx from 'clsx';

interface Props {
  text: string;
  image?: 'search';
  className?: string;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Button: React.FC<Props> = ({ text, image, fontSize, className }) => {
  return (
    <button
      className={clsx(
        className,
        'cursor-pointer select-none rounded-xl duration-150 bg-sky-500 text-white hover:bg-sky-600 flex items-center',
        `text-${fontSize}`,
      )}>
      {image === 'search' && <SearchOutlined className="mr-2 h-4 w-4" size={16} />}
      <span className="text-center w-full"> {text}</span>
    </button>
  );
};
