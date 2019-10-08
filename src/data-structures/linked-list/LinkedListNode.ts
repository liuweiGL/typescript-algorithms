import BasicNode from '@/interfaces/BasicNode'

export default class LinkedListNode implements BasicNode {
  public value: any
  public next?: BasicNode
  public constructor(value?: any, next?: BasicNode) {
    this.value = value
    this.next = next
  }

  public toString() {
    return this.value?.toString() ?? `${this.value}`
  }
}
