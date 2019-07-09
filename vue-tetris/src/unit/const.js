export const transform = (function () {
  const trans = [
    'transform',
    'webkitTransform',
    'msTransform',
    'mozTransform',
    'oTransform'
  ]
  const body = document.body
  return trans.filter(e => body.style[e] !== undefined)[0]
})()
