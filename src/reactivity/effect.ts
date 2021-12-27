import { Dep, createDep } from './dep'

let activeEffect: Function | undefined
const targetMap = new WeakMap<any, DepsMap>()

export type DepsMap = Map<any, Dep>

/**
 *
 * @param fn 副作用函数
 */
export function effect(fn: Function) {
  activeEffect = fn
  fn()
  activeEffect = undefined
}

// 追踪目标对象，将当前 activeEffect 添加进 dep
export function track(target: Object, key: unknown) {
  if (activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()))
    }

    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = createDep()))
    }
    dep.add(activeEffect)
  }
}

// 触发目标对象 dep 中的 effects
export function trigger(target: Object, key: unknown) {
  const depsMap = targetMap.get(target)
  const dep = depsMap?.get(key)
  dep?.forEach((effect) => {
    effect()
  })
}
