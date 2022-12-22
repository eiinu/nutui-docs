import { Plugin } from 'vite';
/**
 * @param newFilename {string}
 * @returns {import('vite').Plugin}
 */
export const renameIndexPlugin = (oldFileName: string, newFilename: string) => {
  if (!newFilename) return;

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options: any, bundle: any) {
      const indexHtml = bundle[oldFileName];
      indexHtml.fileName = newFilename;
    }
  } as Plugin;
};
