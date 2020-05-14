/* eslint-disable no-unused-expressions */
const $ls = {}
$ls.get = function (e) {
  return JSON.parse(localStorage.getItem(e))
}
$ls.set = function (e, t) {
  localStorage.setItem(e, JSON.stringify(t))
}
$ls.isSet = function (e) {
  let t = $ls.get(e)
  return t === null || typeof t === 'undefined' ? !1 : !0
}
$ls.remove = function (e) {
  localStorage.removeItem(e)
}
$ls.clear = function (e) {
  localStorage.clear(e)
}
export default $ls
