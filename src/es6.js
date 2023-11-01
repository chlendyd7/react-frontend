function userLogs(username) {
    function wrap(message) {
    console.log(`${username} - ${message}`);
    }
    return wrap;
    }
const log = userLogs('Chinseok Lee');
log('Hello World');