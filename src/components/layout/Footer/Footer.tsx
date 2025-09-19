import Copyright from '@/components/layout/Footer/Copyright';
import FooterMenu from '@/components/layout/Footer/FooterMenu';
import Container from '@/components/UI/grid/Container';
import Logo from '@/components/UI/icons/Logo';

const Footer = () => {
  return (
    <footer className='bg-primary-950 pb-8 text-xs text-white'>
      <Container>
        <div className='flex flex-col divide-y divide-gray-300/10'>
          <div className='py-8'>
            <Logo className='w-[80px] text-white md:w-[120px]' />
          </div>
          <div className='py-6'>
            <FooterMenu />
          </div>
          <div className='py-8'>
            <Copyright />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
