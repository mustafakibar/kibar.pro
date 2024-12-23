export const dynamic = 'force-static';

import { ProfileDetails } from '@/components/About';
import {
  PROFILE_IMAGE_ALT,
  PROFILE_IMAGE_BLUR_DATA_URL,
  PROFILE_IMAGE_SRC,
} from '@/components/About/contant';
import { Contact } from '@/components/Contact';
import { ProfileImage } from '@/components/ProfileImage';
import { SectionHeading } from '@/components/SectionHeading';
import { ParallaxSkills } from '@/components/Skills';
import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineTitle,
} from '@/components/Timeline';
import { cn } from '@/lib/utils';
import { NextPage } from 'next';
import Image from 'next/image';
import { FaToolbox } from 'react-icons/fa6';
import { TbSchool } from 'react-icons/tb';
import { titleFont } from '../fonts';

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div
        className={cn(
          'flex justify-center text-center text-5xl font-black opacity-75',
        )}>
        Hey There 👋
      </div>

      <div className="flex flex-col justify-evenly gap-8 p-4 md:p-16 lg:flex-row lg:items-center lg:gap-16 xl:gap-32">
        {/* Image & Contact & Skills */}
        <div className="flex flex-col items-center gap-8 lg:w-1/3 lg:gap-16">
          <ProfileImage
            className="rotate-0 rounded-xl object-cover ring-2 ring-primary dark:brightness-75 max-sm:max-h-[35vh] lg:rotate-3"
            src={PROFILE_IMAGE_SRC}
            alt={PROFILE_IMAGE_ALT}
            blurDataURL={PROFILE_IMAGE_BLUR_DATA_URL}
          />

          <Contact />

          <ParallaxSkills className="lg:hidden" />
        </div>

        {/* Profile Details */}
        <div
          className={cn(
            'flex flex-col gap-8 text-justify text-xl opacity-75 lg:-mt-24 lg:w-2/3 lg:gap-16',
            titleFont.className,
          )}>
          <ProfileDetails />

          <ParallaxSkills className="max-lg:hidden" />
        </div>
      </div>

      <div className="flex grid-cols-3 flex-col place-items-center items-start gap-16 px-8 lg:grid">
        {/* Education */}
        <div className="flex w-full flex-col gap-8">
          <SectionHeading
            title={'Education'}
            titleWrapperClassName="max-lg:justify-center"
            icon={<TbSchool size={32} />}
          />

          <div className="flex max-lg:justify-center">
            <Timeline>
              <TimelineItem>
                <TimelineDescription>Present</TimelineDescription>
                <TimelineTitle>Computer Programming</TimelineTitle>
                <TimelineContent>Istanbul University</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDescription>2018-2020</TimelineDescription>
                <TimelineTitle>Public Administration</TimelineTitle>
                <TimelineContent>Eskisehir University</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDescription>2011-2013</TimelineDescription>
                <TimelineTitle>Rustu Unsal P.M.Y.O</TimelineTitle>
                <TimelineContent>Buca/Izmir</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDescription>2005-2009</TimelineDescription>
                <TimelineTitle>T.O.K.I Anatolian High School</TimelineTitle>
                <TimelineContent>Eryaman/Ankara</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDescription>1998-2005</TimelineDescription>
                <TimelineTitle>Meliksah Primary School</TimelineTitle>
                <TimelineContent>Sincan/Ankara</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDescription>1991</TimelineDescription>
                <TimelineTitle>Born</TimelineTitle>
                <TimelineContent>Yenimahalle/Ankara</TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

        {/* Environments */}
        <div className="flex w-full flex-col gap-8 lg:col-span-2">
          <SectionHeading
            title={'Environment'}
            titleWrapperClassName="lg:justify-end justify-center"
            icon={<FaToolbox size={32} />}
          />

          <div className="flex flex-col items-center justify-evenly gap-8 lg:items-end">
            <div>
              <Image
                className="object-fill"
                src={'/workspace/desk.webp'}
                alt={'My sweet desk'}
                width={512}
                height={512}
                placeholder={'blur'}
                blurDataURL={
                  'data:image/webp;base64,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'
                }
              />
            </div>

            <div>
              <ul className="flex flex-col gap-4 text-center font-bold [&>*:nth-child(odd)]:bg-primary/20 [&>*]:rounded-lg [&>*]:px-3 [&>*]:py-2">
                <li>
                  Tischkönig Flex v2 Adjustable{' '}
                  <span className="text-highlight">Desk</span>
                </li>
                <li>
                  Anker Soundcore Motion+{' '}
                  <span className="text-highlight">Bluetooth Speaker</span>
                </li>
                <li>
                  SteelSeries Arctis Pro{' '}
                  <span className="text-highlight">Wireless Headset</span>
                </li>
                <li>
                  ViewSonic VP3268-4K{' '}
                  <span className="text-highlight">IPS Monitor</span>
                </li>
                <li>
                  Corsair 5000D <span className="text-highlight">Case</span>
                </li>
                <li>
                  Corsair RM850x{' '}
                  <span className="text-highlight">Power Supply</span>
                </li>
                <li>
                  Logitech G915 TKL Lightspeed{' '}
                  <span className="text-highlight">Wireless Keyboard</span>
                </li>
                <li>
                  Logitech G502 Lightspeed{' '}
                  <span className="text-highlight">Wireless Mouse</span>
                </li>
                <li>
                  AMD Ryzen 9 5900X 12-Core{' '}
                  <span className="text-highlight">CPU</span>
                </li>
                <li>
                  MSI Meg x570 Ace{' '}
                  <span className="text-highlight">Motherboard</span>
                </li>
                <li>
                  Asus GTX 1070 <span className="text-highlight">GPU</span>
                </li>
                <li>
                  G.Skill Trident Z Neo RGB 3600Mhz 16GB x2{' '}
                  <span className="text-highlight">RAM</span>
                </li>
                <li>
                  Seagate Firecuda 530 1GB{' '}
                  <span className="text-highlight">NVMe SSD</span>
                </li>
                <li>
                  Macbook M3 Pro <span className="text-highlight">Laptop</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
