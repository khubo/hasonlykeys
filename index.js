/**
 * check if an object has all the required keys(properties)
 *
 * @params { Object } obj An object which is to be check for existence of
 * certain keys(propeties)
 * @params {String, Array}
 */
module.exports = (obj, keys) => {
  obj = obj || {}
  if (typeof keys === 'string') keys = keys.split(/ +/)
  let objKeys = Object.keys(obj)
  if (objKeys.length !== keys.length) return false
  for (let key of keys) {
    if (!obj.hasOwnProperty(key)) return false
  }
  return true
}
