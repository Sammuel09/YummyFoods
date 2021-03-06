import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute';
import menuRoute from './routes/menuRoute';
import orderRoute from './routes/orderRoute';

import db from './models/database';
// import users from './models/users';
import menu from './models/menu';
import orders from './models/orders';

dotenv.config();

const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use('/api/v1', orderRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', menuRoute);

app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to Fast Food App' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on PORT ${port}..`);
});

module.exports = app;
