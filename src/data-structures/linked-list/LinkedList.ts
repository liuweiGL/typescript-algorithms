import List from '@/interfaces/List'
import Collection from '@/interfaces/Collection'
import Serializable from '@/utils/Serializable'
import LinkedListNode from './LinkedListNode'

export default class LinkedList<E> extends Serializable implements List<E> {
  private head?: LinkedListNode<E>
  private tail?: LinkedListNode<E>

  public add(data: E) {
    const node = new LinkedListNode(data)
    if (!this.tail) {
      this.head = node
      this.tail = node
      return true
    }
    this.tail.next = node
    this.tail = node
    return true
  }

  public addAll(data: Collection<E>) {
    data.forEach(value => {
      this.add(value)
      return true
    })
    return true
  }

  public get(index: number) {
    return this.getNode(index)?.data
  }
  public set(index: number, data: E) {
    const node = new LinkedListNode(data)
    if(index === 0){
      const head = this.head
      this.head = node
return head?.data
    }
    let count = 0
    let current = this.head
    const preIndex = index - 1
    while(current){
      if(count === preIndex){
        break
      }
      if(count < preIndex){
        current = current.next
      }
      count ++
    }
    if(current){
      const nextNode = current.next
      current.next = node
      return nextNode?.data
    }
   return undefined
  }
  public indexOf(data: E) {
    let count = 0
    let current = this.head
    while(current){
if(current.data === data){
  return count
}
current = current.next
count ++
    }
    return -1
  }
  // public sort(comparator: (a: E, b: E) => 0 | 1 | -1) {
  //   return this
  // }
  public contains(data: any) {
    let current = this.head
    while(current){
      if(current.data === data){
        return true
      }
      current = current.next
    }
    return false
  }
  public isEmpty() {
    return !this.head
  }
  // public remove(index: number) {
  //   let count = 0
  //   let current = this.head

  // }
  public clear() {
    this.head = undefined
    this.tail = undefined
  }
  // public size() {}
  // public toArray() {}
  // public forEach(consumer: (value: E, index: number) => boolean) {}
  // public iterator() {}
  private getNode(index:number){
    let count = 0
    let current = this.head
    while(current){
      if(count === index){
        break
      }
      if(count < index){
        current = current.next
      }
      count ++
    }
    return current
  }
}
