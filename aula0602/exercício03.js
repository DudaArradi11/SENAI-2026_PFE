const prompt = require('prompt-sync')();

let temCRACHA= prompt("Você tem CRACHÁ? (s/n): ");
let estaDeUNIFORME= prompt("Você está de uniforme? (s/n): ");
let EhMonitor= prompt("Você é monitor? (s/n): ");
let temCadastro= prompt("Você tem cadastro? (s/n): ");

if (temCRACHA == "s" || temCRACHA == "S") {
    temCRACHA = true;
} else if (temCRACHA == "n" || temCRACHA == "N") {
    temCRACHA = false;
}
if (estaDeUNIFORME == "s" || estaDeUNIFORME == "S") {
    estaDeUNIFORME = true;
} else if (estaDeUNIFORME == "n" || estaDeUNIFORME == "N") {
    estaDeUNIFORME = false;
}
if (EhMonitor == "s" || EhMonitor == "S") {
    EhMonitor = true;
} else if (EhMonitor == "n" || EhMonitor == "N") {
    EhMonitor = false;
}
if (temCadastro == "s" || temCadastro == "S") {
    temCadastro = true;
} else if (temCadastro == "n" || temCadastro == "N") {
    temCadastro = false;
}

if (temCRACHA == true && estaDeUNIFORME == true || EhMonitor == true){
    if (temCadastro == true){
        console.log("Entrada Permitida");
    } else {
        console.log("Entrada Negada");
    }
} else {
    console.log("Entrada Negada");
};