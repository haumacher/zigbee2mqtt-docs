---
title: "TuYa TS0215A_sos control via MQTT"
description: "Integrate your TuYa TS0215A_sos via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TS0215A_sos.md)*

# TuYa TS0215A_sos

| Model | TS0215A_sos  |
| Vendor  | TuYa  |
| Description | SOS button |
| Exposes | battery, action, linkquality |
| Picture | ![TuYa TS0215A_sos](../../public/images/devices/TS0215A_sos.jpg) |

## Notes

None


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `emergency`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

