---
title: "Lutron Z3-1BRL control via MQTT"
description: "Integrate your Lutron Z3-1BRL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Lutron Z3-1BRL

|     |     |
|-----|-----|
| Model | Z3-1BRL  |
| Vendor  | Lutron  |
| Description | Aurora smart bulb dimmer |
| Exposes | action, brightness, linkquality |
| Picture | ![Lutron Z3-1BRL](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/Z3-1BRL.jpg) |


## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/#device-specific-configuration)*

* `legacy`: Set to `false` to disable the legacy integration (highly recommended!) (default: true)


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `brightness`.

### Brightness (numeric)
Value can be found in the published state on the `brightness` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

