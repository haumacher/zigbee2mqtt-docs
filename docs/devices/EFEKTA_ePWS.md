---
title: "Custom devices (DiY) EFEKTA_ePWS control via MQTT"
description: "Integrate your Custom devices (DiY) EFEKTA_ePWS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) EFEKTA_ePWS

|     |     |
|-----|-----|
| Model | EFEKTA_ePWS  |
| Vendor  | Custom devices (DiY)  |
| Description | [Plant wattering sensor with e-ink display](https://efektalab.com/epws102) |
| Exposes | soil_moisture, battery, temperature, linkquality |
| Picture | ![Custom devices (DiY) EFEKTA_ePWS](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/EFEKTA_ePWS.jpg) |






## Exposes

### Soil_moisture (numeric)
Measured soil moisture value.
Value can be found in the published state on the `soil_moisture` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

