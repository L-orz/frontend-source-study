import { track, trigger } from './effect'

export function ref(raw: any) {
  let value = raw

  const r = {
    get value() {
      track(r, 'value')
      return value
    },

    set value(newValue: any) {
      value = newValue
      trigger(r, 'value')
    },
  }
  return r
}
