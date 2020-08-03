学习笔记

1. CSS排版 | 盒

源代码  标签    Tag
语义    元素    Element
表现    盒      Box

HTML代码中可以书写开始标签，结束标签，和自封闭标签。
一对起止标签，表示一个元素。
DOM树中存储的是元素和其它类型的节点（Node）
CSS选择器选中的是元素
CSS选择器选中的元素，在排版时可能产生多个盒。
排版和渲染的基本单位是盒。

盒模型
content     content-box
padding
border      border-box
margin

2. CSS排版 | 正常流

layout 排版，布局

写字也是一个排版的过程。
    从左到右书写
    同一行写的文字都是对齐的
    一行写满了，就换到下一行

正常流排版
    收集盒进行
    计算盒在行中的排布
    计算行的排布

BFC块级格式化上下文           从上到下

IFC行内级格式化上下文         从左到右

3. CSS排版 | 正常流的行级排布

baseline

text

行模型
line-top
text-top
base-line
text-bottom
line-bottom

4. CSS排版 | 正常流的块级排布

5. CSS排版 | BFC合并

Block

Block Container:里面有BFC的
    能容纳正常流的盒，里面就有BFC，想想有哪些？
Block-level Box:外面有BFC的

Block Box = Block Containter+ Block-level Box
里外都有BFC

Block Container
    block
    inline-block
    tabel-cell
    flex item
    grid cell
    table-caption

Block-level Box

block level
    display:block
    display:flex
    display:table
    display:grid

inline level
    display:inline-block
    display:inine-flex
    display:inline-table
    display:inline-grid

设立BFC
    floats
    absolutely positioned elements
    block containers
    and block boxes width 'overflow' other than 'visible'

合并BFC
    block box && overflow:visible
        BFC合并与float
        BFC合并与边距折叠

6. CSS排版 | Flex排版

收集盒进行
计算盒在主轴方向的排布
计算盒在交叉轴方向的排布

分行
    根据主轴尺寸，把元素分进行
    若设置了no-wrap，则强行分配进第一行

计算主轴方向
    找出所有的flex元素
    把主轴方向的剩余尺寸按比例分配给这些元素
    若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

计算交叉轴方向
    根据每一行中最大元素尺寸计算行高
    根据行高flex-align和item-align，确定元素具体位置 

7. CSS动画与绘制 | 动画

animation
@keyframes定义
animation:使用

@keyframes mykf{
    from{background:red}
    to{background:yellow}
}

.mykf{animation mykf 5s infinite}


transition


cubic-bezier.com

8. CSS动画与绘制 | 颜色

CMYK与RGB

HSL与HSV

9. CSS动画与绘制 | 绘制

几何图形
border
box-shadow
border-radius
文字
font
text-decoration
位图
background-image

应用技巧
data uri+svg
data:image/svg+xml,<svg></svg>

作业：
在 CSS 脑图上对 CSS 的属性进行分类

CSS属性分类

文本/字体/颜色/背景

字体类
font-family：指定字体
需要考虑客户端机器上是否装有字体
可以排列多个字体，用逗号分隔，如果有空格用引号分隔
最后一个建议放通用字体名，这个属性只有几个选项：serif | sans-serif | cursive | fantasy | monospace
font-size：字体大小，要注意有绝对大小，相对大小，长度，百分比
一般建议采用相对大小，即em或者rem
典型的长度单位，详细信息请参考这里
font-style：正常体、斜体、倾斜体
font-weight：设置粗体
font-variant：用来将所有字体都变成大写，但是原来是大写的字体呢又要比默认的要大一些
font：
简写形式，如上所有跟字体相关的字体混合在一起
font-family是必选的，而且一定要在最后；font-size如果有，必须出现在倒数第二个, 后面可以用/跟一个line-height的设置
剩下的font-style, font-weight, font-variant就无所谓了，前面任意排列
font还支持一些类似caption, icon等快捷描述
详细请参考这里
line-height：一个数字，默认差不多为1.2，有normal/数字/长度/百分比
一般建议使用纯数字, 用长度和百分比都在某些特殊情况下超出预期，即子元素的行高被父亲元素设置了，同时子元素还有默认的浏览器字体设置的场景。参考这里
长度可以参考这里
font-size-adjust：不太常用属性，用来设置英文字体的大小写字母之间的高度比例的

