import { ref, computed } from '../'

test('ref & effect', () => {
  const a = ref(1)
  const b = computed(() => {
    return `b is ${a.value + 1}`
  })

  expect(b.value).toBe('b is 2')

  a.value = 10
  expect(b.value).toBe('b is 11')
})
