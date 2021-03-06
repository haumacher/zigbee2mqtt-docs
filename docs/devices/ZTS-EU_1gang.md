---
title: "Moes ZTS-EU_1gang control via MQTT"
description: "Integrate your Moes ZTS-EU_1gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZTS-EU_1gang

|     |     |
|-----|-----|
| Model | ZTS-EU_1gang  |
| Vendor  | Moes  |
| Description | Wall touch light switch (1 gang) |
| Exposes | switch (state), linkquality |
| Picture | ![Moes ZTS-EU_1gang](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/ZTS-EU_1gang.jpg) |


## Notes

None



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

