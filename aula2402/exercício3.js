class Bicicleta {
    // atributos privados
    #modelo;
    #marca;
    #cor;
    #velocidadeMaxima;

    // setters
    setModelo(valor) {
        this.#modelo = valor;
    }

    setMarca(valor) {
        this.#marca = valor;
    }

    setCor(valor) {
        this.#cor = valor;
    }

    setVelocidadeMaxima(valor) {
        if (valor > 35) {
            console.log("Erro: A velocidade máxima não pode ser superior a 35 km/h.");
        } else {
            this.#velocidadeMaxima = valor;
        }
    }

    // getters
    getModelo() {
        return this.#modelo;
    }

    getMarca() {
        return this.#marca;
    }

    getCor() {
        return this.#cor;
    }

    getVelocidadeMaxima() {
        return this.#velocidadeMaxima;
    }
}

const bike1 = new Bicicleta();

bike1.setModelo("Speed X");
bike1.setMarca("Caloi");
bike1.setCor("Preta");
bike1.setVelocidadeMaxima(30); // válido

console.log(bike1.getModelo());
console.log(bike1.getMarca());
console.log(bike1.getCor());
console.log(bike1.getVelocidadeMaxima());

bike1.setVelocidadeMaxima(40); // inválido