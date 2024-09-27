class Livro {
    #id;
    #titulo;
    #autor;
    #ano;
    #genero;
    #isbn;

    constructor(id, titulo, autor, ano, genero, isbn) {
        this.#id = id;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#ano = ano;
        this.#genero = genero;
        this.#isbn = isbn;
    }

    get id() {
        return this.#id
    }
    get titulo() {
        return this.#titulo
    }
    get autor() {
        return this.#autor
    }
    get ano() {
        return this.#ano
    }
    get genero() {
        return this.#genero
    }
    get isbn() {
        return this.#isbn
    }
}