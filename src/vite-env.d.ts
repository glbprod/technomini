/// <reference types="vite/client" />

// Déclaration pour les imports de fichiers markdown convertis en HTML
declare module '*.md' {
  export const html: string;
  export const attributes: Record<string, unknown>;
  export const toc: Array<{ level: number; content: string }>;
}
