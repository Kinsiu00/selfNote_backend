module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://kin:psql@localhost/self_note'
    }
    // test: {
    //   client: 'pg',
    //   connection: 'postgres://localhost/knex_postgres_intro_test'
    // },
    // production: {
    //   client: 'pg',
    //   connection: process.env.DATABASE_URL 
    // }
  }
  