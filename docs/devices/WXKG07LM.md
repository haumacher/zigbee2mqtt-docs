---
title: "Xiaomi WXKG07LM control via MQTT"
description: "Integrate your Xiaomi WXKG07LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi WXKG07LM

|     |     |
|-----|-----|
| Model | WXKG07LM  |
| Vendor  | Xiaomi  |
| Description | Aqara D1 double key wireless wall switch |
| Exposes | battery, voltage, action, linkquality |
| Picture | ![Xiaomi WXKG07LM](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/WXKG07LM.jpg) |


## Notes


### Deprecated click event
By default this device exposes a deprecated `click` event. It's recommended to use the `action` event instead.

To disable the `click` event, set `legacy: false` for this device in `configuration.yaml`. Example:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/#device-specific-configuration)*

* `legacy`: Set to `false` to disable the legacy integration (highly recommended!) (default: true)



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_left`, `single_right`, `single_both`, `double_left`, `double_right`, `double_both`, `hold_left`, `hold_right`, `hold_both`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

