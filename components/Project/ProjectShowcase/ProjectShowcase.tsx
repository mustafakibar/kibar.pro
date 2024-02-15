import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ProjectShowcaseProps } from '.';

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  className,
  ...props
}) => {
  const hasImages = project.images?.length ?? 0 > 0;

  return (
    <div className={cn('p-2', className)} {...props}>
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      {hasImages && (
        <div>
          {project.images?.map(({ src, alt }, index) => (
            <Image key={index} src={src} alt={alt} />
          ))}
        </div>
      )}
      <div>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          Github Link
        </a>
      </div>
    </div>
  );
};

export { ProjectShowcase };
