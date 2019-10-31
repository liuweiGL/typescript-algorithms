/**
 * 单向链表的节点
 */
export default interface Node<E> {
  data?: E
  next?: Node<E>
  toString: () => string
}
