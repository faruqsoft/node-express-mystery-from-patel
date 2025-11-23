//events

function emitter() {
    this.events = {};
}
emitter.prototype.on = function (type, eventListener){//register event
     this.events[type] = this.events[type] || [];//check event type
     this.events[type].push(eventListener); //push callback function to event type array
} 
emitter.prototype.emit = function (type){//emit event and call event
    if(this.events[type]){//check event
        this.events[type].forEach(listner=> { //looping through events and calling them
            listner();  
        });
        }
}