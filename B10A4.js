function calculateTax(income, expenses) {
    if(income>=0 && expenses>=0 && income>=expenses) {
        let dif = income - expenses;
        let tax = dif * (20/100);

        return tax;
    }
    else {
        return "Invalid Input";
    }
}


function sendNotification(email) {
    if(email.indexOf("@") !== -1 && email.split("@").length === 2) {
        let x = email.split("@");
        let x1 = x[0];
        let x2 = x[1];

        return x1 + " sent you an email from " + x2;
    }
    else {
        return "Invalid Email";
    }
}


function checkDigitsInName(name) {
    if(typeof name === "string" && /\d/.test(name) !== true) {
        return false;
    }
    else if(typeof name === "string" && /\d/.test(name) === true) {
        return true;
    }
    else {
        return "Invalid Input";
    }
}


function calculateFinalScore(obj) {
    if(typeof obj === "object" && typeof obj.name === "string" && typeof obj.testScore === "number" && typeof obj.schoolGrade === "number" && typeof obj.isFFamily === "boolean" && obj.testScore<=50 && obj.schoolGrade<=30) {
        let result = obj.testScore + obj.schoolGrade;
        let isBool = false;
        if(obj.isFFamily === true) {
            result = result + 20;
        }
        if (result>=80) {
            isBool = true;
        }
        return isBool;
    }
    else {
        return "Invalid Input";
    }
}


function  waitingTime(waitingTimes, serialNumber) {
    if(Array.isArray(waitingTimes) && waitingTimes.every(item => typeof item === "number") && typeof serialNumber === "number" && serialNumber > waitingTimes.length) {
        let sum = 0;
        for(let i=0; i<waitingTimes.length; i++) {
            sum += waitingTimes[i];
        }
        let avgTime = sum / waitingTimes.length;
        let totalPerson = serialNumber - 1;
        let recentPerson = totalPerson -  waitingTimes.length;
        return recentPerson * Math.round(avgTime);
    }
    else {
        return "Invalid Input";
    }
}