function pow(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw TypeError('base and exponent must be numbers');
    }
    if (Number.isInteger(exponent)) {
        throw RangeError('Exponent must be an integer');
    }
    if (exponent === 0) 
        return 1;
    if (exponent < 0)
        return 1 / pow(base, -exponent);
    return base * pow(base, exponent - 1);
}

try {
    console.log(pow(sss, 3));
    console.log(pow(sss, 2));
    console.log(pow('2', 12));
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError handling');
    } else if (error instanceof RangeError) {
        console.log('RangeError handling');
    } else {
        console.log('Unknown error');
    }
}