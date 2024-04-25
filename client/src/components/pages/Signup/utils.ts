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
    
    const passwordPattern =  /(?=.*[A-Z])(?=.*\d)(?=.*[a-z])/;

    if ( passwordPattern.test(password)) {
        return true;
    }

}

export function confirmPasswordValidation(confirmPassword: string, password: string) {
    if(password == confirmPassword) {
        return true;
    }
}