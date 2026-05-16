// 1. Import express and path modules
const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();
const PORT = 3000;

// 3. Configure EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (like CSS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// 2. Configure express.urlencoded middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// 4. Create GET route for '/' to render index.ejs
app.get('/', (req, res) => {
    // Renders the registration form
    res.render('index');
});

// 5. Create POST route '/submit' to handle form submissions
app.post('/submit', (req, res) => {
    // 6. Receive form data from request body
    const studentData = {
        fullName: req.body.fullName,
        email: req.body.email,
        age: req.body.age,
        course: req.body.course
    };
    
    // 8. Add console log for submitted data
    console.log('--- New Form Submission ---');
    console.log(studentData);
    
    // 7. Send form data to result.ejs
    res.render('result', { student: studentData });
});

// Start the Express server on the specified port
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
