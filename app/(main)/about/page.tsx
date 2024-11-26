import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineTitle,
} from '@/components/Timeline';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ultricies, sapien quis venenatis tincidunt, dui velit ultrices mi, quis
        aliquam tellus leo a justo. Donec auctor, odio eu aliquet lacinia, elit
        velit ultricies eros, vitae finibus sapien ligula vitae nisi. Nullam ac
        tellus vitae nisl consectetur ultricies. Donec ultricies, sapien quis
        venenatis tincidunt, dui velit ultrices mi, quis aliquam tellus leo a
        justo. Donec auctor, odio eu aliquet lacinia, elit velit ultricies eros,
        vitae finibus sapien ligula vitae nisi. Nullam ac tellus vitae nisl
        consectetur ultricies.
      </p>

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
