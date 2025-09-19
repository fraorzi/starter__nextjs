import Paragraph from '@/components/UI/typography/Paragraph';

const Copyright = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Paragraph size='xs' className='text-opacity-80 text-white'>
      Copyright &copy;{currentYear} Your Company
    </Paragraph>
  );
};

export default Copyright;
