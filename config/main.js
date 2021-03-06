const config = {  
  // Secret key for JWT signing and encryption
  'secret': process.env.HEROKUENV_FBE_SECRET || 'super secret passphrase', // TODO: check where to save the secret in production
  // Database connection information
  'database': process.env.MONGODB_URI || 'mongodb://localhost:27017', // TODO: check for process env variable in production
  // Setting port for server
  'port': process.env.PORT || 4100
} 

module.exports = config;