文本类
word-spacing：词和词之间的距离，默认值是由字体来定的，自定义可以定义为长度/百分比，对于中文来讲，也是空格
letter-spacing：字母和字母之间的距离，默认值是由字体来定的，可以自定义为长度单位
word-break：文字换行逻辑
normal：默认值，英文空格处换行，中文任意字符换行；
break-all：都采用中文的方式任意换行；
keep-all：都采用英文的方式，中文也要遇到了空格或者回车等特殊符号才换行
break-word：跟normal类似，不过即使min_width(即单个单词的长度)大于容器的width的时候，会换行，而不是超出
word-wrap/overflow-wrap：normal/break-word。word-wrap是overflow-wrap的别名。逻辑跟如上word-break的break-word的逻辑类似，要溢出的时候是否换行, 详情参考这里
vertical-align: 上下对齐方式
只针对display的值为inline和table-cell的元素有效，比如span，img，input，td等元素，对于其他块级元素都不生效
取值范围为枚举/长度/百分比
枚举取值为：baseline(基线默认)/super(上标)/sub(下标)/top(父元素顶部)/bottom(父元素底部)/middle(父元素中部)/text-top(文字顶部)/text-bottom(文字底部)
text-align: 左右对齐方式
也是指针对行内元素有效，不能针对块级元素进行控制
取值为：left, right, center和justify(两侧对齐)
text-transform：大小写转换
取值为枚举：capitalize：首字母大写；uppercase/lowercase; none;
text-shadow：阴影设置，可以设置阴影的颜色，相对原字体的位置，以及模糊半径
text-decoration：设置颜色、位置、样式。分别对应了text-decoration-color，text-decoration-line，text-decoration-style
位置可以为：上划线、下划线、删除线、闪烁和无
样式可以为：实线(solid)、双实线(double)、dotted(点虚线)、dashed(虚线)、wavy(波浪线)
注意：父亲会影响儿子，且儿子无法取消
text-indent：缩进，段落第一行文本要空多少距离，单位为长度
text-justiy：在text-align被设置为justiy的时候用来控制是在单词之间加空格(英文)，还是在字母之间加空格(中文)
text-overflow：文本溢出的截断，可以用'...'来代替，或者用自己定义的字符串来代替超出字符
需要配合 overflow: hidden 的属性来控制, 否则还是会超出边距显示
white-space：控制空格符，"\t", "\n"以及显示的时候是否折行显示的属性
normal/nowrap/pre/pre-wrap/pre-line：详情参考这里

颜色&背景类
color：背景颜色，关于眼色的值一共有三种，枚举值，#xxx, rgb, hsl，详细请参考这里
opacity：不透明度，即设置颜色的透明的程度，0为透明，1为不透明，单独的属性设置和用color的rgba函数来设置都一样
backgroud-color：背景颜色
backgroud-image：
可以指定多个图片，第一个图片最接近用户，border会最后绘制
backgroud-clip：背景图片延伸到盒子模型的范围，到文本、到边框内沿，到边框外沿
backgroud-origin：跟backgroud-clip类似，只是只作用域backgroud-image, 可以取值为border-box, padding-box, content-box
backgroud-position：背景图片的位置，可以设置为枚举值，也可以设置为相对于左上角的坐标，分别为长度单位，这个值一般要跟backgroud-repeat: no-repeat配合使用
backgroud-size：设置背景图片的大小，可以控制压缩或者截断或者比例
auto：自动
cover：图片做截断，装满背景，但是背景图片可能显示不全
contain：图片不做截断，但是有可能装不满背景
还可以指定长宽来按照指定的比例来缩放背景图片
backgroud-repeat：不重复；沿着x,y轴重复（最后一个图片可能会被截断）；图片不截断，但是中间留空隙；图片不截断，同时拉伸/压缩图片保证图片之间无空隙；
backgroud-attachment：背景图片是否随着鼠标滚轮而变动位置
backgroud：如上各个backgroud开头的属性的组合，组合比较自由，一共8个元素：
backgroud-color必须出现在最后；
盒子属性有backgroud-clip, backgroud-origin，可以出现0,1,2次
backgroud-size必须出现在backgroud-position之后，用/连接
backgroud-image, backgroud-position, backgroud-size, backgroud-repeat, backgroud-attachment 可以任意出现

