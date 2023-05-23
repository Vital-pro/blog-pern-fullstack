import express from 'express';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express(); // так создается приложение в фреймворке express
dotenv.config();

// Constants (..create const's from fail .env):
const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
// app.get('/', (req, res) => {...res.send('Hello!')}) - this template
// app.get('/', (req, res) => {
//   return res.json({ message: 'All good!' });
// });  был тестовый запрос
 
// app.listen(PORT, () => {
//   console.log('Server started...! on port:', PORT); // так просто поднимается server
// });

//***start**1 variant**connect to DB****/
// async function start() {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://blog??MERNf??ullstack:createuser@cluster0.chbab9e.mongodb.net/name-bd-blog-mern?retryWrites=true&w=majority'
//     );

//     app.listen(PORT, () => console.log('Server started!... on port:', PORT));
//   } catch (error) {
//     console.log(error);
//   }
// }

// start();

//***finish**1 variant**connect to DB****/

//***start**2 variant**connect to DB****/
// mongoose.connect(
//   'mongodb+srv://blog??MERNf??ullstack:createuser@cluster0.chbab9e.mongodb.net/name-bd-blog-mern?retryWrites=true&w=majority')
//   .then(() => console.log('DB ok!'))
//   .catch((err) => console.log('DB error!', err));

//***finish**2 variant**connect to DB****/

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});

const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('connection successfully!');
    app.listen(PORT, () => console.log('Server started...! on port:', PORT));
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
};

testDB();
