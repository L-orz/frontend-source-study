export type Dep = Set<Function>

export function createDep(): Dep {
  return new Set()
}
