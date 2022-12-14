const sumador = require('../../services/adder');
const restador = require('../../services/subtractor');
const multiplicador = require('../../services/multiplier');
const divididor = require('../../services/divider');

describe("Adder test", function(){
    let _numberA;
    let _numberB;

    it("Should return the add between numberA and numberB", function(){
        _numberA = 6;
        _numberB = 7;

        const result = sumador.add(_numberA, _numberB);

        expect(result).toEqual(13);
    });
});

describe("Subtractor test", function(){
    let _numberA;
    let _numberB;

    it("Should return the subtract between numberA and numberB", function(){
        _numberA = 8;
        _numberB = 5;

        const result = restador.subtract(_numberA, _numberB);

        expect(result).toEqual(3);
    });
});

describe("Multiplier test", function(){
    let _numberA;
    let _numberB;

    it("Should return the miltiple between numberA and numberB", function(){
        _numberA = 5;
        _numberB = 5;

        const result = multiplicador.multiple(_numberA, _numberB);

        expect(result).toEqual(25);
    });
});

describe("Divider test", function(){
    let _numberA;
    let _numberB;

    it("Should return the divide between numberA and numberB", function(){
        _numberA = 15;
        _numberB = 5;

        const result = divididor.divide(_numberA, _numberB);

        expect(result).toEqual(3);
    });
});