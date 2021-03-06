---
title: "Aurora Lighting AU-A1ZBRC control via MQTT"
description: "Integrate your Aurora Lighting AU-A1ZBRC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Aurora Lighting AU-A1ZBRC

|     |     |
|-----|-----|
| Model | AU-A1ZBRC  |
| Vendor  | Aurora Lighting  |
| Description | AOne smart remote |
| Exposes | battery, action, linkquality |
| Picture | ![Aurora Lighting AU-A1ZBRC](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/AU-A1ZBRC.jpg) |


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

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_step_up`, `brightness_step_down`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

