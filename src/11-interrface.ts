
/* Las interfaces son contratos que una clase se compromete a cumplir, ya sean propiedades como métodos */
export interface Driver {
    database: string
    password: string
    port: number

    connect(): void
    isConnected(name: string): void
}

class MongoDB implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}

    isConnected(name: string): void {
        // Code
    }

    connect(): void {
        // Code
    }
}

class PostgreSQL implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}

    isConnected(name: string): void {
        // Code
    }

    connect(): void {
        // Code
    }
}
