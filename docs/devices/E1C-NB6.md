---
title: "Sengled E1C-NB6 control via MQTT"
description: "Integrate your Sengled E1C-NB6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Sengled E1C-NB6

|     |     |
|-----|-----|
| Model | E1C-NB6  |
| Vendor  | Sengled  |
| Description | Smart plug |
| Exposes | switch (state), linkquality |
| Picture | ![Sengled E1C-NB6](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/E1C-NB6.jpg) |


## Notes

None


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

