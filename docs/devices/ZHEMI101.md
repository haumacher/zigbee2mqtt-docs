---
title: "Develco ZHEMI101 control via MQTT"
description: "Integrate your Develco ZHEMI101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Develco ZHEMI101

|     |     |
|-----|-----|
| Model | ZHEMI101  |
| Vendor  | Develco  |
| Description | Energy meter |
| Exposes | power, energy, linkquality |
| Picture | ![Develco ZHEMI101](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/ZHEMI101.jpg) |


## Notes

None



## Exposes

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