文字连接&鼠标样式
a:link 文字连接默认格式； a:visited 访问过后的链接样式；a:active 鼠标点击时候的样式；a:hover 鼠标移动上去的样式；
鼠标样式：help 加?；pointer 变为手；progress：请等待；wait：系统繁忙；move：拖拽；not-allowed：不能执行；等等，详细请参考这里

大小/布局类

大小属性
width/height：包含了width，max-width，min-width几个配套的属性，值为长度/百分比；同时还可以设置一些属性值，用于表达width用于内容级别，还是border级别等；
max-width/max-height：最大宽度/高度
min-width/min-height：最小宽度/高度

盒子模型类
border：包含了粗细、样式、颜色。
border-width：可以有1~4个长度值。1个代表4个边；2个的话代表横边和纵边；3个代表上，左&右，下；4个代表上，右，下，左
border-style：可以有1~4个枚举值。跟text-decoration类似，可以有实线、双实线、虚线、点虚线、波浪线等，还可以有浮雕、陷入、突出等效果；
border-color：可以有1~4个颜色值。
border-image：可以用来设置边框的图片，用来显示一些比较漂亮的边框，图片选择哪些部分来作为边框请参考这里
border-radius：用来设置圆角的
box-shadow：边框的模糊划效果，跟text-shadow是类似的效果，可以设置阴影相对位置/阴影模糊半径/扩散半径/阴影颜色；
outline：outline跟border类似, 是画边框的，
跟border的区别是 1. 不占盒子模型宽度; 2. 可能不是矩形;
准确来说, outline应该不算是盒子模型的属性
跟border类似有, outline-style, outline-color, outline-width三个子属性
margin/padding：外边距，内边距的属性，可以有1~4个值，不同个数的值代表函数同边；
margin-top/margin-bottom/margin-left/margin-right：对应的控制4个边的外边距的属性
padding-top/padding-bottom/padding-left/padding-right：对应的控制4个边的内边距的属性

布局类

基础定位类
float：浮动属性
clear：清除浮动
position：位置类型
top/left/bottom/right：如果设置了position为非static的话，就可以设置这几个值来调整div的相对位置
display：显示类型
visibility：是否显示，设置为hidden则不显示，跟display:none最大的区别就在其还是会占据空间；还有个跟表格相关的collapse的选项；
overflow：visible(默认值), 会显示出来；hidden, 不显示了；scroll，增加滚动条；auto，交给浏览器来判断是否装得下，装不下就加滚动条；
clip：用来剪切一个形状的属性，可以剪切为圆形，不规则多边形，圆弧等形状
transform：对元素属性主要是用来对某个元素进行旋转，偏移等，demo效果请参考这里。
z-index：
不同z-index之间的比较只针对父亲和直属子元素，一个比较好的理解是给理解成目录版本号，详细请参考这里
除了z-index之外，还有其他的一些属性也会生成一个新的层叠上下文
z-index不为auto：非static的元素，或者flex元素
opacity小于1, 即元素半透明
transform不为nong的元素，即有各种角度变换的操作等

多列属性
columns：像论文一样将文章按照多列的方式来展示，可以分成任意多列；
column-count：分成几列来显示文本
column-gap：每一列之间的间距大小
column-rule：每一列之间的间隔样式(类似border)
column-span：可以将某段文字横跨所有列, 比如标题，或者将文章分成几个格子来展现
column-width：每一个列的宽度；

Flex布局
父亲元素设置

基本属性设置

弹性布局，更多详细请参考这里

该布局主要用于单行的横向排版布局, 相比于float等布局方式主要好处在于其不脱离文档流, 控制比例方便

