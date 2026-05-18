import { ModulePlaceholder } from '@/components/ModulePlaceholder';
export const metadata = { title: 'Module 3.5 : Sécurité Cloud — Académie Cybersécurité' };
export default function Page() {
  return <ModulePlaceholder number="3.5" title="Sécurité Cloud" description="AWS, Azure, GCP — IAM, misconfiguration, threat detection dans le cloud" level="Avancé" duration="12-15 heures" prerequisites="Module 3.1" prevHref="/modules/avance/forensics" prevLabel="Module 3.4" nextHref="/modules/avance/gouvernance" nextLabel="Module 3.6" />;
}
