---
title: "Hej GLSK3ZB-1711 control via MQTT"
description: "Integrate your Hej GLSK3ZB-1711 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Hej GLSK3ZB-1711

|     |     |
|-----|-----|
| Model | GLSK3ZB-1711  |
| Vendor  | Hej  |
| Description | Goqual 1 gang Switch |
| Exposes | switch (state), linkquality |
| Picture | ![Hej GLSK3ZB-1711](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/GLSK3ZB-1711.jpg) |


## Notes

None



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

