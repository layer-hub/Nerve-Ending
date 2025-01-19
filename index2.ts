// 基础DOM事件接口
interface DOMAttributes<T> {
    // 焦点事件
    onfocus?: (event: FocusEvent) => void
    onblur?: (event: FocusEvent) => void

    // 表单事件
    onchange?: (event: Event) => void
    oninput?: (event: Event) => void
    onsubmit?: (event: Event) => void
    onreset?: (event: Event) => void
    oninvalid?: (event: Event) => void

    // 键盘事件
    onkeydown?: (event: KeyboardEvent) => void
    onkeypress?: (event: KeyboardEvent) => void
    onkeyup?: (event: KeyboardEvent) => void

    // 鼠标事件
    onclick?: (event: MouseEvent) => void
    ondblclick?: (event: MouseEvent) => void
    onmousedown?: (event: MouseEvent) => void
    onmouseenter?: (event: MouseEvent) => void
    onmouseleave?: (event: MouseEvent) => void
    onmousemove?: (event: MouseEvent) => void
    onmouseout?: (event: MouseEvent) => void
    onmouseover?: (event: MouseEvent) => void
    onmouseup?: (event: MouseEvent) => void
    oncontextmenu?: (event: MouseEvent) => void

    // 拖拽事件
    ondrag?: (event: DragEvent) => void
    ondragend?: (event: DragEvent) => void
    ondragenter?: (event: DragEvent) => void
    ondragleave?: (event: DragEvent) => void
    ondragover?: (event: DragEvent) => void
    ondragstart?: (event: DragEvent) => void
    ondrop?: (event: DragEvent) => void

    // 触摸事件
    ontouchstart?: (event: TouchEvent) => void
    ontouchmove?: (event: TouchEvent) => void
    ontouchend?: (event: TouchEvent) => void
    ontouchcancel?: (event: TouchEvent) => void

    // 滚动事件
    onscroll?: (event: Event) => void

    // 剪贴板事件
    oncopy?: (event: ClipboardEvent) => void
    oncut?: (event: ClipboardEvent) => void
    onpaste?: (event: ClipboardEvent) => void
}

// ARIA属性接口
interface AriaAttributes {
    'aria-activedescendant'?: string
    'aria-atomic'?: boolean | 'false' | 'true'
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
    'aria-busy'?: boolean | 'false' | 'true'
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true'
    'aria-colcount'?: number
    'aria-colindex'?: number
    'aria-colspan'?: number
    'aria-controls'?: string
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'
    'aria-describedby'?: string
    'aria-description'?: string
    'aria-details'?: string
    'aria-disabled'?: boolean | 'false' | 'true'
    'aria-errormessage'?: string
    'aria-expanded'?: boolean | 'false' | 'true'
    'aria-flowto'?: string
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
    'aria-hidden'?: boolean | 'false' | 'true'
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
    'aria-keyshortcuts'?: string
    'aria-label'?: string
    'aria-labelledby'?: string
    'aria-level'?: number
    'aria-live'?: 'off' | 'assertive' | 'polite'
    'aria-modal'?: boolean | 'false' | 'true'
    'aria-multiline'?: boolean | 'false' | 'true'
    'aria-multiselectable'?: boolean | 'false' | 'true'
    'aria-orientation'?: 'horizontal' | 'vertical'
    'aria-owns'?: string
    'aria-placeholder'?: string
    'aria-posinset'?: number
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'
    'aria-readonly'?: boolean | 'false' | 'true'
    'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
    'aria-required'?: boolean | 'false' | 'true'
    'aria-roledescription'?: string
    'aria-rowcount'?: number
    'aria-rowindex'?: number
    'aria-rowspan'?: number
    'aria-selected'?: boolean | 'false' | 'true'
    'aria-setsize'?: number
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
    'aria-valuemax'?: number
    'aria-valuemin'?: number
    'aria-valuenow'?: number
    'aria-valuetext'?: string
}

// 基础HTML属性接口
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    id?: string
    class?: string
    style?: string | Partial<CSSStyleDeclaration>
    title?: string
    lang?: string
    dir?: 'ltr' | 'rtl' | 'auto'
    accesskey?: string
    contenteditable?: boolean | 'true' | 'false'
    contextmenu?: string
    draggable?: boolean | 'true' | 'false'
    hidden?: boolean
    role?: string
    spellcheck?: boolean | 'true' | 'false'
    tabindex?: number
    translate?: 'yes' | 'no'
    [key: `data-${string}`]: string | undefined
}

