import { effect, ref } from '../'

test('ref & effect', () => {
  const a = ref(1)
  let b

  effect(() => {
    b = `b is ${a.value}`
  })

  expect(a.value).toBe(1)

  a.value = 2
  expect(b).toBe('b is 2')
})
