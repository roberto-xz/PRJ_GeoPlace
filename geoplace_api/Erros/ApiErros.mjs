

export class ApiErros extends Error {
    mesg;
    code;
    
    constructor(message, statuscode) {
        super(message);
        this.mesg = message;
        this.code = statuscode;
    }
}