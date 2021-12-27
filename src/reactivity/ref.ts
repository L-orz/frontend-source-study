import { track, trigger } from './effect'

export interface Ref<T = any> {
  value: T
}

export function ref<T>(raw?: T): Ref<T> {
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
