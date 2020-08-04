学习笔记

1. 重学HTML | HTML的定义：XML与SGML

DTD
w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd

2. 重学HTML | HTML标签语义

3. 重学HTML | HTML语法

合法元素
Element:<tagname>...</tagname>
Text:text
Comment:<!--comments-->
DocumentType:<!Doctype html>
CDATA:<![CDATA[]]>

字符引用
&#161;
&amp;
&lt;
&quot;

4. 浏览器API | DOM API

Node
    Element
        HTMLElement
            HTMLAnchorElement
            HTMLAppleElement
            HTMLAreaElement
            HTMLAudioElement
            HTMLBaseElement
            HTMLBodyElement
            ...
        SVGElement
            SVGAElement
            SVGAltGlyphElement
            ....
    Document
    CharacterData
        Text
            CDATASection
        Comment
        ProcessingInstruction
    DocumentFragment
    DocumentType

导航类操作
    parentNode          parentElement
    childNodes          children
    firstChild          firstElementChild
    lastChild           lastElementChild
    nextSibling         nextElementSibling
    previousSibling     previousElementSibling

修改操作
    appendChild
    insertBefore
    removeChild
    replaceChild

高级操作
    compareDocumentPosition
    contains
    isEqualNode
    cloneNode

5. 浏览器API | 事件API

target.addEventListener(type,listener,)

Event:冒泡与捕获

先捕获再冒泡

6. 浏览器API | Range API

把一个元素所有的子元素逆序

var range = new Range()
range.setStart(element,9)
range.setEnd(element,4)
var range = document.getSelection().getRangeAt(0)

range.setStartBefore
range.setEndBefore
range.setStartAfter
range.setEndAfter
range.selectNode
range.selectNodeContents

var fragment = range.extractContents()
range.insertNode(document.createTextNode('aaa'))

7. 浏览器API | CSSOM

document.styleSheets

document.styleSheets[0].cssRules
document.styleSheets[0].insertRule('p{color:pink}',0)
document.styleSheets[0].removeRule(0)

CSSStyleRule
CSSCharsetRule
CSSImportRule
...

CSSStyleRule
    selectorText String
    style K-V结构

window.getComputedStyle(elt,pseudoElt)

8. 浏览器API | CSSOM View

window.innerHeight,window.innerWidth
window.devicePixelRatio
window.screen
    window.screen.width
    window.screen.height
    window.screen.availWidth
    window.screen.availHeight

window.open('about:blank','blank','width=100,height=100,left=100,right=100')
moveTo(x,y)
moveBy(x,y)
resizeTo(x,y)
resizeBy(x,y)

getClientRects()
getBoundingClientRect()

9. 浏览器API | 其它API

标准化组织
khronos
    WebGL
ECMA
    ECMAScript
WHATWG
    HTML
W3C
    webaudio
    CG/WG

作业与实验：全部API的实验与整理






