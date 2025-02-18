import { CertificateViewProps } from './type';

const CertificateView: React.FC<CertificateViewProps> = ({ certificate }) => {
  return (
    <div>
      - Certificate view
      {certificate.title}
      {certificate.description}
    </div>
  );
};

export { CertificateView };
