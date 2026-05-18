import { ModulePlaceholder } from '@/components/ModulePlaceholder';
export const metadata = { title: 'Module 3.4 : Forensics — Académie Cybersécurité' };
export default function Page() {
  return <ModulePlaceholder number="3.4" title="Forensics & Analyse d'Incidents" description="Analyse de systèmes compromis, preuves numériques, rapports d'incidents" level="Avancé" duration="10-12 heures" prerequisites="Module 3.3" prevHref="/modules/avance/blue-team" prevLabel="Module 3.3" nextHref="/modules/avance/cloud-security" nextLabel="Module 3.5" />;
}
