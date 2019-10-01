// Enforces formatting of out test data

import { World } from "cucumber";

declare module "cucumber" {
    interface World {
        player: myLib.Player;
        product: myLib.Product
    }
}