// 各元素特定属性接口
interface HTMLInputAttributes extends HTMLAttributes<HTMLInputElement> {
    accept?: string
    alt?: string
    autocomplete?: string
    autofocus?: boolean
    capture?: boolean | string
    checked?: boolean
    crossorigin?: string
    defaultchecked?: boolean
    defaultvalue?: string | number | readonly string[]
    dirname?: string
    disabled?: boolean
    form?: string
    formaction?: string
    formenctype?: string
    formmethod?: string
    formnovalidate?: boolean
    formtarget?: string
    height?: number | string
    list?: string
    max?: number | string
    maxlength?: number
    min?: number | string
    minlength?: number
    multiple?: boolean
    name?: string
    pattern?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    size?: number
    src?: string
    step?: number | string
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    value?: string | number | readonly string[]
    width?: number | string
}

interface HTMLButtonAttributes extends HTMLAttributes<HTMLButtonElement> {
    autofocus?: boolean
    disabled?: boolean
    form?: string
    formaction?: string
    formenctype?: string
    formmethod?: string
    formnovalidate?: boolean
    formtarget?: string
    name?: string
    type?: 'submit' | 'reset' | 'button'
    value?: string
}

interface HTMLImageAttributes extends HTMLAttributes<HTMLImageElement> {
    alt?: string
    crossorigin?: 'anonymous' | 'use-credentials'
    decoding?: 'async' | 'auto' | 'sync'
    height?: number | string
    loading?: 'eager' | 'lazy'
    referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
    sizes?: string
    src?: string
    srcset?: string
    width?: number | string
    usemap?: string
}

interface HTMLAnchorAttributes extends HTMLAttributes<HTMLAnchorElement> {
    download?: string
    href?: string
    hreflang?: string
    media?: string
    ping?: string
    referrerpolicy?: string
    rel?: string
    target?: '_self' | '_blank' | '_parent' | '_top'
    type?: string
}

interface HTMLFormAttributes extends HTMLAttributes<HTMLFormElement> {
    acceptcharset?: string
    action?: string
    autocomplete?: 'on' | 'off'
    enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
    method?: 'get' | 'post' | 'dialog'
    name?: string
    novalidate?: boolean
    target?: '_self' | '_blank' | '_parent' | '_top'
}

interface HTMLSelectAttributes extends HTMLAttributes<HTMLSelectElement> {
    autocomplete?: string
    autofocus?: boolean
    disabled?: boolean
    form?: string
    multiple?: boolean
    name?: string
    required?: boolean
    size?: number
    value?: string | number | readonly string[]
}

interface HTMLTextAreaAttributes extends HTMLAttributes<HTMLTextAreaElement> {
    autocomplete?: string
    autofocus?: boolean
    cols?: number
    dirname?: string
    disabled?: boolean
    form?: string
    maxlength?: number
    minlength?: number
    name?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    rows?: number
    value?: string
    wrap?: 'hard' | 'soft'
}

interface HTMLLabelAttributes extends HTMLAttributes<HTMLLabelElement> {
    for?: string
    form?: string
}

interface HTMLOptionAttributes extends HTMLAttributes<HTMLOptionElement> {
    disabled?: boolean
    label?: string
    selected?: boolean
    value?: string
}

interface HTMLProgressAttributes extends HTMLAttributes<HTMLProgressElement> {
    max?: number
    value?: string | number
}

interface HTMLLiAttributes extends HTMLAttributes<HTMLLIElement> {
    value?: string | number
}

interface HTMLTableAttributes extends HTMLAttributes<HTMLTableElement> {
    cellpadding?: number | string
    cellspacing?: number | string
    summary?: string
}
interface HTMLTableAttributes extends HTMLAttributes<HTMLTableElement> {
    align?: 'left' | 'center' | 'right'
    bgcolor?: string
    border?: number
    cellpadding?: number | string
    cellspacing?: number | string
    frame?: 'void' | 'above' | 'below' | 'hsides' | 'lhs' | 'rhs' | 'vsides' | 'box' | 'border'
    rules?: 'none' | 'groups' | 'rows' | 'cols' | 'all'
    summary?: string
    width?: string | number
}

