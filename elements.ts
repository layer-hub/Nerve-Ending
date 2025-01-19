
function createComponent<K extends keyof HTMLElementTagNameMap>(tagName: K) {
    return (props: HTMLElementProperties<HTMLElementTagNameMap[K]> = {}) => {
        return createElement<K>(tagName, props)
    }
}
function createElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    props: HTMLElementProperties<HTMLElementTagNameMap[K]> = {}
): HTMLComponentInstance<K> {
    const element = document.createElement(tagName)

    const specialProps: Record<string, string> = {
        className: 'class'
    }

    for (const key in props) {
        const value = props[key]

        if (value === undefined || value === null) {
            continue
        }

        // 处理事件
        if (key.startsWith('on') && typeof value === 'function') {
            const eventName = key.slice(2).toLowerCase()
            element.addEventListener(eventName, value as EventListener)
            continue
        }

        // 处理样式
        if (key === 'style') {
            if (typeof value === 'string') {
                element.setAttribute('style', value)
            } else if (typeof value === 'object') {
                Object.assign(element.style, value)
            }
            continue
        }

        const attributeName = specialProps[key] || key

        // 选择使用 attribute 还是 property
        if (
            ['list', 'form', 'role'].includes(key) ||
            key.startsWith('data-') ||
            key.startsWith('aria-') ||
            !(key in element)
        ) {
            element.setAttribute(attributeName, String(value))
        } else {
            (element as any)[attributeName] = value
        }
    }

    return { el: element, cleanup: () => { }, refs: {} }
}

interface HTMLComponentInstance<K extends keyof HTMLElementTagNameMap> {
    el: HTMLElementTagNameMap[K]
    cleanup: () => void
    refs: Record<string, HTMLElement>
}

interface HTMLElementProperties<K> { }

interface DOMAttributes {

}

const event = {
    onabort: null,
    onanimationcancel: null,
    onanimationend: null,
    onanimationiteration: null,
    onanimationstart: null,
    onauxclick: null,
    onbeforeinput: null,
    onbeforetoggle: null,
    onblur: null,
    oncancel: null,
    oncanplay: null,
    oncanplaythrough: null,
    onchange: null,
    onclick: null,
    onclose: null,
    oncontextlost: null,
    oncontextmenu: null,
    oncontextrestored: null,
    oncopy: null,
    oncuechange: null,
    oncut: null,
    ondblclick: null,
    ondrag: null,
    ondragend: null,
    ondragenter: null,
    ondragleave: null,
    ondragover: null,
    ondragstart: null,
    ondrop: null,
    ondurationchange: null,
    onemptied: null,
    onended: null,
    onerror: null,
    onfocus: null,
    onformdata: null,
    ongotpointercapture: null,
    oninput: null,
    oninvalid: null,
    onkeydown: null,
    onkeypress: null,
    onkeyup: null,
    onload: null,
    onloadeddata: null,
    onloadedmetadata: null,
    onloadstart: null,
    onlostpointercapture: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    onpaste: null,
    onpause: null,
    onplay: null,
    onplaying: null,
    onpointercancel: null,
    onpointerdown: null,
    onpointerenter: null,
    onpointerleave: null,
    onpointermove: null,
    onpointerout: null,
    onpointerover: null,
    onpointerup: null,
    onprogress: null,
    onratechange: null,
    onreset: null,
    onresize: null,
    onscroll: null,
    onscrollend: null,
    onsecuritypolicyviolation: null,
    onseeked: null,
    onseeking: null,
    onselect: null,
    onselectionchange: null,
    onselectstart: null,
    onslotchange: null,
    onstalled: null,
    onsubmit: null,
    onsuspend: null,
    ontimeupdate: null,
    ontoggle: null,
    ontransitioncancel: null,
    ontransitionend: null,
    ontransitionrun: null,
    ontransitionstart: null,
    onvolumechange: null,
    onwaiting: null,
    onwebkitanimationend: null,
    onwebkitanimationiteration: null,
    onwebkitanimationstart: null,
    onwebkittransitionend: null,
    onwheel: null,
}
console.log(event)

// const tagNames: (keyof HTMLElementTagNameMap)[] = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "search", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"]

