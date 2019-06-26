function removeOddSum(anything) {
    return anything.filter(obj => {
        return (obj.a + obj.b) % 2 === 0;
    });
};


module.exports = removeOddSum;
