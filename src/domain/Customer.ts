import { Email } from "./Email";

export class Customer {
    private email: Email

    constructor(
        readonly id: string,
        readonly name: string,
        email: string
    ) {
        this.email = new Email(email)
    }

    getEmail() {
        return this.email.getEmail()
    }
}