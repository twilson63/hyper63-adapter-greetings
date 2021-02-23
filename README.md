# README

hyper63 greetings adapter for the hyper63 echo port

This adapter is used in hyper63 to support for the echo port

## Example

``` js
import echoPort from 'hyper63-port-echo'
import greetings from 'hyper63-adapter-greetings'

export default {
  app: express,
  adapters: [
    { port: echoPort, plugins: [greetings()] }
  ]
}
```
