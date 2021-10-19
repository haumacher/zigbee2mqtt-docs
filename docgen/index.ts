import * as path from "path";
import throat from "throat";
import { devices } from 'zigbee-herdsman-converters';
import generateDevice from "./generate_device";
import generate_supportedDevices from "./generate_supported-devices";
import { base, domain } from "../vuepress.config";

const devicesBaseDir = path.resolve(__dirname, '..', 'docs', 'devices');
const imageBaseDir = path.resolve(__dirname, '..', 'public', 'images', 'devices');
const imageBaseUrl = domain + base + 'images/devices';


async function generateDevices() {
  const genDevThrottled = throat(20, device => generateDevice({
    device,
    imageBaseDir,
    imageBaseUrl,
    devicesBaseDir
  }));
  await Promise.all(devices.map(genDevThrottled));
  console.log('Generated device-pages');
}

( async function () {
  // await cleanDevices();
  await Promise.all([
    generate_supportedDevices({ imageBaseDir, imageBaseUrl }),
    generateDevices(),
  ]);
  console.log('Done');
} )();
