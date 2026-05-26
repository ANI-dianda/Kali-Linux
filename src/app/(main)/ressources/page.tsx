import { ExternalLink } from 'lucide-react';

export const metadata = { title: 'Ressources — KaliAcademy' };

const tools = [
  { emoji: '💻', name: 'VirtualBox',    desc: 'Virtualisation de machines pour créer ton laboratoire réseau personnel.',          label: 'Télécharger', href: 'https://www.virtualbox.org/wiki/Downloads' },
  { emoji: '🌐', name: 'GNS3',          desc: 'Émulateur réseau puissant pour simuler des équipements Cisco, Juniper, etc.',       label: 'Télécharger', href: 'https://www.gns3.com/software/download' },
  { emoji: '🔍', name: 'Wireshark',     desc: 'Analyseur de protocoles pour capturer et examiner le trafic réseau.',               label: 'Télécharger', href: 'https://www.wireshark.org/download.html' },
  { emoji: '📊', name: 'Packet Tracer', desc: 'Outil Cisco pour simuler et configurer des réseaux pédagogiques.',                  label: 'Accéder',     href: 'https://www.netacad.com/courses/packet-tracer' },
  { emoji: '🖥️', name: 'VMware ESXi',   desc: 'Hyperviseur professionnel pour la virtualisation avancée.',                        label: 'Accéder',     href: 'https://www.vmware.com/products/esxi-and-esx.html' },
  { emoji: '🐧', name: 'Ubuntu Server', desc: "Système d'exploitation Linux pour tes serveurs réseau.",                            label: 'Télécharger', href: 'https://ubuntu.com/download/server' },
];

export default function RessourcesPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <div className="px-6 sm:px-8 lg:px-12 py-16 lg:py-24 max-w-3xl mx-auto">

        {/* En-tête */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#59FF88]" />
            <span className="font-orbitron text-xs font-bold tracking-widest text-[#59FF88] uppercase">Ressources</span>
          </div>
          <h1 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
            🔧 Outils Essentiels
          </h1>
          <p className="font-exo-2 text-sm text-gray-500">
            Les logiciels indispensables pour travailler sur les réseaux.
          </p>
        </div>

        {/* Cartes verticales */}
        <div className="space-y-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] shadow-[0_0_30px_rgba(89,255,136,0.03)] hover:border-[#59FF88]/25 hover:-translate-y-0.5 transition-all duration-300 px-6 py-5"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-2xl shrink-0">{tool.emoji}</span>
                <div className="min-w-0">
                  <p className="font-exo-2 text-sm font-bold text-white mb-0.5">{tool.name}</p>
                  <p className="font-exo-2 text-xs text-gray-500 leading-relaxed">{tool.desc}</p>
                </div>
              </div>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 shrink-0 ml-6 font-exo-2 text-xs font-bold text-[#59FF88] hover:brightness-110 transition-all"
              >
                {tool.label} <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
