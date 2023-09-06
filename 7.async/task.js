class AlarmClock {
    constructor() {
            this.alarmCollection = [];
            this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) { 
            throw new Error("Отсутствуют обязательные аргументы");
        } else if (this.alarmCollection.find(call => call.time === time)) { 
            console.warn("Уже присутствует звонок на это же время");
        }
        return this.alarmCollection.push({callback, time, canCall: true});
    }
    
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(del => del.time != time);
    }

    getCurrentFormattedTime() {
        
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();

            if (h < 10) h = "0" +h;
            if (m < 10) m = "0" +h;
 
            let currentTime = h + ":" + m;
            

            return currentTime;

        
    }

    start() {
        if(this.intervalId){
            return null;
        }
    
    this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((clock) => {
            if(clock.time === this.getCurrentFormattedTime() && clock.canCall) {
                clock.canCall = false;
                clock.callback();
            }
        })
        }, 1000)
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((clock) => {
            if(clock.canCall === false){
                clock.canCall = true;
            }
        })
    }
    
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

    }