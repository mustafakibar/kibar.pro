import { ProfileDetails } from '@/components/About';
import {
  PROFILE_IMAGE_ALT,
  PROFILE_IMAGE_BLUR_DATA_URL,
  PROFILE_IMAGE_SRC,
} from '@/components/About/contant';
import { Contact } from '@/components/Contact';
import { Parallax } from '@/components/Parallax';
import { ProfileImage } from '@/components/ProfileImage';
import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineTitle,
} from '@/components/Timeline';
import { cn, getRandomInt } from '@/lib/utils';
import { NextPage } from 'next';
import { FaRust } from 'react-icons/fa';
import { FaAws, FaDocker, FaReact } from 'react-icons/fa6';
import { TbBrandFlutter, TbBrandKotlin } from 'react-icons/tb';
import { titleFont } from '../fonts';

const parallaxIconOpacity = 0.5;
const parallaxIconSize = 64;
const parallaxAnimationReverse = (getRandomInt(0, 10) % 2) / 2 == 0;
const parallaxAnimationDurationInMillis = 50_000;

const SkillsParallax = ({ className }: { className: string }) => {
  return (
    <Parallax
      className={className}
      durationInMillis={parallaxAnimationDurationInMillis}
      reverse={parallaxAnimationReverse}>
      <FaRust size={parallaxIconSize} opacity={parallaxIconOpacity} />
      <TbBrandKotlin size={parallaxIconSize} opacity={parallaxIconOpacity} />
      <TbBrandFlutter size={parallaxIconSize} opacity={parallaxIconOpacity} />
      <FaReact size={parallaxIconSize} opacity={parallaxIconOpacity} />
      <FaAws size={parallaxIconSize} opacity={parallaxIconOpacity} />
      <FaDocker size={parallaxIconSize} opacity={parallaxIconOpacity} />
    </Parallax>
  );
};

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-16 py-8">
      <div
        className={cn(
          'flex justify-center text-5xl font-black opacity-75 sm:text-7xl',
          titleFont.className,
        )}>
        Hey There 👋
      </div>

      <div className="flex flex-col justify-evenly gap-8 p-4 lg:flex-row lg:items-center lg:gap-16 xl:gap-32">
        <div className="flex flex-col items-center gap-8 lg:w-1/3 lg:gap-16">
          <ProfileImage
            className="rotate-0 rounded-xl object-contain ring-2 max-sm:max-h-[35vh] lg:rotate-3"
            src={PROFILE_IMAGE_SRC}
            alt={PROFILE_IMAGE_ALT}
            blurDataURL={PROFILE_IMAGE_BLUR_DATA_URL}
          />

          <Contact />

          <SkillsParallax className="lg:hidden" />
        </div>

        <div
          className={cn(
            'flex flex-col gap-8 text-justify text-2xl opacity-75 lg:-mt-24 lg:w-2/3 lg:gap-16',
            titleFont.className,
          )}>
          <ProfileDetails />
        </div>
      </div>

      <div className="flex justify-center">
        <SkillsParallax className="max-lg:hidden" />
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
