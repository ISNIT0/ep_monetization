

function waitForConfig(callback) {
  if (window.clientVars && window.clientVars.skinName) {
    callback(window.clientVars);
  } else {
    setTimeout(function () {
      waitForConfig(callback);
    }, 100);
  }
}

exports.documentReady = function () {
  waitForConfig(function (config) {
    if (config && config.monetization && config.monetization.paymentPointer) {
      var metaEl = document.createElement('meta');
      metaEl.setAttribute('name', 'monetization');
      metaEl.setAttribute('content', config.monetization.paymentPointer);
      document.head.appendChild(metaEl);
    } else {
      console.warn('No payment pointer configured, please set [ep_monetization.paymentPointer] in /admin/settings');
    }
  });
};
