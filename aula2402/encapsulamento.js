class Pessoa{
    //encapsulamento
    nome; //atributo público
    #cpf; //atributo privado
    #salario; //atributo privado

    //métodos getters e setters

    setCpf(valor){
        this.#cpf = valor
    }
    getCpf(){
        return this.#cpf;
    }

        setSalario(valor){
        this.#salario = valor
    }
    getSalario(){
        return this.#salario;
    }
}

const Silva = new Pessoa();

Silva.nome = 'Pedro';
Silva.setCpf('123.456.789-00');
console.log(Silva.getCpf());
Silva.setSalario(5000);
console.log(Silva.getSalario());

console.log(Silva);