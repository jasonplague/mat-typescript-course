// Type definitions for ProductList Automation Framwork

declare namespace myLib {

    // Our global 'Scouting data' type/interface
    interface Player {
        name: string;
        age: string;
        position: string;
        available?: {
            yes: boolean;
            club: string;
            date: {
                year: number;
                month: number;
                day: number;
            }
        }
        }

    }

