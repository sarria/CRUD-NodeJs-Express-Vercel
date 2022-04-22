import express from 'express';
import routes from './src/routes/userRoutes'
import bodyParser from 'body-parser'
require('dotenv').config()

// console.log(process.env)

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

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
