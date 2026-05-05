import { LoadingCard } from '@/components/feedback/LoadingCard';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';

export default function CertificatesLoading() {
  return (
    <Container className="py-16">
      <Grid cols={{ md: 2, xl: 3 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </Grid>
    </Container>
  );
}
