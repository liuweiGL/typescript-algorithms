import Collection from './Collection'

type flag = -1 | 0 | 1

export default interface List<E> extends Collection<E> {
  get: (index: number) => E | undefined
  set: (index: number, data: E) => E | undefined
  remove: (index: number) => E
  indexOf: (data: E) => number
  sort: (comparator: (a: E, b: E) => flag) => List<E>
}
