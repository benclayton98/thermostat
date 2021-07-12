## Domain Model

|Object|Property|Message|Output|
|---|---|---|---|
|thermostat|degrees@integer|up()|@integer|
|---    |---    |down()|@integer|
|---    |---    |checkUsage()|@string|
|powerSavingMode|on/off@boolean|turnOn()|@boolean|
|---    |---    |turnOff()|@boolean|
|---    |---    |reset()|@integer|
