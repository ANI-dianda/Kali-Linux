import { ModulePlaceholder } from '@/components/ModulePlaceholder';
export const metadata = { title: 'Module 2.3 : Sécurité Web — Académie Cybersécurité' };
export default function Page() {
  return <ModulePlaceholder number="2.3" title="Sécurité Web (OWASP Top 10)" description="SQLi, XSS, CSRF, IDOR et les 10 vulnérabilités web les plus critiques" level="Intermédiaire" duration="10-12 heures" prerequisites="Module 2.2" prevHref="/modules/intermediaire/scanning" prevLabel="Module 2.2" nextHref="/modules/intermediaire/crypto" nextLabel="Module 2.4" />;
}
