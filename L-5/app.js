const emitter = require('./emiter');
const eventObj =require('./config').events;//ata object from config.js(events deyar karone)
console.log(obj);

const emtr = new emitter();


emtr.on(eventObj.GREET, function(){//register event
    console.log('Somewhere, someone said hello.');
});
emtr.on(eventObj.FILE_OPEN, function(){//register another event
    console.log('A greeting occurred!');
});
emtr.on(eventObj.FILE_CLOSE, function(){//register another event
    console.log('A greeting occurred!');
});
emtr.emit(eventObj.FILE_CLOSE)//emit event
emtr.emit(eventObj.FILE_OPEN)//emit event
emtr.emit(eventObj.GREET)//emit event