const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://aishwaryakumari5611:dfeaUZKc5mI2ZjQE@gameskraftcluster.agmqf7g.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
