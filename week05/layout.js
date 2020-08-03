function getStyle(element){
    if(!element.style)
        element.style = {};

    for(let prop in element.computedStyle){
        var p = element.computedStyle.value;
        element.style[prop] = element.computedStyle[prop].value;


        if(element.style[prop].toString().match(/px$/)){
            element.style[prop] = parseInt(element.style[prop])
        }

        if(element.style[prop].toString().match(/^[0-9\.]+$/)){
            element.style[prop] = parseInt(element.style[prop])
        }
    }
    return element.style;
}

function layout(element){
    if(!element.computedStyle)
        return ;
    
    var elementStyle = getStyle(element);

    if(elementStyle.display !== 'flex')
        return

    var items = element.children.filter(e=>e.type === 'element')

    items.sort(function(a,b){
        return (a.order || 0) - (b.order || 0)
    })

    var style = elementStyle;

    ['width','height'].forEach(size=>{
        if(style[size] === 'auto' || style[size] === ''){
            style[size] = null;
        }
    })

    if(!style.flexDirection || style.flexDirection === 'auto')
        style.flexDirection = 'row';
    if(!style.alignItems || style.alignItems === 'auto')
        style.alignItems = 'stretch';
    if(!style.justifyContent || style.justifyContent === 'auto')
        style.justifyContent = 'flex-start';
    if(!style.flexWrap || style.flexWrap === 'auto')
        style.flexWrap = 'nowrap';
    if(!style.alignContent || style.alignContent === 'auto')
        style.alignContent = 'stretch';

    var mainSize,mainStart,mainEnd,mainSign,mainBase,crossSize,crossStart,crossEnd,crossSign,crossBase;
    if(style.flexDirection === 'row'){
        mainSize = 'width';
        mainStart = 'left';
        mainEnd = 'right';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom'

    }

    if(style.flexDirection === 'row-reverse'){
        mainSize = 'width';
        mainStart = 'right';
        mainEnd = 'left';
        mainSign = -1;
        mainBase = style.width;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom'
    }

    if(style.flexDirection === 'column'){
        mainSize = 'height';
        mainStart = 'top';
        mainEnd = 'bottom';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right'

    }

    if(style.flexDirection === 'column-reverse'){
        mainSize = 'height';
        mainStart = 'bottom';
        mainEnd = 'top';
        mainSign = -1;
        mainBase = style.width;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right'
    }

    if(style.flexWrap === 'wrap-reverse'){
        var tmp = crossStart;
        crossStart = crossEnd;
        crossEnd = tmp;
        crossSign = -1;
    }else{
        crossBase = 0;
        crossSign = 1
    }

    var isAutoMainSize = false;
    if(!style[mainSize]){
        elementStyle[mainSize] = 0;
        for(var i=0; i<items.length; i++){
            var item = items[i];
            if(itemStyle[mainSize] !== null || itemStyle[mainSize])
                elementStyle[mainSize] = elementStyle[mainSize]
        }
        isAutoMainSize = true;
    }

    var flexLine = [];
    var flexLines = [flexLine];
    
    var mainSpace = elementStyle[mainSize];
    var crossSpace = 0;

    for(var i=0; i<items.length; i++){
        var item = items[i];
        var itemStyle = getStyle(item);

        if(itemStyle[mainSize] === null){
            itemStyle[mainSize] = 0;
        }

        if(itemStyle.flex){
            flexLine.push(item)
        }else if(style.flexWrap === 'nowrap' && isAutoMainSize){
            mainSpace -= itemStyle[mainSize];
                itemStyle[mainSize] = style[mainSize]
            if(itemStyle[crossSize] != null && itemStyle[crossSize] != (void 0))
                crollSpace = Math.max(crollSpace,itemStyle[crossSize])
            flexLine.push(item)
        }else{
            if(itemStyle[mainSize] > style[mainSize]){
                itemStyle[mainSize] = style[mainSize]
            }
            if(mainSpace < itemStyle[mainSize]){
                flexLine.mainSpace = mainSpace;
                flexLine.crollSpace = crossSpace;
                flexLine = [item];
                flexLines.push(flexLine);
                mainSpace = style[mainSize];
                crollSpace = 0;
            }else{
                flexLine.push(item);
            }
            if(itemStyle[crossSize] != null && itemStyle[crossSize] != (void 0))
                crossSpace = Math.max(crossSpace,itemStyle[crossSize])

            mainSpace -= itemStyle[mainSize]
        }
    }
    flexLine.mainSpace = mainSpace;

    if(style.flexWrap === 'nowrap' || isAutoMainSize){
        flexLine.crollSpace = (style[crossSize] !== undefined ? style[crossSize] : crossSpace);
    }else{
        flexLine.crossSpace = crollSpace;
    }

    if(mainSpace <0){
        var scale = style[mainSize] /(style[mainSize] - mainSpace);
        var currentMain = mainBase;
        for(var i=0; i<items.length; i++){
            var item = items[i];
            var itemStyle = getStyle(item);

            if(itemStyle.flex){
                itemStyle[mainSize] = 0;
            }

            itemStyle[mainSize] = itemStyle[mainSize]*scale;

            itemStyle[mainStart] = currentMain;
            itemStyle[mainEnd] = itemStyle[mainStart]+mainSign*itemStyle[mainSize];
            currentMain = itemStyle[mainEnd];

        }
    }else{
        flexLines.forEach(function(items){
            var mainSpace = items.mainSpace;
            var flexTotal = 0;
            for(var i=0; i<item.length; i++){
                var item = items[i];
                var itemStyle = getStyle(item);

                if((itemStyle.flex !== null) && (itemStyle.flex !==(void 0))){
                    flexTotal += itemStyle.flex;
                    continue;
                }
            }

            if(flexTotal > 0){
                var currentMain = mainBase;
                for(var i=0; i< items.length; i++){
                    var item = items[i];
                    var itemStyle = getStyle(item);

                    if(itemStyle.flex){
                        itemStyle[mainSize]=(mainSpace/flexTotal)*itemStyle.flex;
                    }
                    itemStyle[mainStart] = currentMain;
                    itemStyle[mainEnd] = itemStyle[mainStart]+mainSign*itemStyle[mainSize];
                    currentMain = itemStyle[mainEnd];
                }
            }else{
                if(style.jusifyContent == 'flex-start'){
                    var currentMain = mainBase;
                    var step = 0;
                }
                if(style.justifyContent === 'flex-end'){
                    var currentMain = mainSpace * mainSign+mainBase;
                    var step=0;
                }
                if(style.justifyContent ==='center'){
                    var currentMain = mainSpace/2*mainSign+mainBase;
                    var step=0
                }
                if(style.justifyContent==='space-between'){
                    var step=mainSpace/(items.length-1)*mainSign;
                    var currentMain = mainBase;
                }
                if(style.justifyContent === 'space-around'){
                    var step = mainSpace/items.length*mainSign;
                    var currentMain = setp/2+mainBase;

                }
                for(var i=0; i<items.length; i++){
                    var item = items[i];
                    itemStyle[mainStart,currentMain];
                    itemStyle[mainEnd] = itemStyle[mainStart]+mainSign*itemStyle[mainSize]
                    currentMain = itemStyle[mainEnd]+step;
                }
            }
        })
    }

    var crossSpace;
    if(!style[crossSize]){
        crossSpace = 0;
        elementStyle[crossSize] = 0;
        for(var i=0; i<flexLines.length; i++){
            elementStyle[crollSize] = elementStyle[crollSize]+flexLines.crossSpacce;
        }
    }else{
        crossSpace = style[crollSize]
        for(var i=0; i<flexLines.length; i++){
            crossSpace -= flexLines[i].crossSpace;
        }
    }

    if(style.flexWrap === 'wrap-reverse'){
        crossBase = style[crossSize]
    }else{
        crossBase = 0;
    }
    var lineSize = style[crollSize]/flexLines.length;

    var step;
    if(style.alignContent === 'flex-start'){
        scrossBase += 0;
        step = 0;
    }
    if(style.alignContent === 'flex-end'){
        crossBase += crossSign * crossSpace;
        step = 0
    }
    if(style.alignContent === 'center'){
        crossBase += crossSign * crossSpace/2
        step = 0;
    }
    if(style.alignContent === 'space-between'){
        crossBase += 0;
        step = crossSpace/(flexLines.length-1);
    }
    if(style.alignContent === 'space-around'){
        step = crossSapce/(flexLinews.length);
        crossBase += crossSign*step/2;
    }
    if(style.alignContent === 'stretch'){
        crossBase += 0;
        step = 0
    }
    flexLines.forEach(function(items){
        var lineCrossSize = style.alignContent === 'stretch' ? 
        items.crossSapce + crossSpace/flexLines.length:
        items.crossSapce;
        for(var i=0; i<items.length; i++){
            var item = items[i];
            var itemStyle = getStyle(item);

            var align = itemStyle.alignSelf || style.alignItems;

            if(item === null)
                itemStyle[crossSize] = (align === 'stretch') ?
                lineCrossSize : 0;
            if(align === 'flex-start'){
                itemStyle[crossStart] = crossBase;
                itemStyle[crossEnd] = itemStyle[crossStart]+crossBase
            }
            if(align === 'flex-end'){
                itemStyle[crossEnd] = crossBase+crossSign*lineCrossSize
                itemStyle[crossStart] = itemStyle[crossStart]
            }
        }
    })
    
}

module.exports = layout;