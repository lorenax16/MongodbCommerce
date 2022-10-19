db.produtos.find(
  { $expr: { $gt: ["$curtidas", "$vendidos"] } },
  { _id: 0, nome: 1 },
);

// $expr pode construir expressões de consulta que comparam campos do mesmo documento em um $match palco.