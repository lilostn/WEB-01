let filmes = [
{ titulo: "Top Gun: Maverick", ano: 2022, genero: ["Ação", "Drama"], nota: 8.2, poster: "assets/topgun.jpg " },
{ titulo: "Homem Aranha: Um Novo Dia", ano: 2026, genero: ["Ação "," Aventura"], nota: 8.0, poster: "assets/spider.jpg" },
{ titulo: "Em Ritmo de Fuga", ano: 2017, genero: ["Ação, Suspense"], nota: 7.5, poster: "assets/ritmofuga.jpg" },
{ titulo: "Devoradores de Estrelas", ano: 2026, genero: ["Ficção Científica","Aventura"], nota: 8.2, poster: "assets/devoradores.jpg" },
{ titulo: "Pecadores", ano: 2025, genero:[ "Terror","Suspense"], nota: 7.5, poster: "assets/sinners.jpg " },
{ titulo: "Deadpool & Wolverine", ano: 2024, genero: ["Ação","Aventura","Comédia"], nota: 7.5, poster: "assets/Deadpool.jpg " },
{ titulo: "Superman", ano: 2025, genero: ["Ação","Aventura","Ficção Científica"], nota: 7.0, poster: "assets/superman.jpg " },
{ titulo: "Como Treinar Seu Dragão", ano: 2022, genero: ["Ação","Drama"], nota: 8.2, poster: "assets/dragao.jpg" }

]


function mostrarFilmes(lista){
    const catalogo=
        document.getElementById("catalogo");
        catalogo.innerHTML = "";
    for (let filme of lista){
        let selo = filme.nota >= 8 ? "⭐ Recomendado":"";
        const catalogo=
        document.getElementById("catalogo");

        document.getElementById("contador").textContent=`Total de Filmes: ${lista.lenght}`;
        catalogo.innerHTML+=`
                <article class="filme">
                    <img src="${filme.poster}" alt="${filme.titulo}"<h3>
                    <h3>${filme.titulo}</h3>    

                </article>
             
            `;
             
    }
}
mostrarFilmes(filmes);

document.getElementById("busca").addEventListener("input", function(){
    const pesquisa = this.value.toLowerCase();
    const resultado = filmes.filter(filme => filme.titulo.toLowerCase().includes(pesquisa));
    mostrarFilmes(resultado);
}

);

document.querySelectorAll(".genero").forEach(item=> {
        item.addEventListener("click", function(){
            const genero = this.textContent.trim();

            const resultado = filmes.filter(filme => filme.genero.includes(genero));
         
        mostrarFilmes(resultado);
            });
     });

document.getElementById("filtro-genero").addEventListener("change", function(){
    const genero = this.value;

    const resultado = genero === "" ? filmes : filmes.filter(filme =>filme.genero.includes(genero));
    mostrarFilmes(resultado);

});
