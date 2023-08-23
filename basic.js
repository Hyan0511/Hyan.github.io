const express = require('express'); const app = express();

app.get('/someUri', function (req, res, next) {})

// GET www.domain.com/myPath
app.get('/myPath', function (req, res, next) {})
 // POST www.domain.com/myPath
 app.post('/myPath', function (req, res, next) {})
 // PUT www.domain.com/myPath
 app.put('/myPath', function (req, res, next) {})
 // DELETE www.domain.com/myPath
 app.delete('/myPath', function (req, res, next) {})

app.all('/myPath', function (req, res, next) {})

app.use('/myPath', function (req, res, next) {})

app.use('*', function (req, res, next) {})

app.route('/myPath')
.get(function (req, res, next) {})
.post(function (req, res, next) {})
.put(function (req, res, next) {})

// GET www.domain.com/myPath
app.get('/myPath', myFunction, function (req, res, next) {})

// other.js
exports.doSomething = function(req, res, next) {/* do some stuff */};

const other = require('./other.js');
app.get('/someUri', myFunction, other.doSomething);