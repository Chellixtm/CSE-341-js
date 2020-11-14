function postalCalc(req, res) {
    const weight = Number(req.query.weight);
    const shippingType = req.query.shippingType;
    let rate;
    let shippingText;

    switch (shippingType){
        case 'letter-stamp':
            rate = calcStamped(weight);
            shippingText = 'Stamped Letter';
            break;
        case 'letter-metered':
            rate = calcMetered(weight);
            shippingText = 'Metered Letter';
            break;
        case 'envelope':
            rate = calcEnvelope(weight);
            shippingText = 'Large Envelope';
            break;
        case 'package':
            rate = calcPackage(weight);
            shippingText = 'First-Class Package';
            break;
        default:
            rate = 0;
            break;
    }

    const params = {rate: rate.toFixed(2), weight: weight, shippingType: shippingText};

    res.render('pages/results', params);
}

function calcStamped(weight) {
    let rate;
    if (weight <= 1) {
        rate = .55;
    } 
    else if (weight <= 2) {
        rate = .70;
    }
    else if (weight <= 3) {
        rate = .85;
    } 
    else {
        rate = 1;
    }
    return rate;
}

function calcMetered(weight) {
    let rate;
    if (weight <= 1) {
        rate = .50;
    } 
    else if (weight <= 2) {
        rate = .65;
    }
    else if (weight <= 3) {
        rate = .80;
    } 
    else {
        rate = .95;
    }
    return rate;
}

function calcEnvelope(weight) {
    let rate;
    if (weight <= 1) {
        rate = 1;
    } 
    else if (weight <= 2) {
        rate = 1.2;
    }
    else if (weight <= 3) {
        rate = 1.4;
    } 
    else if (weight <= 4) {
        rate = 1.6;
    } 
    else if (weight <= 5) {
        rate = 1.8;
    } 
    else if (weight <= 6) {
        rate = 2;
    } 
    else if (weight <= 7) {
        rate = 2.2;
    } 
    else if (weight <= 8) {
        rate = 2.4;
    } 
    else if (weight <= 9) {
        rate = 2.6;
    } 
    else if (weight <= 10) {
        rate = 2.8;
    } 
    else if (weight <= 11) {
        rate = 3;
    } 
    else if (weight <= 12) {
        rate = 3.2;
    } 
    else {
        rate = 3.4;
    }
    return rate;
}

function calcPackage(weight) {
    let rate;
    if (weight <= 4) {
        rate = 4.2;
    } 
    else if (weight <= 8) {
        rate = 5;
    }
    else if (weight <= 12){
        rate = 5.75;
    }
    else {
        rate = 6.5;
    }
    return rate;
}

module.exports = postalCalc