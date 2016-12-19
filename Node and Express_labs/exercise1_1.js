
const events = require('events');

class Ticker extends events {

    start() {
        setInterval(() => this.emit('tick'), 1000);
    }
}

var ticker = new Ticker();
ticker.on('tick', () => { console.log('TICK')});
ticker.start();