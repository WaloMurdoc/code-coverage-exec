function multiplier(){
    this.multiple = function (numberA, numberB){
        return numberA * numberB;
    }
}

module.exports = new multiplier();