// // 定义基础类型
// type EventHandler = (event: Event) => void
// type Handler = [string, EventHandler]
// type CleanupFunction = () => void

// interface BaseComponent {
//     el: HTMLElement
//     cleanup: CleanupFunction
//     refs: Record<string, HTMLElement>
// }

// type Component<T extends {}> = BaseComponent & T
// type ChildElement<T extends {}> = string | Component<T>

// type Props = Record<string, string | EventHandler>

// const createElement = (tag: string) => {
//     return (props: Props = {}) => {
//         return <T extends {}>(...children: [ChildElement<T>[], T]): Component<T> => {
//             const t = children.pop()
//             const handlers: Handler[] = []
//             const cleanups: CleanupFunction[] = []
//             const el: HTMLElement = document.createElement(tag)

//             // 处理 props
//             Object.entries(props).forEach(([key, value]) => {
//                 if (key.startsWith('on')) {
//                     // 事件监听器
//                     const event = key.toLowerCase().slice(2)
//                     const handler = value as EventHandler
//                     handlers.push([event, handler])
//                     el.addEventListener(event, handler)
//                 } else {
//                     // 普通属性
//                     el.setAttribute(key, value as string)
//                 }
//             })

//             // 处理子元素
//             children.forEach(child => {
//                 if (typeof child === 'string') {
//                     el.appendChild(document.createTextNode(child))
//                 } else if (
//                     typeof child === 'object' &&
//                     'element' in child &&
//                     child.element instanceof Node
//                 ) {
//                     const { element: childElement, cleanup } = child
//                     cleanups.push(cleanup)
//                     el.appendChild(childElement)
//                 }
//             })

//             // 清理函数
//             const cleanup: CleanupFunction = () => {
//                 handlers.forEach(([event, handler]) => {
//                     el.removeEventListener(event, handler)
//                 })
//                 cleanups.forEach(clean => clean())
//             }

//             return {
//                 el,
//                 cleanup,
//                 refs: {},
//                 ...t
//             }
//         }
//     }
// }

// interface MyEventDetail {
//     value?: string
//     data?: any
//     // ... 其他可能的属性
// }
// interface MyComponentProps {
//     [key: `on${string}`]: (event: CustomEvent<MyEventDetail>) => void // 关键：使用模板字面量和 CustomEvent
// }



// export default createElement

// // const input = document.createElement('input')
// // input.addEventListener('input', (event: InputEvent) => {
// //     console.log(event)
// // })



// const input = document.createElement('input')

// input.addEventListener('input', (event: Event) => {
//     const inputEvent = event as InputEvent // 不推荐
//     console.log(inputEvent.data) // 现在可以安全地访问 data 属性
//     const target = inputEvent.target as HTMLInputElement
//     console.log(target.value)
// })

// document.body.appendChild(input)