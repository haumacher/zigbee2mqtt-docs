import { promises as fsp } from "fs";
import { promisify } from 'util';
import * as path from "path";
import * as glob from 'glob';
import { base } from "../../vuepress.config";

const distDir = path.resolve(__dirname, '..', '..', 'dist');

const hrefRgxp = /<a[^>]+href ?= ?"([^#?]+?)["#?]/ig;

async function findFiles(dir: string, type = 'html') {
  return promisify(glob)(`${ dir }/**/*.${ type }`);
}

async function checkFile(file: string, availableFiles: string[]) {
  const content = await fsp.readFile(file, 'utf-8');
  const linkToFiles = Array.from(content.matchAll(hrefRgxp))
    .map(x => x[1]) // get the matched part
    .filter(x => !x.match(/^https?:/)) // filter external links
    .filter(x => !x.endsWith('.md')) // ignore links to .md files
    .map(x => x.endsWith('/') ? `${ x }index.html` : x) // add index.html for links pointing to a directory
    .map(x => {
      if(!x.startsWith('/')) { // resolve relative links
        return path.join(base, path.dirname(file).substr(distDir.length), x);
      } else {
        return x;
      }
    })
    .map(x => x.substr(base.length));

  const broken = linkToFiles
    .filter(file => !availableFiles.includes(file))

  return { file, broken };
}

export async function checkLinks() {
  const files = await findFiles(distDir);
  const filesNormalized = files.map(f => f.substr(distDir.length + 1));
  const res = (await Promise.all(files.map(file => checkFile(file, filesNormalized))))
    .filter(r => r.broken.length);
  console.log(res);
}

( async function () {
  await checkLinks()
} )()
