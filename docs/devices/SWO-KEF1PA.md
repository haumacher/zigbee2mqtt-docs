---
title: "Swann SWO-KEF1PA control via MQTT"
description: "Integrate your Swann SWO-KEF1PA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Swann SWO-KEF1PA

|     |     |
|-----|-----|
| Model | SWO-KEF1PA  |
| Vendor  | Swann  |
| Description | Key fob remote |
| Exposes | action, linkquality |
| Picture | ![Swann SWO-KEF1PA](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/SWO-KEF1PA.jpg) |


## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/#device-specific-configuration)*

* `legacy`: Set to `false` to disable the legacy integration (highly recommended!) (default: true)



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `home`, `sleep`, `away`, `panic`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

