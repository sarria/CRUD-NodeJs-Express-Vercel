// Add Express
// const express = require('express')
import express from 'express';

// Initialize Express
const app = express()

// Create GET request
app.get('/', (req, res) => {
  res.send('This thing is Express on Vercel :-)')
})

// Initialize server
app.listen(3000, () => {
  console.log('Running this thing on port 3000.')
})

// Once one have done "type": "module" in your package.json, one can start using ES syntax
// module.exports = app;
export default app;