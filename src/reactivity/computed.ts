import { ref, Ref } from './ref'
import { effect } from './effect'

export function computed(getter: Function): Ref {
  const r = ref()
  effect(() => {
    r.value = getter()
  })
  return r
}
