const express = require('express');
const app = express();

// Import and use your routes
const beRoute = require('./routes/beRoutes').default;
app.use('/api', beRoute);

// Other server configuration and middleware

// Start the server
const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});