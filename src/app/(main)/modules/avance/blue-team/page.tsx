import { ModulePlaceholder } from '@/components/ModulePlaceholder';
export const metadata = { title: 'Module 3.3 : Blue Team & SOC — Académie Cybersécurité' };
export default function Page() {
  return <ModulePlaceholder number="3.3" title="Blue Team & Défense (SOC, SIEM)" description="Gestion d'un SOC, configuration SIEM, analyse de logs, réponse aux incidents" level="Avancé" duration="12-15 heures" prerequisites="Module 2.3" prevHref="/modules/avance/post-exploitation" prevLabel="Module 3.2" nextHref="/modules/avance/forensics" nextLabel="Module 3.4" />;
}
