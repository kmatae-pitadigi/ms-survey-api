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
       "orm/migration/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "orm/migration"
    },
}
