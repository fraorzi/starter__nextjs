import ButtonLink from '@/components/UI/buttons/ButtonLink';
import Logo from '@/components/UI/icons/Logo';
import Heading from '@/components/UI/typography/Heading';

export default function Home() {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center py-16'>
      <section className='bg-white'>
        <div className='flex flex-col items-center justify-center text-center'>
          <Logo className='w-full max-w-[80px] md:max-w-[200px]' />

          <Heading level={1} className='mt-8'>
            Starter Template
          </Heading>

          <ButtonLink className='mt-10' href='/components' variant='light'>
            See all components
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
