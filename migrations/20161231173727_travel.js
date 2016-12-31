'use strict';

/* eslint-disable max-len */

exports.up = function(knex) {
    return knex.schema.createTable('travel', (table) => {
        table.increments();
        table.string('name')
            .notNullable()
            .defaultTo('');
        table.string('description')
            .notNullable()
            .defaultTo('');
        table.string('url')
            .notNullable()
            .defaultTo('');
        table.integer('category_id')
            .unsigned()
            .references('category.id')
            .notNullable()
            .onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('travel');
};


/*
| Travel        |                           |                        |
|:--------------|:--------------------------|:-----------------------|
| id           | serial                    | primary key             |
| category_id  | integer                   | foreign key             |
| name         | varchar(255)              | not null default ''     |
| description  | varchar(255)              | not null default ''     |
| url          | varchar(255)              | not null default ''     |
| created_at   | timestamp with time zone  | not null default now()  |
| updated_at   | timestamp with time zone  | not null default now()  |
*/