
exports.up = function(knex, Promise) {
	return knex.schema.createTable("games", tb => {
		tb.increments()
		tb.string("title", 128).notNullable().unique()
		tb.string("genre", 128).notNullable()
		tb.integer("releaseYear", 4)
	}) 
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("games")
};
