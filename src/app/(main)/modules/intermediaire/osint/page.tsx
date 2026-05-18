import { ModulePlaceholder } from '@/components/ModulePlaceholder';
export const metadata = { title: 'Module 2.1 : Reconnaissance & OSINT — Académie Cybersécurité' };
export default function Page() {
  return <ModulePlaceholder number="2.1" title="Reconnaissance & OSINT" description="Maltego, theHarvester, Shodan, collecte d'informations publiques" level="Intermédiaire" duration="6-8 heures" prerequisites="Niveau Débutant complet" prevHref="/modules/debutant/securite-basique" prevLabel="Module 1.4" nextHref="/modules/intermediaire/scanning" nextLabel="Module 2.2" />;
}
