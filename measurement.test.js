const Measurement = require('../EX-1/measurment');
//const Weight = require('../EX-1/weight');
const {KILOGRAM,GRAMS,CENTIMETER,METER} = require('../EX-1/unit')

describe('IsMeasurmentEqual', () => {
    const measurmentInCentimeter = new Measurement(100, CENTIMETER);
    const measurmentInMeter = new Measurement(1, METER);
    const weightInGrams = new Measurement(1000, GRAMS);
    const weightInKilogram = new Measurement(1, KILOGRAM);

    const weightInGram = new Measurement(1,GRAMS);
    const measurmentInCentimeters = new Measurement(1, CENTIMETER);

    it('checking 100 centimeter is equal to 1 meter', () => {
        const result = measurmentInCentimeter.isEqual(measurmentInMeter);
        expect(result).toBeTruthy();
    });

    it('checking 1 meter equal to 100 centimeter', () => {
        const result = measurmentInMeter.isEqual(measurmentInCentimeter);
        expect(result).toBeTruthy();
    });
    
    it('should return true if 1000 grams is equal to 1 kilogram', () => {
            const result = weightInGrams.isEqual(weightInKilogram);
            expect(result).toBeTruthy();
    });

    it('should return true if 1 kilogram is equal to 1000 grams', () => {
        const result = weightInKilogram.isEqual(weightInGrams);
        expect(result).toBeTruthy();
    });
    
    it('should return true if 1 gram is equal to 1 centimeter', () => {
        const result = weightInGram.isEqual(measurmentInCentimeters);
        expect(result).toBeFalsy();
        //expect(result).toBeTruthy();
    })
    
})




// it('checking 100 centimeter eqaul to 100centimeter', () => {
    //     const result = measurmentInCentimeter.isEqual(measurmentInCentimeter);
    //     expect(result).toBeTruthy();
    // })
    
    // it('checking flase when 100 centimeter equal to null', () => {
    //     const result = measurmentInCentimeter.isEqual();
    //     expect(result).toBeTruthy();
    // })