interface HTMLTableSectionAttributes extends HTMLAttributes<HTMLTableSectionElement> {
    align?: 'left' | 'center' | 'right'
    bgcolor?: string
    char?: string
    charoff?: string
    valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

interface HTMLTableRowAttributes extends HTMLAttributes<HTMLTableRowElement> {
    align?: 'left' | 'center' | 'right'
    bgcolor?: string
    char?: string
    charoff?: string
    valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

interface HTMLTableColAttributes extends HTMLAttributes<HTMLTableColElement> {
    align?: 'left' | 'center' | 'right'
    char?: string
    charoff?: string
    span?: number
    valign?: 'top' | 'middle' | 'bottom' | 'baseline'
    width?: string | number
}

interface HTMLTableCellAttributes extends HTMLAttributes<HTMLTableCellElement> {
    abbr?: string
    align?: 'left' | 'center' | 'right'
    axis?: string
    bgcolor?: string
    char?: string
    charoff?: string
    colspan?: number
    headers?: string
    height?: string | number
    rowspan?: number
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup'
    valign?: 'top' | 'middle' | 'bottom' | 'baseline'
    width?: string | number
}

interface HTMLIFrameAttributes extends HTMLAttributes<HTMLIFrameElement> {
    allow?: string
    allowfullscreen?: boolean
    height?: number | string
    loading?: 'eager' | 'lazy'
    name?: string
    referrerpolicy?: string
    sandbox?: string
    src?: string
    srcdoc?: string
    width?: number | string
}

// 元素标签到属性的映射
interface HTMLElementAttributes {
    a: HTMLAnchorAttributes
    button: HTMLButtonAttributes
    form: HTMLFormAttributes
    img: HTMLImageAttributes
    input: HTMLInputAttributes
    label: HTMLLabelAttributes
    option: HTMLOptionAttributes
    progress: HTMLProgressAttributes
    select: HTMLSelectAttributes
    textarea: HTMLTextAreaAttributes
    iframe: HTMLIFrameAttributes
    li: HTMLLiAttributes
    table: HTMLTableAttributes
    thead: HTMLTableSectionAttributes
    tbody: HTMLTableSectionAttributes
    tfoot: HTMLTableSectionAttributes
    tr: HTMLTableRowAttributes
    td: HTMLTableCellAttributes
    th: HTMLTableCellAttributes
    col: HTMLTableColAttributes
    colgroup: HTMLTableColAttributes
    // 基础元素使用通用HTMLAttributes
    div: HTMLAttributes<HTMLDivElement>
    span: HTMLAttributes<HTMLSpanElement>
    p: HTMLAttributes<HTMLParagraphElement>
    header: HTMLAttributes<HTMLElement>
    footer: HTMLAttributes<HTMLElement>
    main: HTMLAttributes<HTMLElement>
    section: HTMLAttributes<HTMLElement>
    article: HTMLAttributes<HTMLElement>
    aside: HTMLAttributes<HTMLElement>
    nav: HTMLAttributes<HTMLElement>
    h1: HTMLAttributes<HTMLHeadingElement>
    h2: HTMLAttributes<HTMLHeadingElement>
    h3: HTMLAttributes<HTMLHeadingElement>
    h4: HTMLAttributes<HTMLHeadingElement>
    h5: HTMLAttributes<HTMLHeadingElement>
    h6: HTMLAttributes<HTMLHeadingElement>
    ul: HTMLAttributes<HTMLUListElement>
    ol: HTMLAttributes<HTMLOListElement>
}

// createElement函数实现
function createElement<K extends keyof HTMLElementAttributes>(
    tag: K,
    props?: HTMLElementAttributes[K] | null,
    ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag)

    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            if (value === undefined || value === null) {
                return
            }

            // 处理事件监听器
            if (key.startsWith('on') && typeof value === 'function') {
                const eventName = key.toLowerCase().substring(2)
                element.addEventListener(eventName, value as EventListener)
                return
            }

            // 处理style属性
            if (key === 'style') {
                if (typeof value === 'string') {
                    element.setAttribute('style', value)
                } else if (typeof value === 'object') {
                    Object.assign(element.style, value)
                }
                return
            }

            // 处理布尔属性
            if (typeof value === 'boolean') {
                if (value) {
                    element.setAttribute(key, '')
                } else {
                    element.removeAttribute(key)
                }
                return
            }

            // 处理其他属性
            element.setAttribute(key, String(value))
        })
    }

    children.forEach(child => {
        if (child instanceof Node) {
            element.appendChild(child)
        } else {
            element.appendChild(document.createTextNode(String(child)))
        }
    })

    return element
}

