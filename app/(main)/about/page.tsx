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
          'flex w-full justify-center text-5xl font-black sm:text-7xl',
          titleFont.className,
        )}>
        Hey There 👋
      </div>

      <div className="grid grid-cols-1 grid-rows-1 place-items-start justify-items-center gap-16 p-4 md:grid-cols-2 md:place-items-center">
        <div className="flex shrink rotate-0 flex-col items-center justify-center gap-16 sm:rotate-3">
          <ProfileImage
            className="rounded-xl ring-2"
            src={PROFILE_IMAGE_SRC}
            alt={PROFILE_IMAGE_ALT}
            blurDataURL={PROFILE_IMAGE_BLUR_DATA_URL}
          />

          <Contact />
        </div>

        <div
          // TODO
          className={cn(
            'text-justify text-2xl opacity-75',
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
