module.exports = {
  apps : [{
    name: 'ms-survey-api',
    script: 'dist/main.js',
    exec_mode: 'cluster',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
