db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });

// o $unset operador exclui um campo específico. Considere a seguinte sintaxe:

// { $unset: { <field1>: "", ... } }
