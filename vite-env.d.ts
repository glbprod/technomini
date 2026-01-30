/// <reference types="vite/client" />

import { ReactNode } from 'react';

// Déclaration pour les imports de fichiers markdown convertis en HTML
declare module '*.md' {
  export const react: ReactNode;
  export const html: string;
  export const attributes: Record<string, unknown>;
  export const toc: Array<{ level: number; content: string }>;
}
