const {KILOGRAM,GRAMS,CENTIMETER,METER} = require('../EX-1/unit')

class Measurement {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }
    isEqual(measurment) {
        return measurment.value === (this.value * measurment.unit) / this.unit
    }
     //     if (this.unit === CENTIMETER) {
        //         return (this.value / 100 === measurment.value)
        //     }
        //     if (this.unit === METER) {
        //         return (this.value * 100 === measurment.value)
        //     }
        //     if (this.unit === KILOGRAM) {
        //         return this.value * 1000 === measurment.value;
        //     }
        //     if(this.unit === GRAMS){
        //          return this.value / 1000 === measurment.value;
        //     }
        //     if ((this.unit === GRAMS && measurment.unit === CENTIMETER) || (this.unit === GRAMS && measurment.unit===METER)) {
        //         return false;
        //     }
        //     if ((this.unit === KILOGRAM && measurment.unit === CENTIMETER) || (this.unit === KILOGRAM && measurment.unit===METER)) {
        //         return false;
        //     }
        //     if ((this.unit === CENTIMETER && measurment.unit === GRAMS) || (this.unit === CENTIMETER && measurment.unit===KILOGRAM)) {
        //         return false;
        //     }
        //     if ((this.unit === METER && measurment.unit === GRAMS) || (this.unit === METER && measurment.unit===KILOGRAM)) {
        //         return false;
        //     }
        // }

}

module.exports = Measurement;