# tinyfig

`tinyfig` 是一个轻量级的 JavaScript 微型库，提供了一组以声明方式创建和操作 DOM 元素的函数。它尤其适用于在现代 Web 框架（例如 React、Vue、Svelte 和 Alpine）的业务开发之外构建跨框架的 UI 组件和功能增强库，这可以显著提高代码的可读性和可维护性。

## 特性

- 🔗 可链式 API，实现直观的 DOM 创建
- 🎯 类型安全的元素构建
- 🧹 自动清理事件监听器
- 🪶 轻量级，零依赖
- 🎨 自然的声明式语法
- 🔄 易于元素组合

## 安装

```bash
npm install tinyfig
```

## 为什么选择 tinyfig？

传统的 DOM 操作可能冗长且难以阅读。tinyfig 将其转换为：

```javascript
const main = document.createElement('main');
main.className = 'container';
const heading = document.createElement('h1');
heading.className = 'title';
heading.onclick = () => console.log('clicked');
heading.textContent = 'My first app';
main.appendChild(heading);
```

变成这样：

```javascript
const { element } = main({ class: 'container' })(
  h1({ class: 'title', onclick: () => console.log('clicked') })(
    'My first app'
  )
);
```

## 核心概念

tinyfig 引入了一个用于 DOM 操作的流畅接口，它遵循自然的思维模式：

1. 选择元素类型
2. 定义其属性
3. 添加其子元素
4. 获取可管理的元素引用

## 用法

```javascript
import { main, h1, button, span } from 'tinyfig';

// 创建一个简单的组件
const { element, cleanup } = main({ class: "app" })(
  h1({ class: "title" })(
    span("Welcome to "),
    span({ class: "highlight" })("tinyfig")
  ),
  button({ 
    onclick: () => alert('Hello!'),
    class: "greeting-btn"
  })("Say Hello")
);

// 添加到 DOM
document.body.appendChild(element);

// 完成后清理
// cleanup();
```

## 主要优点

1. **声明式语法**：编写与其视觉层次结构相对应的 DOM 结构
2. **内存安全**：自动清理事件监听器可防止内存泄漏
3. **类型安全**：与 TypeScript 一起使用时，提供完整的类型推断
4. **可组合性**：轻松组合和嵌套元素
5. **开发者体验**：直观的 API 降低了认知负荷

## 许可证

MIT © tinyfig
