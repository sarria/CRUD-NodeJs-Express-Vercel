import express from 'express';
import routes from './src/routes/userRoutes'
import bodyParser from 'body-parser'
require('dotenv').config()

// console.log(process.env)

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// Serving static files
app.use(express.static('public'))

app.get('/', (req, res) => 
	res.send(`NodeJs, Express, Firebase on Vercel :-)`)
);

app.listen(PORT, () => 
	console.log(`Server in running on port ${PORT}`)
);

export default app;
