---
title: "Xiaomi JTYJ-GD-01LM/BW control via MQTT"
description: "Integrate your Xiaomi JTYJ-GD-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi JTYJ-GD-01LM/BW

|     |     |
|-----|-----|
| Model | JTYJ-GD-01LM/BW  |
| Vendor  | Xiaomi  |
| Description | MiJia Honeywell smoke detector |
| Exposes | smoke, battery_low, tamper, battery, sensitivity, smoke_density, selftest, voltage, test, linkquality |
| Picture | ![Xiaomi JTYJ-GD-01LM/BW](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/JTYJ-GD-01LM-BW.jpg) |


## Notes


### Pairing
Plug the device in and wait for around 5mins, while it performs its self-tests.
A successful self-test is indicated by couple of beeps and a steady green led.
Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.


### Sensitivity
The sensitivity can be changed by publishing to `zigbee2mqtt/FRIENDLY_NAME/set`
`{"sensitivity": "SENSITIVITY"}` where `SENSITIVITY` is one of the following
values: `low`, `medium`,  `high`.

### Self-test
A self-test can be trigged by publishing to `zigbee2mqtt/FRIENDLY_NAME/set`
`{"selftest": ""}`.
If the selftest is executed successfully you will hear the device beep in 30 seconds.



## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

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

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (enum)
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Smoke_density (numeric)
Value can be found in the published state on the `smoke_density` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Selftest (enum)
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"selftest": NEW_VALUE}`.
The possible values are: ``.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Test (binary)
Test mode activated.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.
