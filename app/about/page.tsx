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
import { Text } from '@/components/typography';
import {
  ABOUT_DESK_IMAGE_ALT,
  ABOUT_DESK_IMAGE_SRC,
  ABOUT_PROFILE_IMAGE_ALT,
  ABOUT_PROFILE_IMAGE_BLUR_DATA_URL,
  ABOUT_PROFILE_IMAGE_SRC,
} from '@/lib/constants/image';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import type { Metadata, NextPage } from 'next';
import Image from 'next/image';
import { FaToolbox } from 'react-icons/fa6';
import { TbSchool } from 'react-icons/tb';
import { titleFont } from '../fonts';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior full-stack engineer based in Istanbul. Background, experience, education, and the workspace I build from.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About · Mustafa Kibar',
    description:
      'Senior full-stack engineer based in Istanbul. Background, experience, education, and the workspace I build from.',
    url: '/about',
  },
};

const AboutPage: NextPage = () => {
  return (
    <div className="before:bg-primary/20 after:bg-secondary/15 relative flex flex-col gap-8 py-4 before:pointer-events-none before:absolute before:top-40 before:left-0 before:-z-10 before:h-[460px] before:w-[460px] before:-translate-x-1/3 before:rounded-full before:blur-[130px] after:pointer-events-none after:absolute after:top-[60%] after:right-0 after:-z-10 after:h-[420px] after:w-[420px] after:translate-x-1/3 after:rounded-full after:blur-[130px] lg:gap-24 lg:py-8">
      <div className="flex flex-col justify-evenly gap-10 md:p-16 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
        {/* Image & Contact & Skills */}
        <div className="flex flex-col items-center gap-4 lg:w-1/3 lg:gap-16">
          <ProfileImage
            className="ring-primary rounded-xl ring-2 max-lg:max-w-48 dark:brightness-75"
            src={ABOUT_PROFILE_IMAGE_SRC}
            alt={ABOUT_PROFILE_IMAGE_ALT}
            blurDataURL={ABOUT_PROFILE_IMAGE_BLUR_DATA_URL}
            width={512}
            height={512}
          />

          <Contact />

          <ParallaxSkills className="lg:hidden" />
        </div>

        {/* Profile Details */}
        <div
          className={cn(
            'flex flex-col gap-10 lg:-mt-16 lg:w-2/3 lg:gap-16',
            titleFont.className,
          )}>
          <div className="flex flex-col gap-6 antialiased">
            <h1 className="text-3xl leading-tight font-semibold tracking-tight max-md:text-center md:text-4xl lg:text-5xl">
              Hi <span aria-hidden>👋</span> I&apos;m Mustafa K
              <span className="tracking-tighter">i</span>bar
            </h1>

            <div className="text-foreground/80 flex flex-col gap-4 text-pretty">
              <Text className="text-base leading-relaxed md:text-lg">
                I&apos;ve been building software since 2011, focused on shipping
                scalable, maintainable systems end-to-end — from data layer to
                UI.
              </Text>
              <Text className="text-foreground text-base leading-relaxed font-semibold md:text-lg">
                Day-to-day stack: TypeScript, React, Next.js, Node.js, Rust,
                Kotlin, React Native, and Flutter.
              </Text>
              <Text className="text-base leading-relaxed md:text-lg">
                I care about clean architecture, strong developer experience,
                and tools that get out of the user&apos;s way. Lately, my
                interests lean toward systems programming, AI tooling, and the
                boring fundamentals that make products feel fast and reliable.
              </Text>
            </div>
          </div>

          <ParallaxSkills className="max-lg:hidden" />
        </div>
      </div>

      <div className="flex flex-col gap-16 px-4 md:px-8 lg:gap-20">
        <div className="flex flex-col place-items-center items-start gap-16 lg:grid lg:grid-cols-2 lg:gap-20">
          <motion.div
            layout
            className="flex w-full flex-col gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1.5, ease: 'anticipate' }}
            viewport={{ once: true }}>
            <SectionHeading
              title={'Education'}
              titleWrapperClassName="max-lg:justify-center"
              icon={<TbSchool size={24} />}
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
          </motion.div>

          <motion.div
            layout
            className="flex w-full flex-col gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1.5, ease: 'anticipate' }}
            viewport={{ once: true }}>
            <SectionHeading
              title="Environment"
              titleWrapperClassName="max-lg:justify-center"
              icon={<FaToolbox size={24} />}
            />

            <div>
              <ul className="divide-foreground/10 text-foreground/85 flex flex-col divide-y text-sm font-medium [&>li]:flex [&>li]:items-center [&>li]:justify-between [&>li]:gap-4 [&>li]:py-3 [&>li>span]:shrink-0 [&>li>span]:text-[0.68rem] [&>li>span]:font-semibold [&>li>span]:tracking-widest [&>li>span]:uppercase">
                <li>
                  Tischkönig Flex v2 Adjustable
                  <span className="text-highlight">Desk</span>
                </li>
                <li>
                  Anker Soundcore Motion+
                  <span className="text-highlight">Bluetooth Speaker</span>
                </li>
                <li>
                  SteelSeries Arctis Pro
                  <span className="text-highlight">Wireless Headset</span>
                </li>
                <li>
                  ViewSonic VP3268-4K
                  <span className="text-highlight">IPS Monitor</span>
                </li>
                <li>
                  Corsair 5000D <span className="text-highlight">Case</span>
                </li>
                <li>
                  Corsair RM850x
                  <span className="text-highlight">Power Supply</span>
                </li>
                <li>
                  Logitech G915 TKL Lightspeed
                  <span className="text-highlight">Wireless Keyboard</span>
                </li>
                <li>
                  Logitech G502 Lightspeed
                  <span className="text-highlight">Wireless Mouse</span>
                </li>
                <li>
                  AMD Ryzen 9 5900X 12-Core
                  <span className="text-highlight">CPU</span>
                </li>
                <li>
                  MSI Meg x570 Ace
                  <span className="text-highlight">Motherboard</span>
                </li>
                <li>
                  Asus GTX 1070 <span className="text-highlight">GPU</span>
                </li>
                <li>
                  G.Skill Trident Z Neo RGB 3600Mhz 16GB x2
                  <span className="text-highlight">RAM</span>
                </li>
                <li>
                  Seagate Firecuda 530 1GB
                  <span className="text-highlight">NVMe SSD</span>
                </li>
                <li>
                  Macbook M3 Pro <span className="text-highlight">Laptop</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="ring-foreground/10 relative aspect-[3/2] w-full overflow-hidden rounded-2xl ring-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}>
        <Image
          className="object-cover"
          src={ABOUT_DESK_IMAGE_SRC}
          alt={ABOUT_DESK_IMAGE_ALT}
          fill
          sizes="100vw"
          priority={false}
        />
        <div className="from-background/70 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
      </motion.div>
    </div>
  );
};

export default AboutPage;
