import { ComponentA, ComponentB } from "./src/components";

var ab = [ new ComponentA(), new ComponentB() ];

ab.forEach(c => c.render());