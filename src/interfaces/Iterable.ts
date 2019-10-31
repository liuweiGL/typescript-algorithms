import Iterator from './Iterator'

export default interface Iterable<E> {
  forEach: (consumer: (value: E, index: number) => boolean) => void
  iterator: () => Iterator<E>
}
