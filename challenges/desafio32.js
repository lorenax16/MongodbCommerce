db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { _id: 0, nome: 1, vendidos: 1 },
);

// $mod
// Selecione documentos onde o valor de um campo dividido por um divisor tem o resto especificado (ou seja, execute uma operação de módulo para selecionar documentos). Para especificar um
// $mod
// expressão, use a seguinte sintaxe:

// { field: { $mod: [ divisor, remainder ] } }
