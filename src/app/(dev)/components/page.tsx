import Button from '@/components/UI/buttons/Button';
import ButtonLink from '@/components/UI/buttons/ButtonLink';
import PrimaryLink from '@/components/UI/buttons/PrimaryLink';
import UnderlineLink from '@/components/UI/buttons/UnderlineLink';
import UnstyledLink from '@/components/UI/buttons/UnstyledLink';
import Container from '@/components/UI/grid/Container';
import NextImage from '@/components/UI/Image/NextImage';
import Skeleton from '@/components/UI/skeleton/Skeleton';
import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

import { Routes } from '@/constant/routes';

import FramerMotionExample from './examples/FramerMotionExample';
import SonnerExample from './examples/SonnerExample';
import SwiperExample from './examples/SwiperExample';

import FacebookIcon from '~/svg/facebook.svg';

export const metadata = {
  title: 'Built-in Components',
  description: 'Pre-built components with awesome default',
};
export default async function ComponentsPage() {
  // it's server side component, so we can fetch all the data here
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Built-in Components');
    }, 1000);
  });

  return (
    <section>
      <Container className='pt-8 pb-16'>
        <Heading level={1}>{title}</Heading>

        <ol className='mt-8 space-y-10'>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              Forms
            </Heading>
            <UnderlineLink href={Routes.SANDBOX_FORMS}>Go to forms page</UnderlineLink>
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              UnstyledLink
            </Heading>
            <Paragraph className='mt-5'>
              No style applied, differentiate internal and outside links, give custom cursor for
              outside links.
            </Paragraph>
            <div className='space-x-2'>
              <UnstyledLink href='/'>Internal Links</UnstyledLink>
              <UnstyledLink href='https://google.com'>Outside Links</UnstyledLink>
            </div>
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              PrimaryLink
            </Heading>
            <Paragraph className='mt-5'>
              Add styling on top of UnstyledLink, giving a primary color to the link.
            </Paragraph>
            <div className='space-x-2'>
              <PrimaryLink href='/'>Internal Links</PrimaryLink>
              <PrimaryLink href='https://google.com'>Outside Links</PrimaryLink>
            </div>
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              UnderlineLink
            </Heading>
            <Paragraph className='mt-5'>
              Add styling on top of UnstyledLink, giving a dotted and animated underline.
            </Paragraph>
            <div className='space-x-2'>
              <UnderlineLink href='/'>Internal Links</UnderlineLink>
              <UnderlineLink href='https://google.com'>Outside Links</UnderlineLink>
            </div>
          </li>

          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              ButtonLink
            </Heading>
            <Paragraph className='mt-5'>Button styled link with 3 variants.</Paragraph>
            <div className='flex flex-wrap gap-2'>
              <ButtonLink variant='primary' href='https://google.com'>
                Primary Variant
              </ButtonLink>
              <ButtonLink variant='outline' href='https://google.com'>
                Outline Variant
              </ButtonLink>
              <ButtonLink variant='ghost' href='https://google.com'>
                Ghost Variant
              </ButtonLink>
              <ButtonLink variant='dark' href='https://google.com'>
                Dark Variant
              </ButtonLink>
              <ButtonLink variant='light' href='https://google.com'>
                Light Variant
              </ButtonLink>
            </div>
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              Button
            </Heading>
            <Paragraph className='mt-5'>Ordinary button with style.</Paragraph>
            <div className='flex flex-wrap gap-2'>
              <Button variant='primary'>Primary Variant</Button>
              <Button variant='outline'>Outline Variant</Button>
              <Button variant='ghost'>Ghost Variant</Button>
              <Button variant='dark'>Dark Variant</Button>
              <Button variant='light'>Light Variant</Button>
            </div>
            <div className='flex flex-wrap gap-2'>
              <Button disabled variant='primary'>
                Disabled
              </Button>
              <Button disabled variant='outline'>
                Disabled
              </Button>
              <Button disabled variant='ghost'>
                Disabled
              </Button>
              <Button disabled variant='dark'>
                Disabled
              </Button>
              <Button disabled variant='light'>
                Disabled
              </Button>
            </div>
            <div className='flex flex-wrap gap-2'>
              <Button isLoading variant='primary'>
                Disabled
              </Button>
              <Button isLoading variant='outline'>
                Disabled
              </Button>
              <Button isLoading variant='ghost'>
                Disabled
              </Button>
              <Button isLoading variant='dark'>
                Disabled
              </Button>
              <Button isLoading variant='light'>
                Disabled
              </Button>
            </div>
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              Custom 404 Page
            </Heading>
            <Paragraph className='mt-5'>Styled 404 page with some animation.</Paragraph>
            <div className='flex flex-wrap gap-2'>
              <ButtonLink href='/404'>Visit the 404 page</ButtonLink>
            </div>
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              SVG Icons
            </Heading>

            <FacebookIcon className='w-7' />

            <NextImage src='/svg/facebook.svg' alt='SVG icon as an image' width={28} height={28} />
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              Next Image
            </Heading>
            <NextImage src='/favicon/apple-icon.png' width={180} height={180} alt='Icon' />
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              Skeleton
            </Heading>
            <Paragraph className='mt-5'>Skeleton with shimmer effect</Paragraph>
            <Skeleton className='h-72 w-72' />
          </li>
          <li className='space-y-2'>
            <Heading level={3} as='h2'>
              New Libraries Examples
            </Heading>
            <Paragraph className='mt-5'>Examples of newly added libraries</Paragraph>
            <div className='space-y-4'>
              <div>
                <h4 className='mb-2 font-semibold'>Framer Motion</h4>
                <p className='mb-2 text-sm text-gray-600'>Animated div with hover effect</p>
                <FramerMotionExample />
              </div>
              <div>
                <h4 className='mb-2 font-semibold'>Sonner</h4>
                <p className='mb-2 text-sm text-gray-600'>Toast notifications</p>
                <SonnerExample />
              </div>
              <div>
                <h4 className='mb-2 font-semibold'>Swiper</h4>
                <p className='mb-2 text-sm text-gray-600'>Slider/carousel component</p>
                <SwiperExample />
              </div>
              <div>
                <h4 className='mb-2 font-semibold'>usehooks-ts</h4>
                <p className='mb-2 text-sm text-gray-600'>Useful React hooks collection</p>
                <p className='text-sm'>useLocalStorage, useDebounce, useWindowSize, etc.</p>
              </div>
            </div>
          </li>
        </ol>
      </Container>
    </section>
  );
}
