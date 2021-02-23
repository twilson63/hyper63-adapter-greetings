import adapter from './adapter.js'

export default function () {
  return {
    id: 'greeting',
    port: 'echo',
    load: () => ({}),
    link: env => _ => adapter(env)
  }
}


