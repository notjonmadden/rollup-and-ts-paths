import { B } from "libraries/the-lib";

export class ComponentB {
    public render() {
        const p = document.createElement("p");
        const b = new B();

        p.innerHTML = `B says: ${b.text}`;
        document.body.appendChild(p);
    }
}