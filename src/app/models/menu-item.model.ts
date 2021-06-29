import * as Interfaces from "../interfaces/menu-item.interface";

export class MenuItem implements Interfaces.MenuItem {

    public constructor(
        public id: number,
        public title: string,
        public icon: string,
        public path: string,
        public children: MenuItem[]
    ) { }
}
