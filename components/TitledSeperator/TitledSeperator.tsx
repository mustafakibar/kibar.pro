import { TitledSeperatorProps } from './type';

const TitledSeperator = ({ title }: TitledSeperatorProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='border-b border-gray-300 w-4 mr-3' />
      <span className='text-gray-500'>{title}</span>
      <div className='border-b border-gray-300 w-full ml-3' />
    </div>
  );
};

export default TitledSeperator;
