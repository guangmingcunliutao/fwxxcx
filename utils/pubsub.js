let callbackMap = {};

let pubsub = {
    $on: function (eventName, callback) {
        if (!callbackMap[eventName]) {
            callbackMap[eventName] = [];
        }
        callbackMap[eventName].push(callback);
        // console.log(callbackMap);
    },
    $emit: function (eventName, parmas) {
        callbackMap[eventName].forEach(callback => {
            callback(parmas);
        });
    },
    $off: function (eventName, callback) {
        if (!eventName && !callback) {
            callbackMap = {};
        } else if (eventName && !callback) {
            callbackMap[eventName] = [];
        } else if (eventName && callback) {
            callbackMap[eventName] = callbackMap[eventName].filter(cb => {
                return cb !== callback;
            });
        }
    }
}

export default pubsub;