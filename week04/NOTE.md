学习笔记

1. 浏览器总论 | 浏览器工作原理总论

浏览器
URL(HTTP)-HTML(parse)-DOM(css computing)-DOM with CSS(layout)-DOM with position(render)-Bitmap

2. 状态机 | 有限状态机

有限状态机
每一个状态都是一个机器
    在每一个机器里，我们可以做计算、存储、输出
    所有的这些机器接受的输入是一致的
    状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
每一个机器知道下一个状态
    每个机器都有确定的下一个状态（Moore）
    每个机器根据输入决定下一个状态（Mealy）

JS中的有限状态机（Mealy）
//每个函数是一个状态
function state(input){//函数参数就是输入
    //在函数中，可以自由地编写代码，处理每个状态的逻辑
    return next;//返回值作为下一个状态
}
//调用
while(input){
    //获取输入
    state = state(input);//把状态机的返回值作为下一个状态
}

3. 状态机 | 不使用状态机处理字符串（一）

使用有限状态机处理字符串
在一个字符串中，找到字符'a'
        function match(string){
            for(let c of string){console.log(c)
                if( c == 'a')
                    return true;
            }
            return false;
        }

        var a = match('I am a happy person.')

        console.log(a)




4. 状态机 | 不使用状态机处理字符串（二）
使用有限状态机处理字符串
在一个字符串中，找到字符'ab'
        function matchab(string){
            let finda = false;
            for(let c of string){console.log(c)
                if( c == 'a'){
                    finda = true;
                }else if( c=='b')
                    
                    return true;
                
            }
            return false;
        }

     
        var ab = matchab('I am ab happy person.')


5. 状态机 | 不使用状态机处理字符串（三）
使用有限状态机处理字符串
在一个字符串中，找到字符'abcdef'

        function matchabcdef(string){
            let finda,findb,findc,findd,finde,findf;
            for(let c of string){console.log(c)
                if( c == 'a'){
                    finda = true;
                }else if( c=='b'){
                    findb = true;
                }else if( c=='c'){
                    findc = true;
                }else if( c=='d'){
                    findd = true;
                }else if( c=='e'){
                    finde = true;
                }else if(finda && findb &&findc &&findd && finde && c == 'f'){
                    return true;
                }
            }
            return false;
        }

        var abcdef = matchabcdef('I am abcdef happy person.')


6. 状态机 | 使用状态机处理字符串（一）


function match(string){
    let state = start;
    for(let c of string){
        state = state(c);
    }
    return state === end;
}

function start(c){
    if(c === 'a') return foundA;
    else return start;
}

function end(c){
    return end;
}

function foundA(c){
    if(c === 'b') return foundB
    else return start(c);
}

function foundB(c){
    if(c === 'c') return end;
    else return start(c);
}

console.log(match('I am ababcfefcde'))

7. 状态机 | 使用状态机处理字符串（二）
我们如何用状态机处理诸如“abcabx"这样的字符串

function match(string){
    let state = start;
    for(let c of string){
        state = state(c);
    }
    return state === end;
}

function start(c){
    if(c === 'a') return foundA;
    else return start;
}

function end(c){
    return end;
}

function foundA(c){
    if(c === 'b') return foundB
    else return start(c);
}

function foundB(c){
    if(c === 'c') return foundC;
    else return start(c);
}

function foundC(c){
    if( c==='a') return foundA2;
    else return start(c);
}

function foundA2(c){
    if(c === 'b') return foundB2;
    else return start(c);
}

function foundB2(c){
    if(c === 'x') return end;
    else return foundB(c)
}

console.log(match('I am abcabxfcde'))

我们如何用状态机处理诸如“abababx"这样的字符串
function match(string){
    let state = start;
    for(let c of string){
        state = state(c);
    }
    return state === end;
}

function start(c){
    if(c === 'a') return foundA;
    else return start;
}

function end(c){
    return end;
}

function foundA(c){
    if(c === 'b') return foundC
    else return start(c);
}


function foundC(c){
    if( c==='a') return foundA2;
    else return start(c);
}

function foundA2(c){
    if(c === 'b') return foundB2;
    else return start(c);
}

function foundB2(c){
    if(c === 'x') return end;
    else return foundB(c)
}

console.log(match('I am ababxfcde'))

可选作业，我们如何用状态机处理完全未知的pattern？
参考资料：字符串KMP算法
 

8. HTTP请求 | HTTP的协议解析

ISO-OSI七层网络模型

应用                HTTP            require('http')
表示                HTTP            require('http')
会话                HTTP            require('http')
传输                TCP             require('net')
网络                Internet
数据链路             4G/5G/WI-FI
物理层              4G/5G/WI-FI


TCP与IP的一些基础知识
流                   包
端口                 IP地址
require('net')      libnet/libpcap

HTTP
Request
Response

9. HTTP请求 | 服务端环境准备
POST/HTTP/1.1                                Request line
Host:127.0.0.1                               Headers
Content-Type:application/x-www-form-urlencoded

field1=aaa&code=x%3D1


10. HTTP请求 | 实现一个HTTP的请求

第一步 HTTP请求总结
设计一个HTTP请求的类
content type是一个必要的字段，要有默认值
body 是KV格式
不同的content-type 影响body的格式


11. HTTP请求 | send函数的编写，了解response格式

第二步 send函数总结
在Request的构造器中收集必要的信息
设计一个send函数，把请求真实发送到服务器
send函数应该是异步的，所以返回Promise

HTTP/1.1 200 OK                         status line
Content-Type:text/html                  headers
Date:Mon,23 Dec 2019 06:46:19 GMT
Connection:keep-alive
Transfer-Encoding:chunked

26                                       body
<html><body>hello world</body></html>
0

12. HTTP请求 | 发送请求

第三步发送请求
设计支持已有的connection或者自己新建connection
收到数据传给parser
根据parser的状态resolve Promise

13. HTTP请求 | response解析

第四步 ResponseParser总结
Response必须分段构造，所以我们要用一个ResponseParser来“装配”
ResponseParser分段处理ResponseText,我们用状态机来分析文本的结构

14. HTTP请求 | response body的解析

第五步 BodyParser总结
Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构来解决问题
以TrunkedBodyParser为例，我们同样用状态机来处理body的格式


15. HTML解析 | HTML parse模块的文件拆分

第一步总结
为了方便文件管理，我们把parser单独拆到文件中
parser接受HTML文本作为参数，返回一颗DOM树

16. HTML解析 | 用FSM实现HTML的分析

html.spec.whatwg.org/multipage/
Tokenization
12.2.5.1 Data state

第二步总结
我们用FSM来实现HTML的分析
在HTML标准中，已经规定了HTML的状态
Toy-Browser只挑选其中一部分状态，完成一个最简版本

17. HTML解析 | 解析标签
第三步
开始标签
结构标签
自封闭标签

18. HTML解析 | 创建元素

第四步总结
在状态机中，除了状态迁移，我们还会要加入业务逻辑
我们在标签结束状态提交标签token

19. HTML解析 | 处理属性

第五步总结
属性值分为单引号、双引号、无引号三种写法，因此需要较多状态处理
处理属性的方式跟标签类似
属性结束时，我们把属性加到标签Token上

20. HTML解析 | 用token构建DOM树

第六步总结
从标签构建DOM树的基本技巧是使用栈
遇到开始标签时创建元素并入栈，遇到结束标签时出栈
自封闭节点可视为入栈后立刻出栈
任何元素的父元素是它入栈前的栈顶

21. HTML解析 | 将文本节点加到DOM树

第七步总结
文本节点与自封闭标签处理类似
多个文本节点需要合并










