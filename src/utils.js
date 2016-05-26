/**
 * returns true if the component's last update time is greater than half second
 * p.s: this function updates the lastUpdateTime attribute of the component
 * @param component {object}
 * @returns {boolean}
 */
export function shouldTickerReRender(component){
  const now = Date.now();

  // should render only if more than half second passed from last render
  const shouldRender  =  now - component.lastUpdateTime > 500;

  if (shouldRender) {
    component.lastUpdateTime = now;
  }

  return shouldRender;
}

/**
 * Return the last k elements of the array if the array length
 * greater than k, otherwise returns it as is.
 * @param array {array}
 * @param k {number}
 */
export function getLastKElements(array, k){
  if (array.length > 20) {
    return array.slice(array.length - k, array.length);
  } else {
    return array;
  }
}
