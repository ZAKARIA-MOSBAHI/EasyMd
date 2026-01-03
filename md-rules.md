# Complete GFM (GitHub Flavored Markdown) Syntax Guide with HTML Equivalents

## **1. Headers**

### **Markdown:**

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

### **Required HTML:**

```html
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
```

## **2. Emphasis**

### **Markdown:**

```markdown
**bold** or **bold**
_italic_ or _italic_
~~strikethrough~~
**bold _and italic_ inside**
```

### **Required HTML:**

```html
<strong>bold</strong> or <b>bold</b> <em>italic</em> or <i>italic</i>
<del>strikethrough</del> or <s>strikethrough</s>
<strong>bold <em>and italic</em> inside</strong>
```

## **3. Lists**

### **Markdown:**

```markdown
- Unordered item

* Another bullet

- Third type

1. Ordered item
2. Second item
   1. Sub-item (indent 3 spaces)
   2. Another sub-item

- [ ] Task unchecked
- [x] Task checked
```

### **Required HTML:**

```html
<ul>
  <li>Unordered item</li>
  <li>Another bullet</li>
  <li>Third type</li>
</ul>

<ol>
  <li>Ordered item</li>
  <li>
    Second item
    <ol>
      <li>Sub-item</li>
      <li>Another sub-item</li>
    </ol>
  </li>
</ol>

<ul>
  <li><input type="checkbox" /> Task unchecked</li>
  <li><input type="checkbox" checked /> Task checked</li>
</ul>
```

## **4. Links**

### **Markdown:**

```markdown
[inline link](https://github.com)
[reference link][1]
[link with title](https://github.com "GitHub Homepage")

[1]: https://github.com
```

### **Required HTML:**

```html
<a href="https://github.com">inline link</a>
<a href="https://github.com">reference link</a>
<a href="https://github.com" title="GitHub Homepage">link with title</a>
```

## **5. Images**

### **Markdown:**

```markdown
![alt text](image.jpg)
![alt text](image.jpg "title")
![reference image][img1]

[img1]: image.jpg
```

### **Required HTML:**

```html
<img src="image.jpg" alt="alt text" />
<img src="image.jpg" alt="alt text" title="title" />
```

## **6. Code**

### **Markdown:**

````markdown
Inline `code`

```javascript
// Code block with language
const x = 1;
```

```plaintext
// No language specified
```
````

### **Required HTML:**

```html
Inline <code>code</code>

<pre><code class="language-javascript">// Code block with language
const x = 1;</code></pre>

<pre><code>// No language specified</code></pre>
```

## **7. Blockquotes**

### **Markdown:**

```markdown
> Single line quote

> Multi-line
> blockquote
>
> With multiple paragraphs

> Nested > quotes
```

### **Required HTML:**

```html
<blockquote>
  <p>Single line quote</p>
</blockquote>

<blockquote>
  <p>Multi-line<br />blockquote</p>
  <p>With multiple paragraphs</p>
</blockquote>

<blockquote>
  <p>Nested</p>
  <blockquote>
    <p>quotes</p>
  </blockquote>
</blockquote>
```

## **8. Horizontal Rule**

### **Markdown:**

```markdown
---

---

---
```

### **Required HTML:**

```html
<hr />
```

## **9. Tables (GFM Extension)**

### **Markdown:**

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| _italic_ | **bold** | `code`   |
| Left     | Center   | Right    |
```

### **Required HTML:**

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
      <td>Cell 3</td>
    </tr>
    <tr>
      <td><em>italic</em></td>
      <td><strong>bold</strong></td>
      <td><code>code</code></td>
    </tr>
    <tr>
      <td align="left">Left</td>
      <td align="center">Center</td>
      <td align="right">Right</td>
    </tr>
  </tbody>
</table>
```

## **10. Footnotes (GFM Extension)**

### **Markdown:**

```markdown
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote.
```

### **Required HTML:**

