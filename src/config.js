export default {
  API_ENDPOINT: process.env.API_URL || 'http://localhost:7000',
  REACT_APP_TOKEN_KEY:
    process.env.REACT_APP_TOKEN_KEY || 'crescendo-client-auth-token'
};
