export class Class {
    constructor (
        private id: string,
        private name: string,
        private module: number,
        private teachersId?: string[],
        private studentsId?: string[],
       
    ) {}

    public getId (): string {
        return this.id
    }

    public getName (): string {
        return this.name
    }

    public getModule (): number {
        return this.module
    }


    public setName (name: string): void {
        this.name = name
    }
    
    public setModule (module: number): void {
        this.module = module
    }
}