import {
    div, span, p, h1, nav, ul, li, a, img, form,
    input, button, table, tr, td, section, article,
    header, footer, select, option, textarea
} from '../fluentdom'

describe('FluentDOM', () => {
    // 每个测试后清理 document.body
    afterEach(() => {
        document.body.innerHTML = ''
    })

    describe('Basic Element Creation', () => {
        test('should create element with correct tag', () => {
            const elements = [
                { creator: div, tag: 'div' },
                { creator: span, tag: 'span' },
                { creator: p, tag: 'p' },
                { creator: h1, tag: 'h1' },
                { creator: nav, tag: 'nav' },
                { creator: section, tag: 'section' },
                { creator: article, tag: 'article' },
                { creator: header, tag: 'header' },
                { creator: footer, tag: 'footer' }
            ]

            elements.forEach(({ creator, tag }) => {
                const { element } = creator()()
                expect(element.tagName.toLowerCase()).toBe(tag)
            })
        })

        test('should create element with attributes', () => {
            const { element } = div({
                id: 'test',
                class: 'container',
                'data-test': 'value',
                'aria-label': 'test label'
            })()

            expect(element.id).toBe('test')
            expect(element.className).toBe('container')
            expect(element.getAttribute('data-test')).toBe('value')
            expect(element.getAttribute('aria-label')).toBe('test label')
        })
    })

    describe('Form Elements', () => {
        test('should create form with inputs', () => {
            const { element } = form({ id: 'testForm' })(
                input({ type: 'text', name: 'username', placeholder: 'Username' })(),
                input({ type: 'password', name: 'password', placeholder: 'Password' })(),
                button({ type: 'submit' })('Submit')
            )

            expect(element.tagName.toLowerCase()).toBe('form')
            expect(element.children.length).toBe(3)
            expect(element.children[0].type).toBe('text')
            expect(element.children[1].type).toBe('password')
            expect(element.children[2].type).toBe('submit')
        })

        test('should create select with options', () => {
            const { element } = select({ name: 'fruits' })(
                option({ value: 'apple' })('Apple'),
                option({ value: 'banana' })('Banana'),
                option({ value: 'orange' })('Orange')
            )

            expect(element.tagName.toLowerCase()).toBe('select')
            expect(element.children.length).toBe(3)
            expect(element.children[0].value).toBe('apple')
        })

        test('should create textarea with attributes', () => {
            const { element } = textarea({
                rows: '5',
                cols: '30',
                placeholder: 'Enter text here'
            })('Initial content')

            expect(element.tagName.toLowerCase()).toBe('textarea')
            expect(element.rows).toBe(5)
            expect(element.cols).toBe(30)
            expect(element.placeholder).toBe('Enter text here')
            expect(element.value).toBe('Initial content')
        })
    })

    describe('Table Elements', () => {
        test('should create table structure', () => {
            const { element } = table({ class: 'data-table' })(
                tr()(
                    td()('Cell 1'),
                    td()('Cell 2')
                ),
                tr()(
                    td()('Cell 3'),
                    td()('Cell 4')
                )
            )

            expect(element.tagName.toLowerCase()).toBe('table')
            expect(element.rows.length).toBe(2)
            expect(element.rows[0].cells.length).toBe(2)
            expect(element.rows[1].cells[0].textContent).toBe('Cell 3')
        })
    })

    describe('Navigation Elements', () => {
        test('should create navigation structure', () => {
            const { element } = nav({ class: 'main-nav' })(
                ul()(
                    li()(a({ href: '/' })('Home')),
                    li()(a({ href: '/about' })('About')),
                    li()(a({ href: '/contact' })('Contact'))
                )
            )

            expect(element.tagName.toLowerCase()).toBe('nav')
            const links = element.querySelectorAll('a')
            expect(links.length).toBe(3)
            expect(links[0].href).toContain('/')
            expect(links[1].href).toContain('/about')
        })
    })

    describe('Media Elements', () => {
        test('should create image with attributes', () => {
            const { element } = img({
                src: 'test.jpg',
                alt: 'Test Image',
                width: '100',
                height: '100'
            })()

            expect(element.tagName.toLowerCase()).toBe('img')
            expect(element.src).toContain('test.jpg')
            expect(element.alt).toBe('Test Image')
            expect(element.width).toBe(100)
        })
    })

    describe('Complex Structures', () => {
        test('should create complete page structure', () => {
            const { element } = div({ class: 'page' })(
                header({ class: 'header' })(
                    h1()('Website Title'),
                    nav()(
                        ul()(
                            li()(a({ href: '#' })('Home')),
                            li()(a({ href: '#' })('About'))
                        )
                    )
                ),
                section({ class: 'content' })(
                    article()(
                        h1()('Article Title'),
                        p()('Article content')
                    )
                ),
                footer()(
                    p()('© 2025 FluentDOM')
                )
            )

            expect(element.querySelector('header')).toBeTruthy()
            expect(element.querySelector('nav')).toBeTruthy()
            expect(element.querySelector('article')).toBeTruthy()
            expect(element.querySelector('footer')).toBeTruthy()
        })
    })

    describe('Event Handling', () => {
        test('should handle multiple event types', () => {
            const events = {
                onclick: jest.fn(),
                onmouseover: jest.fn(),
                onmouseout: jest.fn()
            }

            const { element } = div(events)('Test')

            element.click()
            element.dispatchEvent(new MouseEvent('mouseover'))
            element.dispatchEvent(new MouseEvent('mouseout'))

            expect(events.onclick).toHaveBeenCalled()
            expect(events.onmouseover).toHaveBeenCalled()
            expect(events.onmouseout).toHaveBeenCalled()
        })

        test('should handle form events', () => {
            const events = {
                onsubmit: jest.fn(),
                onreset: jest.fn()
            }

            const { element } = form(events)(
                input({ type: 'text' })(),
                button({ type: 'submit' })('Submit')
            )

            element.dispatchEvent(new Event('submit'))
            element.dispatchEvent(new Event('reset'))

            expect(events.onsubmit).toHaveBeenCalled()
            expect(events.onreset).toHaveBeenCalled()
        })
    })

    describe('Cleanup', () => {
        test('should cleanup complex structures', () => {
            const events = {
                onclick: jest.fn(),
                onmouseover: jest.fn()
            }

            const { element, cleanup } = div({ class: 'container' })(
                nav(events)(
                    ul()(
                        li()(a({ href: '#', onclick: jest.fn() })('Link 1')),
                        li()(a({ href: '#', onclick: jest.fn() })('Link 2'))
                    )
                ),
                section(events)(
                    article()(p()('Content'))
                )
            )

            document.body.appendChild(element)

            const nav = element.querySelector('nav')
            const links = element.querySelectorAll('a')

            nav.click()
            links.forEach(link => link.click())

            cleanup()

            nav.click()
            links.forEach(link => link.click())

            expect(events.onclick).toHaveBeenCalledTimes(1)
        })
    })
})