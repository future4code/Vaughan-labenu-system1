export class Class {
    constructor (
        private id: string,
        private name: string,
        private teachersId: string[],
        private studentsId: string[],
        private module: number
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

    public getModule (): number {
        return this.module
    }

    public setModule (module: number): void {
        this.module = module
    }
}