import {CFCMBD} from './src/canvasbd.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$CANVASBD', { value: CFCMBD });
  }
}