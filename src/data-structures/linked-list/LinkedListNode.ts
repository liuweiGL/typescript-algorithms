import Node from '@/interfaces/Node'

export default class LinkedListNode<E> implements Node<E> {
  public data?: E
  public next?: Node<E>
  public constructor(data?: E) {
    this.data = data
  }

  public toString() {
    return `${this.data}`
  }
}
