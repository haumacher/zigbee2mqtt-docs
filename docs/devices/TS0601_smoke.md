---
title: "TuYa TS0601_smoke control via MQTT"
description: "Integrate your TuYa TS0601_smoke via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TS0601_smoke.md)*

# TuYa TS0601_smoke

| Model | TS0601_smoke  |
| Vendor  | TuYa  |
| Description | Smoke sensor |
| Exposes | smoke, battery_low, linkquality |
| Picture | ![TuYa TS0601_smoke](../../public/images/devices/TS0601_smoke.jpg) |

## Notes

None


## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

