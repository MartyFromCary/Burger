const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    const queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  insertOne: (table, objColVals, cb) => {
    const cols = Object.keys(objColVals).toString();
    const vals = Object.values(objColVals).map(S => {
      if (typeof S === "string") return `"${S}"`;
      return S;
    });

    connection.query(
      `INSERT INTO ?? (${cols}) VALUES (${vals})`,
      [table],

      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },

  updateOne: (table, objColVals, objWhere, cb) => {
    connection.query(
      "UPDATE ?? SET ? WHERE ?",
      [table, objColVals, objWhere],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
