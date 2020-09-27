export let linear = v=>v;

export function cubicBezier(p1x,p1y,p2x,p2y){
    const ZERO_LIMIT = 1e-6;

    const ax = 3*p1x - 3*p2x + 1;
    const bx = 3*p2x - 6*p1x;
    const cx = 3*p1x;

    const ay = 3*p1y-3*p2y+1;
    const by = 3*p2y-6*p1y;
    const cy = 3*p1y;

    function sampleCurveDerivativeX(t){
        return (3*ax*t+2*bx)*t+cx;
    }

    function sampleCurveX(t){
        return ((ax*t+bx)*t+cx)*t;
    }

    function solve(x){
        return sampleCurveX(sampleCurveX(x));
    }

    return solve;
}

export let ease = cubicBezier(.25,.1,.25,.1);
export let easeIn = cubicBezier(.42,0,1,1);
export let easeOut = cubicBezier(0,0,.58,1);
export let easeInOut = cubicBezier(.42,0,.58,1);
