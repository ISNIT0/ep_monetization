var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = function (hook, context, callback) {
    if (!settings.ep_monetization || !settings.ep_monetization.paymentPointer) {
        console.warn(`No payment pointer configured, please set [ep_monetization.paymentPointer] in /admin/settings`);
        return callback({});
    } else {
        return callback({
            monetization: {
                paymentPointer: settings.ep_monetization.paymentPointer
            }
        });
    }
};
