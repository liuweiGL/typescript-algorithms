/**
 * 单向链表的节点
 */
export default interface BasicNode {
  value: any
  next?: BasicNode
  toString: () => string
}
