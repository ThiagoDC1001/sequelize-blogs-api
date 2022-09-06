const express = require('express');
const routers = require('./routes/index');

// ...

const app = express();

app.use(express.json());
app.use(routers.authRoute);
app.use(routers.userRoute);
app.use(routers.categoriesRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
