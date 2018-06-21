
function WaitLoading() {  

}

WaitLoading.prototype = {
  constructor: WaitLoading,

  open: function (params) {
    let loading = document.createElement('div');
    loading.className = 'loading-background';
    let son = document.createElement('div');
    son.className = 'loading';
    // console.log(loading);
    loading.appendChild(son);
    
    document.querySelector('body').appendChild(loading);
    
  },

  close: function () {
    let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1200;

    let timer = setTimeout(function () {
      document.querySelector('body').removeChild(document.querySelector('.loading-background'));
      
      clearTimeout(timer);
    }, str);
  }

}

const loading = new WaitLoading();

export default loading;