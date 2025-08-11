const list = [
  { id: 1, role: 'ai' },
  { id: 2, role: 'tool' },
  { id: 3, role: 'system' },
  { id: 4, role: 'human' }
]

const filtered = list.filter(r => r.role === 'human')

console.log(filtered)