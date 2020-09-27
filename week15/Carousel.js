import {Component,STATE,ATTRIBUTE} from "./framework.js"
import {enableGesture} from "./gesture.js"
import {Timeline,Animation} from "./animation.js"
import {ease} from "./ease.js"

export {STATE,ATTRIBUTE} from "./framework.js"
console.log(STATE)

export class Carousel extends Component{
    constructor(){
        super();
    }

    render(){
        this.root = document.createElement("div");
        this.root.classList.add("carousel")
        for(let record of this[ATTRIBUTE].src){
            let child = document.createElement("div")
            child.style.backgroundImage=`url('${record.img}')`
            this.root.appendChild(child)
        }

        enableGesture(this.root)
        let timeline = new Timeline;
        timeline.start();

        let handler = null;

        let children = this.root.children;

        
        this[STATE].position = 0;

        let t = 0;
        let ax = 0;

        this.root.addEventListener("start",event=>{
            timeline.pause();
            clearInterval(handler)
            if(Date.now()-t<1500){
                let progress = (Date.now()-t)/500;
                ax = ease(progress)*500 - 500;
            }else{
                ax = 0;
            }
        })

        this.root.addEventListener("tap",event=>{
            this.triggerEvent("click",{
                data:this[ATTRIBUTE].src(this[STATE].position),
                position:this[STATE].position
            })
        })        

        this.root.addEventListener("pan",event=>{
            let x = event.clientX-event.startX-ax;
            let current = this[STATE].position - ((x-x%668)/668)

            for(let offest of [-1,0,1]){
                let pos = current + offest;
                pos = (pos%children.length + children.length)%children.length;

                children[pos].style.transition = 'none'
                children[pos].style.transform = `translateX(${-pos*668+offest*668+x%668}px)`
            }            
        })

        this.root.addEventListener("end",event=>{

            timeline.reset();
            timeline.start();
            handler = setInterval(nextPicture,3000)



            let x = event.clientX-event.startX-ax;
            let current = this[STATE].position - ((x-x%668)/668)

            let direction = Math.round((x%668)/668);

            if(event.isFlick){
                if(event.velocity<0){
                    direction = Math.ceil((x%668)/668)
                }else{
                    direction = Math.floor((x%668)/668)
                }
                console.log(event.velocity)
            }

            for(let offest of [-1,0,1]){
                let pos = this[STATE].position + offest;
                pos = (pos%children.length + children.length)%children.length;

                children[pos].style.transition = 'none'
                timeline.add(new Animation(children[pos].style,"transform",
                -pos*668+offest*668+x%668, 
                -pos*668+offest*668+direction*668,
                500,0,ease,v=>`translateX(${v}px)`))
            }   
            
            this[STATE].position = this[STATE].position - ((x-x%668)/668)-direction
            this[STATE].position = (this[STATE].position%children.length + children.length)%children.length;
            this.triggerEvent("change",{position:this[STATE].position})
        })


        let nextPicture = ()=>{
            let children = this.root.children;
            let nextPosition = (this[STATE].position+1) % children.length;
            
            let current = children[this[STATE].position];
            let next = children[nextPosition];

            t = Date.now();

            timeline.add(new Animation(current.style,"transform",
                -this[STATE].position*668, -668 - this[STATE].position*668,500,0,ease,v=>`translateX(${v}px)`))
            timeline.add(new Animation(next.style,"transform",
            668-nextPosition*668,-nextPosition*668,500,0,ease,v=>`translateX(${v}px)`))
  
            
            this[STATE].position = nextPosition;
            this.triggerEvent("change",{position:this[STATE].position})
        }
        handler = setInterval(nextPicture,3000)

/*
        this.root.addEventListener("mousedown",event=>{
            let children = this.root.children;
            let startX = event.clientX;

            let move = event=>{
                let x = event.clientX-startX

                let current = position - ((x-x%668)/668)

                for(let offest of [-1,0,1]){
                    let pos = position + offest;
                    pos = (pos + children.length)%children.length;

                    children[pos].style.transition = 'none'
                    children[pos].style.transform = `translateX(${-pos*668+offest*668+x%668}px)`
                }

                
            }
            let up = event=>{
                let x = event.clientX-startX
                position = position - Math.round(x/668)
                for(let offest of [0,-Math.sign(Math.round(x/668)-x + 334*Math.sign(x))]){
                    let pos = position + offest;
                    pos = (pos + children.length)%children.length;

                    children[pos].style.transition = 'none'
                    children[pos].style.transform = `translateX(${-pos*668+offest*668}px)`
                }
                document.removeEventListener("mousemove",move);
                document.removeEventListener("mouseup",up);
            }
            document.addEventListener("mousemove",move)
            document.addEventListener("mouseup",up)
                 
        })
  


        let currentIndex = 0;
        */

        return this.root;
    }

}