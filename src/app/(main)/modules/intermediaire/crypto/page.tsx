import { ModulePlaceholder } from '@/components/ModulePlaceholder';
export const metadata = { title: 'Module 2.4 : Cryptographie — Académie Cybersécurité' };
export default function Page() {
  return <ModulePlaceholder number="2.4" title="Cryptographie & Chiffrement" description="Chiffrement symétrique, asymétrique, hash, TLS/SSL" level="Intermédiaire" duration="6-8 heures" prerequisites="Module 1.2" prevHref="/modules/intermediaire/web-security" prevLabel="Module 2.3" nextHref="/modules/intermediaire/wifi" nextLabel="Module 2.5" />;
}
