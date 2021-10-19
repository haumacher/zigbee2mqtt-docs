---
title: "Brimate FZB8708HD-S1 control via MQTT"
description: "Integrate your Brimate FZB8708HD-S1 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/FZB8708HD-S1.md)*

# Brimate FZB8708HD-S1

| Model | FZB8708HD-S1  |
| Vendor  | Brimate  |
| Description | Smart motion sensor |
| Exposes | occupancy, battery_low, linkquality |
| Picture | ![Brimate FZB8708HD-S1](../../public/images/devices/FZB8708HD-S1.jpg) |

## Notes

None


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

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