display:flex：将父亲设置为 flex 弹性布局
flex-direction：row(从左往右), row-reverse(从右往左), column(从上往下), column-reverse(从下往上)
主轴：以从左往右为例, 就是左->右;
交叉轴：就是垂直于主轴的方向，以rtl为例, 就是上->下；
起始和终止：以左->右布局为例, 起始就是左边交叉轴->右边交叉轴;
主轴和交叉轴概念很重要，因为各种属性都是控制区块是如何在主轴和交叉轴上面分布的；
flex-wrap：沿着主轴的元素如果超出父元素宽度之后，是否自动折行显示新子元素，默认不折行，直接超出父元素显示；
wrap：换行；nowrap：不换行；
flex-flow：将flex-direction和flex-wrap合起来的简写属性；
元素对齐与空间分配

align-items：元素在交叉轴上的高度控制
flex-start：顶部对齐，不自动拉伸高度
felx-end：底部对齐，不自动拉伸高度
center：中间对齐
stretch：默认值，自动拉伸占满所有高度
justify-content：在主轴上的布局方式
flex-start：靠左对齐
flex-end：靠右对齐
center：居中
space-round：平均分布，左右也留白
space-between：平均分布，左右对齐边界
align-content：对于多行的flex容器设置行与行之间的排布
子元素宽度属性

占据宽度设置

flex-bias：用来决定子元素的初始长度
默认为auto，意思是让浏览器来决定宽度，如果设置了width，就用；否则就浏览器自己计算；
也可以人工指定绝对值或者百分比（相对父亲），用来手动指定宽度
flex-grow：一个绝对的数字，如果子元素之和没有父元素宽的话，就用这个数字的相对比例来决定每个元素如何分配剩下的空间
flex-shrink：跟flex-grow类似，只不过是子元素之和大于父元素的时候，怎么压缩，不过压缩不会无限制压缩，每个元素都会有个最小宽度。
具体grow和shrink在实际应用当中的表现可以参考这里
flex：如上三个属性的简写，可以为枚举值或者1~3个数字
auto：相当于1 1 auto，即自动伸长，也自动伸缩，宽度由浏览器决定
initial: 默认值, 相当于0 1 auto, 即不自动伸长，但是自动收缩，宽度由浏览器决定
none：相当于0 0 auto，即不自动伸长，也不自动收缩，宽度由浏览器决定
如果是一个值：
如果是一个无单位的数，会被当成flex-grow的值
如果是一个长度/宽度单位，会被当成flex-bias的值
如果是两个值：
第一个值必须是一个无单位的数，当成是flex-grow的值
第二个值可以是：
一个无单位的数，当成是flex-shrink的值
一个长度/宽度单位，会被当成是flex-bias的值
如果是三个值
第一个值必须是无单位的数，会被当成flex-grow的值
第二个值必须是无单位的数，会被当成是flex-shrink的值
第三个值必须是长度/宽度单位或者枚举值，被当成flex-bias的值
占据高度设置
align-self：在子元素上面设置元素在交叉轴上面的高度控制
默认为父亲的align-items的值
如果设置了，就覆盖父亲的值，值得取值范围和含义跟align-items一模一样
排序设置
order：如果子元素设置了该属性，则各子元素按照order值排序，否则按照文档出现的先后顺序排序

网格布局
网格布局跟Flex弹性布局是类似的，都是css3新出的属性。

Flex主要针对的是单行的布局，一般不会换行。Grid主要针对的是表格类多行布局，可以将其想象成在css中控制类似excel的表格。

相比于普通的html中的table布局，Grid布局一方面主要是在 css 中控制表格效果，另一方面是在合并单元格方面比表格布局会更灵活。

更多跟Grid布局相关的信息，请参考这里

父亲属性

