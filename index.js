const createElement = (tag) => {
    return (props = {}) => {
        return (...children) => {
            const handlers = []
            const cleanups = []
            const element = document.createElement(tag)
            Object.entries(props).forEach(([key, value]) => {
                if (key.startsWith('on')) { // 事件监听器
                    const event = key.toLowerCase().slice(2)
                    handlers.push([event, value])
                    element.addEventListener(event, value)
                } else { // 普通属性
                    element.setAttribute(key, value)
                }
            })
            children.forEach(child => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child))
                } else if (child instanceof Node) {
                    const { element, cleanup } = child
                    cleanups.push(cleanup)
                    element.appendChild(element)
                } else { }
            })

            const cleanup = () => {
                handlers.forEach(([event, value]) => {
                    element.removeEventListener(event, value)
                })
                cleanups.forEach(clean => clean())
            }

            return {
                element,
                cleanup
            }
        }
    }
}

// 文档结构相关
const html = createElement('html')
const head = createElement('head')
const body = createElement('body')
const main = createElement('main')

// 元数据相关
const meta = createElement('meta')
const title = createElement('title')
const link = createElement('link')
const style = createElement('style')
const script = createElement('script')

// 内容分区
const header = createElement('header')
const nav = createElement('nav')
const article = createElement('article')
const section = createElement('section')
const aside = createElement('aside')
const footer = createElement('footer')
const address = createElement('address')

// 文本内容
const h1 = createElement('h1')
const h2 = createElement('h2')
const h3 = createElement('h3')
const h4 = createElement('h4')
const h5 = createElement('h5')
const h6 = createElement('h6')
const p = createElement('p')
const hr = createElement('hr')
const pre = createElement('pre')
const blockquote = createElement('blockquote')
const ol = createElement('ol')
const ul = createElement('ul')
const li = createElement('li')
const dl = createElement('dl')
const dt = createElement('dt')
const dd = createElement('dd')
const figure = createElement('figure')
const figcaption = createElement('figcaption')
const div = createElement('div')

// 内联文本
const a = createElement('a')
const span = createElement('span')
const br = createElement('br')
const b = createElement('b')
const strong = createElement('strong')
const i = createElement('i')
const em = createElement('em')
const u = createElement('u')
const small = createElement('small')
const sub = createElement('sub')
const sup = createElement('sup')
const code = createElement('code')
const kbd = createElement('kbd')
const mark = createElement('mark')
const time = createElement('time')

// 图片和多媒体
const img = createElement('img')
const audio = createElement('audio')
const video = createElement('video')
const source = createElement('source')
const track = createElement('track')
const canvas = createElement('canvas')
const svg = createElement('svg')

// 表格内容
const table = createElement('table')
const caption = createElement('caption')
const thead = createElement('thead')
const tbody = createElement('tbody')
const tfoot = createElement('tfoot')
const tr = createElement('tr')
const th = createElement('th')
const td = createElement('td')
const colgroup = createElement('colgroup')
const col = createElement('col')

// 表单
const form = createElement('form')
const label = createElement('label')
const input = createElement('input')
const button = createElement('button')
const select = createElement('select')
const datalist = createElement('datalist')
const optgroup = createElement('optgroup')
const option = createElement('option')
const textarea = createElement('textarea')
const fieldset = createElement('fieldset')
const legend = createElement('legend')
const progress = createElement('progress')
const meter = createElement('meter')

// 交互元素
const details = createElement('details')
const summary = createElement('summary')
const dialog = createElement('dialog')

// iframes
const iframe = createElement('iframe')


export {
    // 导出所有创建的元素函数
    html, head, body, main, meta, title, link, style, script,
    header, nav, article, section, aside, footer, address,
    h1, h2, h3, h4, h5, h6, p, hr, pre, blockquote,
    ol, ul, li, dl, dt, dd, figure, figcaption, div,
    a, span, br, b, strong, i, em, u, small, sub, sup,
    code, kbd, mark, time, img, audio, video, source,
    track, canvas, svg, table, caption, thead, tbody,
    tfoot, tr, th, td, colgroup, col, form, label,
    input, button, select, datalist, optgroup, option,
    textarea, fieldset, legend, progress, meter,
    details, summary, dialog, iframe
}