export type {
    DOMAttributes,
    AriaAttributes,
    HTMLAttributes,
    HTMLElementAttributes,
    HTMLInputAttributes,
    HTMLButtonAttributes,
    HTMLImageAttributes,
    HTMLAnchorAttributes,
    HTMLFormAttributes,
    HTMLSelectAttributes,
    HTMLTextAreaAttributes,
    HTMLLabelAttributes,
    HTMLOptionAttributes,
    HTMLProgressAttributes,
    HTMLLiAttributes,
    HTMLTableAttributes,
    HTMLIFrameAttributes,
}

export { createElement }

// 使用示例：
// 创建输入框
const input = createElement('input', {
    type: 'text',
    placeholder: '请输入用户名',
    required: true,
    maxlength: 20,
    class: 'form-input',
    oninput: (e) => console.log((e.target as HTMLInputElement).value)
})

// 创建按钮
const button = createElement('button', {
    type: 'submit',
    disabled: false,
    class: 'btn btn-primary',
    onclick: () => console.log('clicked')
}, '提交')

// 创建表单
const form = createElement('form', {
    action: '/api/submit',
    method: 'post',
    onsubmit: (e) => {
        e.preventDefault()
        console.log('form submitted')
    }
},
    input,
    button
)

// 创建图片
const img = createElement('img', {
    src: 'example.jpg',
    alt: '示例图片',
    width: 200,
    height: 200,
    loading: 'lazy'
})

// 创建链接
const link = createElement('a', {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer'
}, '访问链接')

// 创建具有嵌套结构的复杂元素
const card = createElement('div', {
    class: 'card',
},
    createElement('header', {
        class: 'card-header'
    },
        createElement('h2', {}, '卡片标题')
    ),
    createElement('div', {
        class: 'card-body'
    },
        createElement('p', {}, '这是卡片内容')
    ),
    createElement('footer', {
        class: 'card-footer'
    },
        createElement('button', {
            class: 'btn',
            onclick: () => console.log('action clicked')
        }, '操作按钮')
    )
)

// 创建列表
const list = createElement('ul', {
    class: 'list'
},
    createElement('li', { value: 1 }, '第一项'),
    createElement('li', { value: 2 }, '第二项'),
    createElement('li', { value: 3 }, '第三项')
)

// 创建表格
// 创建一个完整的表格
const table = createElement('table', {
    class: 'data-table',
    cellspacing: 0,
    border: 1
},
    // 列组
    createElement('colgroup', {},
        createElement('col', { width: 100 }),
        createElement('col', { width: 200 }),
        createElement('col', { width: 200 })
    ),
    // 表头
    createElement('thead', {},
        createElement('tr', {},
            createElement('th', {
                scope: 'col',
                rowspan: 2
            }, '序号'),
            createElement('th', {
                scope: 'col',
                colspan: 2
            }, '信息')
        ),
        createElement('tr', {},
            createElement('th', { scope: 'col' }, '姓名'),
            createElement('th', { scope: 'col' }, '年龄')
        )
    ),
    // 表体
    createElement('tbody', {},
        createElement('tr', {},
            createElement('td', { align: 'center' }, '1'),
            createElement('td', {}, '张三'),
            createElement('td', { align: 'right' }, '25')
        ),
        createElement('tr', {},
            createElement('td', { align: 'center' }, '2'),
            createElement('td', {}, '李四'),
            createElement('td', { align: 'right' }, '28')
        )
    ),
    // 表尾
    createElement('tfoot', {},
        createElement('tr', {},
            createElement('td', { colspan: 3, align: 'center' }, '表格脚注')
        )
    )
)

// 创建一个带有跨行跨列的复杂表格
const complexTable = createElement('table', {
    class: 'complex-table'
},
    createElement('tbody', {},
        createElement('tr', {},
            createElement('td', { rowspan: 2, bgcolor: '#f0f0f0' }, '跨行单元格'),
            createElement('td', {}, '普通单元格'),
            createElement('td', { colspan: 2 }, '跨列单元格')
        ),
        createElement('tr', {},
            createElement('td', { bgcolor: '#e0e0e0' }, '带背景色'),
            createElement('td', { valign: 'top' }, '顶部对齐'),
            createElement('td', { valign: 'bottom' }, '底部对齐')
        )
    )
)