display: grid：将父亲设置为表格布局属性，所有其直属儿子都会按照表格方式布局
grid-template-columns：将表格分为多少列
可以直接写100px, 100px, 100px 将表格分为三个 100px 的列
也可以写 1fr, 1fr, 1fr 将表格均分为三个相同的列，主要 fr 是专门为grid布局新出的一个单位
也可以写 repeat(3, 1fr) 达到跟上面一样的效果，这样可以减少书写的量
还可以为每条线命名，这样儿子就可以不用坐标，而用名字来定位，有的时候这样代码会更可读一些，比如
grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
grid-template-rows：将表格分为多少行，同上
grid-auto-rows：设置每一行的高度，可以用minmax(100px, auto)来设置为最少100px, 最高就让浏览器自己设置
grid-auto-columns：同grid-auto-rows
grid-column-gap：列与列之间的宽度，一个长度单位
grid-row-gap：行与行之间的宽度，一个长度单位
grid-gap：如上两个属性的简写
如果只有一个值，会同时应用到行与列的间距
如果有两个值，第一个用到行，第二个用到列
grid-template-areas：这个是基于命名网格的定位， 在该属性中将所有单元格属于哪个儿子都写出来，详情请参考这里
儿子属性
儿子定位默认是从左到右，从上到下，按照单元格依次排布的。

而Grid属性最大的作用就是可以弹性布局，即合并单元格，每个儿子可以指定自己所占据的单元格的区间。

设置的方式有多种：

grid-column-start/grid-column-end/grid-row-start/grid-row-end：这四个属性就对应了横纵坐标轴(注意，是从1开始)
默认每个儿子只占一个单元格，所以如果只写了start，不写end的话，默认end就是start+1；同样，如果只写了end的话，start就是end-1
坐标可以设置为负数，即导数第几个坐标
grid-column/grid-row的简写，如下：
grid-column: 1 / 2
grid-row： 1 / 4
可以用span关键字来改为start/start+_span_的方式来设置单元格属性，这样可以专注单元格大小，示例如下：
grid-column: 1 / span 1
grid-row: 1/ span 3
效果跟上面两行效果是一样的
grid-area属性，如下：
grid-area：1 / 1 / 4 / 1
该属性是按照 上/左/下/右 的顺序来写的，跟margin正好是反方向的

表格布局
表格布局是很老很早的布局了，其布局结构主要在html中控制，css中有如下的几个属性来控制表格的行为：

而现在表格一般不用来布局了，主要还是用来做表格类数据的呈现。

border-collapse：控制单元格之间的边框是否合并，默认不合并，但是一般都要设置为合并；

默认为seperate，合并为collapse
border-spacing：跟grid-gap类似，设置的单元格之间的间距，如果是一个值就是统一设置，如果是两个值就是先行后列

如果设置了border-collapse属性，就会忽略border-spacing的属性
empty-cells：在没有内容的单元格周围是否绘制边框

show：绘制，默认值
hide：不绘制
如果设置了border-collapse为collapse的话，就会忽略该属性
caption-side：可以在html中用 caption 添加一个标题，然后这个属性是用来控制该标题的位置，是位于表格的上面还是下面

top：顶部

bottom：底部

table-layout：用来设置单元格的布局宽度高度的算法

auto：自动设置，默认值
某列宽度由没有折行的最大宽度来决定，即使设置了width也没用
该算法较慢，因为要遍历完所有内容才能决定每一列的宽度，在主要以呈现数据为主的页面中不建议使用
fixed：固定宽度
跟单元格内内容无关，就跟表格自身设置的高度宽度比例有关

动画属性

animation
animation 属性的动画原理是在一段时间之内修改某个元素的属性，然后浏览器会自动的将修改属性在这段时间之内均匀化，看起来就是一个比较均匀的动画效果了。

最简单的动画就是设置调整位置属性，然后就可以均匀的上
下或者左右移动了。

@keyframes
动画的关键帧配置，类似一个函数，将动画的关键时间点对应的属性信息给标注上，配置示例如下：

@keyframes mymove
{
    0%     {top:0px;}
    25%    {top:200px;}
    50%    {top:100px;}
    75%    {top:200px;}
    100% {top:0px;}
}

最终的动画效果参考这里。

