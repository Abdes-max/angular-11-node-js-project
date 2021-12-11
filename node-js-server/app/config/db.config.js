module.exports = {
  HOST: "localhost",
  USER: "Abdes",
  PASSWORD: "123456",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

exports.PRODUCTION = {
  HOST: "/cloudsql/peak-service-334315:us-central1:testdb",
  USER: "Abdes",
  PASSWORD: "123456",
  DB: "testdb",
  dialect: "mysql",
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};
