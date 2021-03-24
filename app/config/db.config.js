module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "reza1234",
  DB: "test_bts",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};