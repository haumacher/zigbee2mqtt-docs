---
title: "SONOFF S31ZB control via MQTT"
description: "Integrate your SONOFF S31ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF S31ZB

|     |     |
|-----|-----|
| Model | S31ZB  |
| Vendor  | SONOFF  |
| Description | Zigbee smart plug (US version) |
| Exposes | switch (state), linkquality |
| Picture | ![SONOFF S31ZB](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/S31ZB.jpg) |


## Notes


### Pairing
After first power on, it should enter pairing mode. To pair to a new network, long press reset button for 5s until the Wi-Fi LED indicator changes to a cycle of two short flashes and one long flash, then release.



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

