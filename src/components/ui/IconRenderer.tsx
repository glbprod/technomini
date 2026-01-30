import {
  BookOpen,
  Wrench,
  Brain,
  CheckCircle,
  Settings,
  Box,
  Plug,
  Code2,
  Bot,
  Microscope,
  Code,
  SquareStack,
  FileText,
  HelpCircle,
  ClipboardList,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

// Mapping des noms d'icônes vers les composants Lucide
const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Wrench,
  Brain,
  CheckCircle,
  Settings,
  Box,
  Plug,
  Code2,
  Bot,
  Microscope,
  Code,
  SquareStack,
  FileText,
  HelpCircle,
  ClipboardList,
  BarChart3,
};

export interface IconRendererProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * Composant utilitaire pour afficher dynamiquement des icônes Lucide
 * @param name - Nom de l'icône Lucide (ex: "BookOpen", "Settings")
 * @param size - Taille de l'icône en pixels (défaut: 20)
 * @param className - Classes CSS additionnelles
 * @param strokeWidth - Épaisseur du trait (défaut: 2)
 */
export function IconRenderer({
  name,
  size = 20,
  className = '',
  strokeWidth = 2,
}: IconRendererProps) {
  const Icon = iconMap[name];

  // Si l'icône n'existe pas dans le mapping, afficher un placeholder
  if (!Icon) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return (
      <span className={className} style={{ width: size, height: size }}>
        ?
      </span>
    );
  }

  return <Icon size={size} className={className} strokeWidth={strokeWidth} />;
}