export const a = createComponent<'a'>('a')
export const abbr = createComponent<'abbr'>('abbr')
export const address = createComponent<'address'>('address')
export const area = createComponent<'area'>('area')
export const article = createComponent<'article'>('article')
export const aside = createComponent<'aside'>('aside')
export const audio = createComponent<'audio'>('audio')
export const b = createComponent<'b'>('b')
export const base = createComponent<'base'>('base')
export const bdi = createComponent<'bdi'>('bdi')
export const bdo = createComponent<'bdo'>('bdo')
export const blockquote = createComponent<'blockquote'>('blockquote')
export const body = createComponent<'body'>('body')
export const br = createComponent<'br'>('br')
export const button = createComponent<'button'>('button')
export const canvas = createComponent<'canvas'>('canvas')
export const caption = createComponent<'caption'>('caption')
export const cite = createComponent<'cite'>('cite')
export const code = createComponent<'code'>('code')
export const col = createComponent<'col'>('col')
export const colgroup = createComponent<'colgroup'>('colgroup')
export const data = createComponent<'data'>('data')
export const datalist = createComponent<'datalist'>('datalist')
export const dd = createComponent<'dd'>('dd')
export const del = createComponent<'del'>('del')
export const details = createComponent<'details'>('details')
export const dfn = createComponent<'dfn'>('dfn')
export const dialog = createComponent<'dialog'>('dialog')
export const div = createComponent<'div'>('div')
export const dl = createComponent<'dl'>('dl')
export const dt = createComponent<'dt'>('dt')
export const em = createComponent<'em'>('em')
export const embed = createComponent<'embed'>('embed')
export const fieldset = createComponent<'fieldset'>('fieldset')
export const figcaption = createComponent<'figcaption'>('figcaption')
export const figure = createComponent<'figure'>('figure')
export const footer = createComponent<'footer'>('footer')
export const form = createComponent<'form'>('form')
export const h1 = createComponent<'h1'>('h1')
export const h2 = createComponent<'h2'>('h2')
export const h3 = createComponent<'h3'>('h3')
export const h4 = createComponent<'h4'>('h4')
export const h5 = createComponent<'h5'>('h5')
export const h6 = createComponent<'h6'>('h6')
export const head = createComponent<'head'>('head')
export const header = createComponent<'header'>('header')
export const hgroup = createComponent<'hgroup'>('hgroup')
export const hr = createComponent<'hr'>('hr')
export const html = createComponent<'html'>('html')
export const i = createComponent<'i'>('i')
export const iframe = createComponent<'iframe'>('iframe')
export const img = createComponent<'img'>('img')
export const input = createComponent<'input'>('input')
export const ins = createComponent<'ins'>('ins')
export const kbd = createComponent<'kbd'>('kbd')
export const label = createComponent<'label'>('label')
export const legend = createComponent<'legend'>('legend')
export const li = createComponent<'li'>('li')
export const link = createComponent<'link'>('link')
export const main = createComponent<'main'>('main')
export const map = createComponent<'map'>('map')
export const mark = createComponent<'mark'>('mark')
export const menu = createComponent<'menu'>('menu')
export const meta = createComponent<'meta'>('meta')
export const meter = createComponent<'meter'>('meter')
export const nav = createComponent<'nav'>('nav')
export const noscript = createComponent<'noscript'>('noscript')
export const object = createComponent<'object'>('object')
export const ol = createComponent<'ol'>('ol')
export const optgroup = createComponent<'optgroup'>('optgroup')
export const option = createComponent<'option'>('option')
export const output = createComponent<'output'>('output')
export const p = createComponent<'p'>('p')
export const picture = createComponent<'picture'>('picture')
export const pre = createComponent<'pre'>('pre')
export const progress = createComponent<'progress'>('progress')
export const q = createComponent<'q'>('q')
export const rp = createComponent<'rp'>('rp')
export const rt = createComponent<'rt'>('rt')
export const ruby = createComponent<'ruby'>('ruby')
export const s = createComponent<'s'>('s')
export const samp = createComponent<'samp'>('samp')
export const script = createComponent<'script'>('script')
export const search = createComponent<'search'>('search')
export const section = createComponent<'section'>('section')
export const select = createComponent<'select'>('select')
export const slot = createComponent<'slot'>('slot')
export const small = createComponent<'small'>('small')
export const source = createComponent<'source'>('source')
export const span = createComponent<'span'>('span')
export const strong = createComponent<'strong'>('strong')
export const style = createComponent<'style'>('style')
export const sub = createComponent<'sub'>('sub')
export const summary = createComponent<'summary'>('summary')
export const sup = createComponent<'sup'>('sup')
export const table = createComponent<'table'>('table')
export const tbody = createComponent<'tbody'>('tbody')
export const td = createComponent<'td'>('td')
export const template = createComponent<'template'>('template')
export const textarea = createComponent<'textarea'>('textarea')
export const tfoot = createComponent<'tfoot'>('tfoot')
export const th = createComponent<'th'>('th')
export const thead = createComponent<'thead'>('thead')
export const time = createComponent<'time'>('time')
export const title = createComponent<'title'>('title')
export const tr = createComponent<'tr'>('tr')
export const track = createComponent<'track'>('track')
export const u = createComponent<'u'>('u')
export const ul = createComponent<'ul'>('ul')
export const _var = createComponent<'var'>('var')
export const video = createComponent<'video'>('video')
export const wbr = createComponent<'wbr'>('wbr')