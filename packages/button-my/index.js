import ElButtonMy from './src/button';

/* istanbul ignore next */
ElButtonMy.install = function(Vue) {
  Vue.component(ElButtonMy.name, ElButtonMy);
};

export default ElButtonMy;
