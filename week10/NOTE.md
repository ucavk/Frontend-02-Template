学习笔记

1. 使用LL算法构建AST | 四则运算

TokenNumber:
1234567890的组合

Operator: +,-,*,/ 之一

Whitespace:<sp>

LineTerminator:<LF><CR>

<Expression>::=<AdditiveExpression><EOF>

<AdditiveExpression>::=<MultiplicativeExpression>
|<AdditiveExpression><+><MultiplicativeExpression>
|<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
<Number>
|<MultiplicativeExpression><*><Number>
|<MultiplicativeExpression></><Number>

LL语法分析


2. 使用LL算法构建AST | 正则表达式


3. 使用LL算法构建AST | LL词法分析


4. 使用LL算法构建AST | LL语法分析（一）


5. 使用LL算法构建AST | LL语法分析（二）


6. 字符串分析算法 | 总论

字典树：大量高重复字符串的存储与分析 

KMP：在长字符串里找模式

Wildcard：带通配符的字符串模式

正则：字符串通用模式匹配

状态机：通用的字符串分析

LL LR：字符串多层级结构分析


7. 字符串分析算法 | 字典树


8. 字符串分析算法 | KMP字符串模式匹配算法


9. 字符串分析算法 | Wildcard

wildcard:ab*c?d*abc*a?d
只有*
只有?



