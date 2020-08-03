const images = require('images');

function render(viewport,element){
    if(element.style){
        var img = images(element.style.width,element.style.height);

        if(element.style['background-color']){
            let color = element.style['background-color'];
            color.match(/rgb\((\d+),(\d+),(\d+)\)/);
            img.fill();
            viewport.draw()
        }
    }

    if(element.children){
        for(var child of element.children){
            render(viewport, child)
        }
    }
}