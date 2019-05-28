const opacityStyle = (x) => {return {opacity: x}};
const slideStyle = (x, dist, dir, unit) => {return {transform: `translateX(${dir != DIR_RIGHT ? '' : '-'}${dist - (x * dist)}${unit || 'px'})`}};