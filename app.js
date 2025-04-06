const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const productRoutes = require('./routes/product.routes');

const app = express();
const PORT = 3000;
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.use(bodyParser.json());
app.use('/products', productRoutes);

db.sync().then(() => {
  console.log('DB synced');
  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
}).catch(console.error);
