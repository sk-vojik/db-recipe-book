
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'awesome_pizza', dish_id: 1 },
        {name: 'grannys_tacos', dish_id: 2 },
        {name: 'texmex_tacos', dish_id: 2 }
      ]);
    });
};
