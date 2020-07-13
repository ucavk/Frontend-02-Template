学习笔记

1. JS语言通识 | 泛用语言分类方法

语言按语法分类：
    非形式语言（中文，英文）
    形式语言（乔姆斯基谱系）（大多数计算机语言）：
        0型：无限制文法
        1型：上下文相关文法
        2型：上下文无关文法
        3型：正则文法

2. JS语言通识 | 什么是产生式
产生式（BNF）：
    用尖括号括起来的名称来表示语法结构名
    语法结构分成基础结构和需要用其他语法结构定义的复合结构
        （基础结构称终结符，复合结构称非终结符）
    引号和中间的字符表示终结符
    可以有括号
    *表示重复多次
    |表示或
    +表示至少一次

四则运算：1+2*3
终结符：Number,+-*/
非终结符：MultiplicativeExpression,AddtiveExpression
<MultiplicativeExpression>::=<Number>|
<MultiplicativeExpression>"*"<Number>|
<MultiplicativeExpression>"/"<Number>|
<AddtiveExpression>::=<MultiplicativeExpression>|
<AddtiveExpression>"+"<MultiplicativeExpression>|
<AddtiveExpression>"-"<MultiplicativeExpression>|

作业：
编写带括号的四则运算产生式
（1+2）*3
（一头雾水，听了两遍，还是不会）
<bracket>::=<Number>|
<bracket>"()"<Number>|
<AddtiveExpression>::=<Number>|
<AddtiveExpression>"+"<Number>|
<AddtiveExpression>"-"<Number>|
<MultiplicativeExpression>::=<AddtiveExpression>|
<MultiplicativeExpression>"*"<AddtiveExpression>|
<MultiplicativeExpression>"/"<AddtiveExpression>|

别人发的参考资料：
http://note.youdao.com/noteshare?id=6798299e8df0502d76d8caa210435b46&sub=5C10004D226844D0B617792A42AEC94A


3. JS语言通识 | 深入理解产生式

通过产生式理解乔姆斯基谱系
    0型：无限制文法
        ?::=?
    1型：上下文相关文法
        ?<A>?::=?<B>?
    2型：上下文无关文法
        <A>::=?
    3型：正则文法
        <A>::=<A>?
其它产生式(JS产生式)
    AdditiveExpression:
        MultiplicativeExpression
        AdditiveExpression +
    MultiplicativeExpression
        AdditiveExpression -
    MultiplicativeExpression

4. JS语言通识 | 现代语言的分类
现代语言的特例
    JS中，/可能是除号，也可能是正则表达式开头，处理方式取决于当前是否可以接受直接量，字符串模板中也需要特殊处理}，还有自动播入分号规则
语言的分类
    形式语言-用途
        数据描述语言:JSON,HTML,XAML,SQL,CSS
        编程语言:C,C++,JAVA,C#,PYTHON,RUBY,PERL,LIST,T-SQL,CLOJURE,HASKELL,JAVASCRIPT
    形式语言-表达方式
        声明式语言:JSON,HTML,XAML,SQL,CSS,LISP,CLOJURE,HASKELL
        命令型语言:C,C++,JAVA,C+,PYTHON,RUBY,PERL,JAVASCRIPT

练习：尽可能寻找你知道的计算机语言，尝试把它们分类
数据描述语言：HTML,JSON,CSS,SQL
编程语言：C,C++,C#,JAVA,PYTHON,RUBY,JAVASCRIPT,PHP

5. JS语言通识 | 编程语言的性质

图灵完备性（现代语言基本都具备图灵完备）
    命令式——图灵机
        goto
        if和while
    声明式——lambda演算，邱奇
        递归

动态与静态
    动态
        在用户的设备/在线服务上
        产品实际运行时
        Runtime
    静态
        在程序员的设备上
        产品开发时
        Compiletime
类型系统
    动态类型系统与静态类型系统
    强类型与弱类型
        String + Number
        String == Boolean（JS中不要用）
    复合类型
        结构体
        函数签名
    子类型
    泛型
        逆变/协变


6. JS语言通识 | 一般命令式编程语言的设计方式
一般命令式编程语言
    Atom
        Identifier
        Literal
    Expression
        Atom
        Operator
        Punctuator
    Statement
        Expression
        Keyword
        Punctuator
    Structure
        Function
        Class
        Process
        Namespace
        ......
    Program
        Program
        Module
        Package
        Library

重学JAVASCRIPT
语法->语义->运行时


7. JS类型 | Number

Atom
    Grammar
        Literal
        Variable
        Keywords
        Whitespace
        Line Terminator
    Runtime
        Types
        Exectuion Context
Types
    Number
    String
    Boolean
    Object
    Null
    Undefined
    Symbol  用于Object属性名

Number有理数
    IEEE 754 Double Float
    sign(1)
    Exponent(11)
    Fraction(52)
Number--Grammar
    DecimalLiteral
        0
        0.
        .2
        1e3
    BinaryIntergerLiteral
        0b111
    OctalIntergerLiteral
        0o10
    HexIntegerLiteral
        0xFF

0 .toString()


