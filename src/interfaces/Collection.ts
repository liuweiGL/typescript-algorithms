import Iterable from './Iterable'

export default interface Collection<E> extends Iterable<E> {
  add: (data: E) => boolean
  addAll: (data: Collection<E>) => boolean
  contains: (o: any) => boolean
  isEmpty: () => boolean
  remove: (o: any) => boolean
  clear: () => void
  size: () => number
  toArray: () => E[]
}
