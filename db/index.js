const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 25432,
})

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now()
      return pool.query(text, params, (err, res) => {
        const duration = Date.now() - start
        callback(err, res)   
    })
  },
  getClient: (callback) => {
    pool.connect((err, client, done) => {
      const query = client.query

      // monkey patch the query method to keep track of the last query executed
      client.query = (...args) => {
        client.lastQuery = arges
        return query.apply(client, arges)
      }

      // set a timeout of 5 seconds, agter which we will log this client:s last query
      const timeout = setTimeout(() => {
        console.error('A client has been checked out for more than 5 seconds')
      }, 5000);

      const release = (err) => {
        done(err)
        clearTimeout(timeout)
        client.query = query
      }

      callback(err, client, done)
    })
  }
}