8. JS类型 | String
String
    Character
    Code Point
    Encoding

    ASCII(只规定了127个字符)
    Unicode
    UCS（0000-FFFF）
    GB（和Unicode字符编码不一致，兼容ASCII）
        GB2312
        GBK(GB13000)
        GB18030
    ISO-8859
    BIG5(台湾大五码)

String--Encoding
    UTF
        UTF8
        UTF16

String--Homework

    写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。

    //不会，网上抄的
    function UTF8_Encoding(string){
        const code = encodeURIComponent(string);
        const bytes = [];
        for(var i=0; i<code.length; i++){
            const c = code.charAt(i);
            if(c===‘%’){
                const hex = code.charAt(i+1)+code.charAt(i+2);
                const hexVal = parseInt(hex,16);
                bytes.push(hexVal);
                i+=2;
            }else
                bytes.push(c.charCodeAt(0));
        }
        return bytes;
    }

String--Grammar
    "abc"
    'abc'
    `abc`

String--Grammar Chanllenge
    A regular Expression to match string literal.

    "(?:[^"\n\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2029\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|]]u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\r\u2028\u2029])*"

String--Grammar--Template
    `ab${x}abc${y}abc`
        `ab${    
        }abc${
        }abc`


9. JS类型 | 其他类型

Boolean
    true
    false

Null&Undefined
    null  关键字
    undefined 非关键字
    void 0; 用这个来表示undefined，void后面不管什么都是 undefined


10. JS对象 | 对象的基础知识

Object
    三只一模一样的鱼，其实是三个对象
    其中一只鱼发生了状态改变，失去了尾巴
    其它两只鱼并不受到影响
    因此，当我们在计算机中描述这三只鱼时，必须把相同的数据存储三份

    所以任何一个对象都是唯一的，这与它本身的状态无关。
    所以，即使状态完全一致的两个对象，也并不相等。
    我们用状态来描述对象。
    我们状态的改变即是行为。

    对象三要素：identifier,state,behavior

Object--Class
    Object
        Animal
            Fish
            Sheep

    类是一种常见的描述对象的方式。

    而“归类”和“分类”则是两个主要的流派。

    对于“归类”方法而言，多继续是非常自然的事情。如C++

    而采用分类思想的计算机语言，则是单继续结构。并且会有一个基类Object

Object--Prototype
    Nihilo
    Object Prototype
    Animal Prototype
        Fish Prototype
        Sheep Prototype
    
    原型是一种更接近人类原始认知的描述对象的方法。
    我们并不试图做严谨的分类，而是采用“相似”这样的方式去描述对象。
    任何对象仅仅需要描述它自己与原型的区别即可。

Object Exercise
    狗咬人
    “咬”这个行为该如何使用对象抽象？

    第一遍先用手机看过了，如果没看过可能会写狗类
    var dog = {};
    dog.bite = function(o){
        if(o == "person"){
            console.log('人去打疫苗')
        }
    }

    var person = {};
    person.hurt = function(type){
        if(type == "dog bite"){
            console.log('人去打疫苗');
        }
    }


11. JS对象 | JS中的对象

Object in Javascript

    Object
    Property
    [[Prototype]]

    在Javascript运行时，原生对象的描述方式非常简单，我们只需要关心原型和属性两部分。

    Symbol       ->       Data
    String       ->       Accessor

    Data Property
        [[value]]
        writable
        enumerable
        configurable
    Accessor Property
        get
        set
        enumerable
        configurable

    JS用属性来统一抽象对象状态和行为。

    一般来说，数据属性用于描述状态，访问器属性则用于描述行为。

    数据属性中如果存储函数，也可以描述行为


    Object
    Object
    Object
    当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名称的属性，而原型对象还可能有原型，因此，会有“原型链”这一说法。
    这一算法保证了，每个对象只需要描述自己和原型的区别即可。

Object API/Grammar
    {} . [] Object.defineProperty
    Object.create/Object.setPrototypeOf/Object.getPrototypeOf
    new/class/extends
    new/function/prototype（不建议用）

Function Object
    Object[[call]]

    JS中还有一些特殊的对象，比如函数对象。
    除了一般对象的属性和原型，函数对象还有一个行为[[call]]

    我们用JS中的function关键字、箭头运算符或者Function构造器创建的对象，会有[[call]]这个行为。

    我们用类似f()这样的语法把对象当做函数调用时，会访问到[[call]]这个行为。

    如果对应的对象没有[[call]]行为，则会报错。

Special Object
    Array[[length]]
    Object.prototype[[setPrototypeOf]]

Host Object
    Object[[call]][[construct]]

作业：找出JS标准里面所有具有特殊行为的对象

Array、Date、RegExp、Promise、Proxy、Map、WeakMap、Set、WeakSet、Function、Boolean、String、Number、
Symbol、Object、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError、
ArrayBuffer、SharedArrayBuffer、DataView、Typed Array、Float32Array、Float64Array、Int8Array、
Int16Array、Int32Array、UInt8Array、UInt16Array、UInt32Array、UInt8ClampedArray。

参考：
js对象分类https://www.cnblogs.com/zhaoyang007/p/12676381.html