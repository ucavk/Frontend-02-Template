import {Component,createElement } from "./framework"
import {Cauousel} from "./carousel.js"
import {Timeline,Animation} from "./animation.js"

let d=[
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/07/ChMkKV9YsLWIKNdDAACGybDd94wAACFbABShPcAAIbh163.jpg',
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/07/ChMkKV9YsIeIatQDAACRfOFohEcAACFawMwJTwAAJGU127.jpg',
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/06/ChMkKV9YsFWIPk_UAACONiaJcI0AACFZwP-wuoAAI5O935.jpg',
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/06/ChMkKV9YsEiICA6oAACn1N7v0joAACFZgPihHIAAKfs339.jpg'
]

let a = <Carousel src={d}/>
a.mountTo(document.body)

let tl = new Timeline();
window.tl = tl;

window.animation = new Animation({set a(v){console.log(v)}},"a",0,100,1000,null)