```html
<p>
  Here's a sentence with a footnote.<sup id="fnref:1"
    ><a href="#fn:1" class="footnote-ref">1</a></sup
  >
</p>

<div class="footnotes">
  <hr />
  <ol>
    <li id="fn:1">
      <p>
        This is the footnote.<a href="#fnref:1" class="footnote-backref">↩</a>
      </p>
    </li>
  </ol>
</div>
```

## **11. Definition Lists (GFM Extension)**

### **Markdown:**

```markdown
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

### **Required HTML:**

```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>

  <dt>Term 2</dt>
  <dd>Definition 2a</dd>
  <dd>Definition 2b</dd>
</dl>
```

## **12. Emoji**

### **Markdown:**

```markdown
:smile: :heart: :+1: :rocket:
```

### **Required HTML:**

```html
<span class="emoji" data-emoji="smile">😄</span>
<span class="emoji" data-emoji="heart">❤️</span>
<span class="emoji" data-emoji="+1">👍</span>
<span class="emoji" data-emoji="rocket">🚀</span>
```

## **13. Autolinks**

### **Markdown:**

```markdown
https://github.com
<user@example.com>
```

### **Required HTML:**

```html
<a href="https://github.com">https://github.com</a>
<a href="mailto:user@example.com">user@example.com</a>
```

## **14. Mentions & Issues**

### **Markdown:**

```markdown
@username
#123
GH-123
```

### **Required HTML:**

```html
<a href="https://github.com/username" class="user-mention">@username</a>
<a href="https://github.com/owner/repo/issues/123" class="issue-link">#123</a>
```

## **15. Line Breaks & Paragraphs**

### **Markdown:**

```markdown
First line  
Second line (two spaces at end)

New paragraph
```

### **Required HTML:**

```html
<p>First line<br />Second line (two spaces at end)</p>
<p>New paragraph</p>
```

## **16. Superscript/Subscript**

### **Markdown:**

```markdown
H~2~O
E = mc^2^
```

### **Required HTML:**

```html
H<sub>2</sub>O E = mc<sup>2</sup>
```

## **17. Highlight**

### **Markdown:**

```markdown
==highlighted text==
```

### **Required HTML:**

```html
<mark>highlighted text</mark>
```

## **Turndown Configuration for GFM**

````javascript
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import { tables } from "turndown-plugin-gfm";

const turndownService = new TurndownService({
  headingStyle: "atx", // # Headers
  hr: "---", // Horizontal rule
  bulletListMarker: "-", // List style
  codeBlockStyle: "fenced", // ``` code blocks
  emDelimiter: "_", // _italic_
  strongDelimiter: "**", // **bold**
  linkStyle: "inlined", // [text](url)
  linkReferenceStyle: "full", // Complete reference links
});

// Add GFM features
turndownService
  .use(gfm) // Task lists, strikethrough, tables
  .use(tables); // Better table support

// Additional custom rules for GFM features
turndownService.addRule("highlight", {
  filter: ["mark"],
  replacement: function (content) {
    return "==" + content + "==";
  },
});

turndownService.addRule("superscript", {
  filter: ["sup"],
  replacement: function (content) {
    return "^" + content + "^";
  },
});

turndownService.addRule("subscript", {
  filter: ["sub"],
  replacement: function (content) {
    return "~" + content + "~";
  },
});
````

## **Important GFM-Specific Considerations**

1. **Task Lists:** Require `<input type="checkbox">` inside `<li>` elements
2. **Tables:** Must have proper `<thead>` and `<tbody>` structure
3. **Strikethrough:** Can use either `<del>` or `<s>` tags
4. **Code Blocks:** Language detection from `class="language-xxx"`
5. **Nesting:** Lists support up to 6 levels of nesting
6. **Line Breaks:** Treats single newlines as `<br>` (unlike standard Markdown)

## **Edge Cases to Handle**

```html
<!-- Mixed formatting -->
<p>
  <strong><em>bold italic</em></strong>
</p>

<!-- Complex nesting -->
<ul>
  <li>Text with <code>code</code> and <a href="#">link</a></li>
</ul>

<!-- Empty elements -->
<p></p>
<li></li>
```

This comprehensive list covers all GFM syntax elements with their HTML equivalents for building a rich text editor with Turndown conversion.
