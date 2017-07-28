import { A } from "libraries/the-lib";

export class ComponentA {
    public render() {
        const p = document.createElement("p");
        const a = new A();

        p.innerHTML = `A says: ${a.text}`;
        document.body.appendChild(p);
    }
}