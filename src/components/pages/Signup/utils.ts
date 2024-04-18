export function nameValidation(name: string) {
    if ( name.length > 2) {
        return true;
    }
}

export function emailValidation(email: string) {
    const emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    return emailPattern.test(email); 
}


export function passwordValidation(password: string) {
    
    // const passwordPatternNumber =  /(?=.*\d)/;
    // const passwordPatternLowerCase =  /(?=.*[a-z])/;
    // const passwordPatternUpperCase =  /(?=.*[A-Z])/;
    const passwordPatternUpperCase =  /(?=.*[A-Z])(?=.*\d)(?=.*[a-z])/;
    // const passwordPatternSpecialCarac =  /(?=.*[$*&@#])/;
    // const passwordPatternEightCarac =  /^[0-9a-zA-Z$*&@#]{8,}$/;

    // const valid = {
    //     numbers: passwordPatternNumber.test(password),
    //     lowerCase: passwordPatternLowerCase.test(password),
    //     upperCase: passwordPatternUpperCase.test(password),
    //     specialCarac: passwordPatternSpecialCarac.test(password),
    //     eightCarac: passwordPatternEightCarac.test(password),
    // };

    if ( passwordPatternUpperCase.test(password)) {
        return true;
    }

}

export function confirmPasswordValidation(confirmPassword: string, password: string) {
    if(password == confirmPassword) {
        return true;
    }
}