import { Section } from '../ui/Section';
import { DownloadCTA } from '../ui/DownloadCTA';

export function Download() {
  return (
    <Section id="telecharger" className="relative">
      <div className="container-px">
        <div className="reveal">
          <DownloadCTA
            variant="dark"
            title="Téléchargez ImoFlex dès aujourd'hui"
            subtitle="Disponible sur Google Play et App Store. Scannez le QR code pour installer en un instant."
          />
        </div>
      </div>
    </Section>
  );
}
