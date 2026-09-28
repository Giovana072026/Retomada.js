const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    paginas: 256,
    descrever: function() {
        console.log(
            "O livro" + this.titulo + " foi escrito por " + this.autor + " e tem " + this.paginas + " páginas."
        );
    }
};
livro.descrever();