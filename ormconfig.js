require('dotenv').config;

module.exports = {
    "type": "mongodb",
    "url": process.env.DATABASE_URL,
    "synchronize": false,
    "logging": false,
    "useUnifiedTopology": true,
    "entities": [
       "src/entities/**/!(*.spec.ts)"
    ],
    "migrations": [
       "src/orm/migration/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/orm/migration"
    },
}
