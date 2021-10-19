import * as path from "path";
import { base, domain } from "../vuepress.config";

export const devicesBaseDir = path.resolve(__dirname, '..', 'docs', 'devices');
export const imageBaseDir = path.resolve(__dirname, '..', 'public', 'images', 'devices');
export const imageBaseUrl = domain + base + 'images/devices';
