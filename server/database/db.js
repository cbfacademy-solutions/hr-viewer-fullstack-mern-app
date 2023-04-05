const { MongoClient } = require("mongodb");

// Private variables
let _db;

module.exports = {
  /**
   * Connects to a MongoDB server.
   * @param {string} url - A MongoDB connection string
   * @param {string} database - A database name
   * @param {connectCallback} callback - A callback function, to be executed if the connection is successful.
   */
  connect: function (url, database, callback) {
    new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .connect()
      .then((connection) => {
        // Verify we got a good "connection" object
        if (connection) {
          _db = connection.db(database);
          console.log("Successfully connected to MongoDB.");
          callback();
        }
      })
      .catch((err) => {
        console.error(`Error occurred while connecting to MongoDB: ${err}`);
      });
  },
  /**
   * Returns a reference to a MongoDB database.
   * @return {import('mongodb').Db} The database instance.
   */
  getDatabase: function () {
    return _db;
  },
  /**
   * Returns a reference to a MongoDB collection.
   * @param {string} name - The name of the collection to return.
   * @return {import('mongodb').Collection<Document>} The document collection.
   */
  getCollection: function (name) {
    return this.getDatabase()?.collection(name);
  },
};

/**
 * This callback is displayed as a global member.
 * @callback connectCallback
 */