animation-name：即指定的 keyframes 的名字，如上的例子就是 mymove
animation-duration：动画的持续时间，我估计浏览器会根据这个时间来计算需要自动计算的帧数，因为人眼睛需要每秒24帧的变化才能显示出比较平滑的动画效果；
animation-timing-function：动画的变化的速度曲线，可以是线性的，或者一开始慢后面快，或者反过来，或者先慢后快结束的时候再慢等选项，也可以通过指定三次贝塞尔函数 cubic-bezier(n,n,n,n) 来选择不同的动画效果；
animation-delay：在动画开始之前的延迟；
animation-iteration-count：默认为1，可以为任意整数，也可以设置为枚举值 infinite 从而无线循环；
animation-direction：枚举值，默认为normal，即正常播放动画，可以设置为 alternate 该值得含义是奇数次正向播放，偶数次反向播放；当然，如果 animation-iteration-count 设置为1的话，该属性就没有意义了；
animation-play-state：paused和running的枚举值，可以对动画进行暂停和继续的操作，类似视频播放的感觉；
animation-fill-mode：在动画开始之前和之后属性的应用值；
animation：综合如上所有属性的一个简写属性
各简写属性出现的顺序并没有明确规定，而且没有任何一个属性是必须的；
只有时间的值可能会出现0，1,2次，当出现1次的时候表示的是 animation-duration 的值，如果出现2次代表的是 animation-delay 的值
可以有多组值，用逗号做分割，表示多个动画效果同时显示和起作用

transition
transition-property：对该元素哪个属性的变化进行动画效果
当然，不是所有的属性都支持动画的，常见的位置、大小、颜色、以及旋转 之类的都是支持的，详细支持列表请参考这里
只要属性发生变化，都会实现动画效果，比如hover属性或者js变化属性
transition-duration：动画的持续时间
transition-delay：动画开始的延迟时间
transition-timing-function：动画的速度函数，可以是匀速，也可以是变速，也可以是指定函数
transition：是如上几个属性定的简写属性
几个属性出现的顺序没有明确规定，如果是时间字段的话，第一个是duration，第二个是delay-time
一些常见的动画效果示例请参考这里。

其他
长度：长度是css的基本单位，会有如下的一些可能的值：
会用到长度单位的典型的属性：
font-size, width, margin, padding, border-width, text-shadow
相对单位
cap：相对当前字体的大写字母的高度
ch：相对字体当中0的高度
ex：相对字体当中小写x字母的高度，一般字体的ex≈0.5em
lh/rlh：相对当前行高/跟节点行高
em/rem：相对当前字体/根节点字体
绝对单位
px：一个像素点，跟设备相关，一般1cm约等于35~45个像素点
Q/mm/cm：0.25毫米/毫米/厘米
pt/in：1/72英寸 / 英寸
pc：12px
视窗单位
vh/vw：相对视窗的高度/宽度的1/100
vmin/vmax：在视窗的min(高度, 宽度)和max(高度, 宽度)的1/100
在实际应用场景中，主要使用的是em和px两个类型的长度。

颜色：
枚举值
比如red, blue, yellow一共大概有将近150个预定义的颜色，详细请参考这里
RGB立体坐标
RGB || #RRGGBB
当设置为#RGB的时候，跟#RRGGBB是一样的，比如#F03，效果跟#FF0033是一样的
可以用rgb(r_int, g_int, b_int)来表示，跟上面表示是类似的，只不过一个用的是16进制，一个用的是十进制
可以用rgba(r_int, g_int, b_int, 透明度)，透明度得分从0~1的浮点数，0是透明，1是不透明
HSL圆柱坐标
hsl(色相, 饱和度, 明度)
色相是一个彩虹圆环的角度值，red为0/360，green为120，blue为240；
饱和度是颜色的显示强度，如果为0就是黑白照片即某种灰色
明度是明亮度，如果是100%，就是白色了，如果是0%，那就是黑色了
hsla，跟rgba一样可以增加一个透明度的参数
渐变函数
渐变函数是一种自定义的image表示方法，使用示例参考这里
直线渐变：linear-gradient(角度，方向，颜色列表)，在颜色后面还可以跟一个比例表示位置从什么地方开始渐变
圆形渐变：radial-gradient(颜色列表)
重复渐变：重复渐变（即条纹装渐变）

参考
CSS属性的高级分类. https://blog.csdn.net/qq_16546829/article/details/81979142
CSS属性参考页面. https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference
