import gramaticaListener from "./gramaticaListener.js";

export default class CustomgramaticaListener extends gramaticaListener {


    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}