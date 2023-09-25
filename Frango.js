class Sanduiche {
  constructor() {
    if (this.constructor === Sanduiche) {
      throw new Error("Sanduiche é uma classe abstrata e não pode ser instanciada.");
    }
  }

  getCusto() {
    throw new Error("Método abstrato getCusto deve ser implementado pelas subclasses.");
  }

  getDescricao() {
    throw new Error("Método abstrato getDescricao deve ser implementado pelas subclasses.");
  }
}

class FrangoAssado extends Sanduiche {
  constructor() {
    super();
    this.custo = 4.50; 
    this.descricao = "Sanduíche de Frango Assado";
  }

  getCusto() {
    return this.custo;
  }

  getDescricao() {
    return this.descricao;
  }
}

class DecoradorSanduiche extends Sanduiche {
  constructor(sanduiche) {
    super();
    if (this.constructor === DecoradorSanduiche) {
      throw new Error("DecoradorSanduiche é uma classe abstrata e não pode ser instanciada.");
    }
    this.sanduiche = sanduiche; 

  getCusto() {
    throw new Error("Método abstrato getCusto deve ser implementado pelas subclasses.");
  }

  getDescricao() {
    throw new Error("Método abstrato getDescricao deve ser implementado pelas subclasses.");
  }
}

class Pepperoni extends DecoradorSanduiche {
  constructor(sanduiche) {
    super(sanduiche);
    this.custo = 0.99;
    this.descricao = ", Pepperoni";
  }

  getCusto() {
    return this.sanduiche.getCusto() + this.custo;
  }

  getDescricao() {
    return this.sanduiche.getDescricao() + this.descricao;
  }
}

class QueijoMussarelaRalado extends DecoradorSanduiche {
  constructor(sanduiche) {
    super(sanduiche);
    this.custo = 2.00; 
    this.descricao = ", Queijo Mussarela Ralado";
  }

  getCusto() {
    return this.sanduiche.getCusto() + this.custo;
  }

  getDescricao() {
    return this.sanduiche.getDescricao() + this.descricao;
  }
}
let meuSanduiche = new FrangoAssado();

meuSanduiche = new Pepperoni(meuSanduiche);
meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);
console.log(meuSanduiche.getDescricao() + " custa $" + meuSanduiche.getCusto().toFixed(2));
