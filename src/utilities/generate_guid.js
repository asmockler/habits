export function generateGUID() {
  return ("000000" + (Math.random()*Math.pow(36, 6) << 0).toString(36)).slice(-6)
}
