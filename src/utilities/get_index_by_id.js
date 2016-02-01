export function getIndexById(state = [], id) {
  let index = -1

  for (let i = 0; i < state.length && index === -1; ++i) {
    if (state[i].id === id) index = i;
  }

  return index
}
