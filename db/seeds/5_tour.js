
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tour').del()
    .then(function () {
      // Inserts seed entries
      return knex('tour').insert([
        {name: 'Best tour ever', user_id: 1},
        {name: 'South side', user_id: 1},
        {name: 'Saturday tour', user_id: 2},
        {name: 'Sunday tour', user_id: 2},
        {name: 'Favorites', user_id: 3}
      ]);
    });
};
