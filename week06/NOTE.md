学习笔记

1. CSS总论 | CSS语法的研究

CSS总体结构
@charset
@import
rules
    @media
    @page
    rule

2. CSS总论 | CSS @规则的研究
@charset:https://www.w3.org/TR/css-syntax-3/
@import
@media
@page
@counter-style
@keyframes
@fontface
@supports
@namespace

3. CSS总论 | CSS规则的结构
选择器
声明
    key
    value

4. CSS总论 | 收集标准
w3.org/TR/?rag=css

JSON.stringtify(
Array.prototype.slice.call(document.querySelector("#container").children).filter(e=>e.getAttribute("data-tag).match(/css/)).map(e=>({name:e.children[1].innerText,url:e.children[1].children[0].href}))
)

5. CSS总论 | CSS总论总结

6. CSS选择器 | 选择器语法

简单选择器
*
div svg | a
.cls
#id
[attr=value]
:hover
::before

复合选择器
<简单选择器><简单选择器><简单选择器>
*或者div必须写在最前面

复杂选择器
<复合选择器><sp><复合选择器>
<复合选择器>">"<复合选择器>
<复合选择器>"~"<复合选择器>

7. CSS选择器 | 选择器的优先级

简单选择器计数
[0,0,0,0]

练习1
写出下面选择器的优先级
div#a.b .c[id=x]    1
#a:not(#b)          2
*.a                 4
div.a               3

8. CSS选择器 | 伪类

链接/行为
:any-link
:link :visited
:hover
:active
:focus
:target

树结构
:empty
:nth-child()
:nth-last-child()
:first-child :last-child :only-child

逻辑型
:not
:where :has

9. CSS选择器 | 伪元素

伪元素
::before
::after
::first-line
::first-letter

思考题：
为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

答：因为first-letter是确定的一个字符，而 first-line的字符数量随着浏览器分辨率宽度不同显示的字符数量是不同的，如果可以使用上面的这些设置的话，会造成很多兼容问题。

