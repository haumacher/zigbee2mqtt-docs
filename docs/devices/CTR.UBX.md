---
title: "Airam CTR.UBX control via MQTT"
description: "Integrate your Airam CTR.UBX via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Airam CTR.UBX

|     |     |
|-----|-----|
| Model | CTR.UBX  |
| Vendor  | Airam  |
| Description | CTR.U remote BX |
| Exposes | action, linkquality |
| Picture | ![Airam CTR.UBX](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/CTR.UBX.jpg) |


## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/#device-specific-configuration)*

* `simulated_brightness`: Set to `true` to simulate a `brightness` value (default: `false`).
If this device provides a `brightness_move_up` or `brightness_move_down` action it is possible to specify the update
interval and delta. This can be done by instead of specifying `true`:

```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_step_up`, `brightness_step_down`, `brightness_move_up`, `brightness_move_down`, `brightness_stop`, `recall_*`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

