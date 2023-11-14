// Classe abstrata Veiculo
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`O ${this.modelo} está acelerando.`);
    }

    frear() {
        console.log(`O ${this.modelo} está freando.`);
    }
}

// Classes herdeiras
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    abrirPortas() {
        console.log(`As portas do ${this.modelo} estão abertas.`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    empinar() {
        console.log(`A ${this.modelo} está empinando! Cuidado!`);
    }
}

// Criando instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", 4);
const moto1 = new Moto("Honda", "CBR600RR", 600);

const carro2 = new Carro("Ford", "Fusion", 4);
const moto2 = new Moto("Yamaha", "YZF-R1", 1000);

const carro3 = new Carro("Chevrolet", "Cruze", 4);
const moto3 = new Moto("Suzuki", "GSX-R750", 750);

// Testando os métodos
carro1.acelerar();
carro1.abrirPortas();

moto2.frear();
moto2.empinar();
