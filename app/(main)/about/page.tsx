import { ProfileDetails } from '@/components/About';
import {
  PROFILE_IMAGE_ALT,
  PROFILE_IMAGE_BLUR_DATA_URL,
  PROFILE_IMAGE_SRC,
} from '@/components/About/contant';
import { Contact } from '@/components/Contact';
import { ProfileImage } from '@/components/ProfileImage';
import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineTitle,
} from '@/components/Timeline';
import { cn } from '@/lib/utils';
import { NextPage } from 'next';
import { titleFont } from '../fonts';

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-16 py-8">
      <div
        className={cn(
          'flex w-full justify-center text-5xl font-black opacity-75 sm:text-7xl',
          titleFont.className,
        )}>
        Hey There 👋
      </div>

      <div className="xk:gap-32 flex w-full flex-col justify-evenly gap-8 p-4 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-col items-center gap-8 lg:w-1/3 lg:gap-16">
          <ProfileImage
            className="rotate-0 rounded-xl object-contain ring-2 max-sm:max-h-[35vh] lg:rotate-3"
            src={PROFILE_IMAGE_SRC}
            alt={PROFILE_IMAGE_ALT}
            blurDataURL={PROFILE_IMAGE_BLUR_DATA_URL}
          />

          <Contact />
        </div>

        <div
          className={cn(
            'text-justify text-2xl opacity-75 lg:-mt-24 lg:w-2/3',
            titleFont.className,
          )}>
          <ProfileDetails />
        </div>
      </div>

      <Timeline>
        <TimelineItem>
          <TimelineTitle>This is the timeline title</TimelineTitle>
          <TimelineDescription>This is the description</TimelineDescription>
          <TimelineContent>This is the content</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineTitle>This is the timeline title</TimelineTitle>
          <TimelineDescription>This is the description</TimelineDescription>
          <TimelineContent>This is the content</TimelineContent>
        </TimelineItem>
      </Timeline>

      <div>- Experience</div>
      <div>- Workspace</div>
      <div>- Stack</div>
      <div>- Bookmarks</div>
      <div>- Books</div>
      <div>- Gallery</div>
    </div>
  );
};

export default AboutPage;
