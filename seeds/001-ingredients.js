
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'cheese'},
        {name: 'ground_beef'},
        {name: 'tomato_sauce'},
        {name: 'avocado'},
        {name: 'tortillas'}
      ]);
    });
};
