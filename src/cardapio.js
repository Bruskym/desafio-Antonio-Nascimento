export const menuPrincipal = [
    {
      id: "cafe",
      nome: "Café",
      descricao: "Café",
      preco: 3.00
    },
    {
      id: "suconatural",
      nome: "Suco Natural",
      descricao: "Suco",
      preco: 6.20
    },
    {
      id: "sanduiche",
      nome: "Sanduíche",
      descricao: "Sanduíche",
      preco: 6.50
    },
    {
      id: "salgado",
      nome: "Salgado",
      descricao: "Salgado",
      preco: 7.25
    },
    {
      id: "combo1",
      nome: "1 Suco e 1 Sanduíche",
      descricao: "Combo 1",
      preco: 9.50
    },
    {
      id: "combo2",
      nome: "1 Café e 1 Sanduíche",
      descricao: "Combo 2",
      preco: 7.50
    }
]

export const menuExtras = [
    {
        id: "chantily",
        nome: "Chantily (extra do Café)",
        descricao: "Chantily",
        preco: 1.50,
        dependencia: "cafe"
    },
    {
        id: "queijo",
        nome: "Queijo (extra do Sanduíche)",
        descricao: "Queijo",
        preco: 2.00,
        dependencia: "sanduiche"
    }
]