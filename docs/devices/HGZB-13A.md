---
title: "Nue / 3A HGZB-13A control via MQTT"
description: "Integrate your Nue / 3A HGZB-13A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Nue / 3A HGZB-13A

|     |     |
|-----|-----|
| Model | HGZB-13A  |
| Vendor  | Nue / 3A  |
| Description | Door/window sensor |
| Exposes | contact, battery_low, tamper, linkquality |
| Picture | ![Nue / 3A HGZB-13A](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/HGZB-13A.jpg) |


## Notes

None



## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

