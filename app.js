var indexRouter = require('./routes/index');

// add the following line near the indexRouter
var personsRouter = require('./routes/persons');



app.use('/', indexRouter);

// add the following line near app.use indexRouter
app.use('/persons', personsRouter);
