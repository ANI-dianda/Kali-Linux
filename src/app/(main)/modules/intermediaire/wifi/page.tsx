import { ModulePlaceholder } from '@/components/ModulePlaceholder';
export const metadata = { title: 'Module 2.5 : WiFi & Réseaux sans fil — Académie Cybersécurité' };
export default function Page() {
  return <ModulePlaceholder number="2.5" title="WiFi & Réseaux sans fil" description="WPA2/WPA3, attaques WiFi courantes et protections" level="Intermédiaire" duration="7-9 heures" prerequisites="Module 1.3" prevHref="/modules/intermediaire/crypto" prevLabel="Module 2.4" nextHref="/modules/intermediaire/malware" nextLabel="Module 2.6" />;
}
