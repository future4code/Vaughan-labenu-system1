export abstract class User {
    constructor (
        private id:string,
        private name: string,
        private email: string,
        private birthDate: string,
        private classId: string
    ) {}

    public getId (): string {
        return this.id
    }

    public getName (): string {
        return this.name
    }

    public setName (name: string): void {
        this.name = name
    }

    public getEmail (): string {
        return this.email
    }

    public setEmail (email: string): void {
        this.email = email
    }

    public getBirthDate (): string {
        return this.birthDate
    }

    public setBirthDate (birthDate: string): void {
        this.birthDate = birthDate
    }
    
    public getClassId (): string {
        return this.classId
    }
}