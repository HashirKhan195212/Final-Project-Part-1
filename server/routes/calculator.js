// Hashir Khan 100911091
// Afeef Hossain 100923314
// Kapiraj Sivakumar 100817815
// Import the Express module
var express = require('express');
// Create a router object from Express
var router = express.Router();
// Calls model from model folder
let Calculator = require('../model/calculator');
function requireAuth(req,res,next){
    if(!req.isAuthenticated()){
        return res.redidirect('/login')
    }
    next()
}
// Route to get the list of all calculations or entries
router.get('/', async (req, res, next) => {
    // Try catch method
    try {
        // Using all entries from the database using the Calculator model
        const calculatorList = await Calculator.find();
        res.render('Calculate/index', {
            // Page title
            title: 'Calculator',
            // Data that will be used
            calculatorList: calculatorList
        });
    } catch (err) {
        // show the error to the console
        console.error(err);
        // Render an error message
        res.render('index', {
            error: 'Error on Server'
        });
    }
});
// / Route to display to add a new entry
router.get('/add', async (req, res, next) => {
    // Try catch method
    try {
        // Render the add page with a title
        res.render('Calculate/add', {
            title: "Add Grade"
        });
    } catch (err) {
        // show the error to the console
        console.error(err);
        // Render an error message
        res.render('index', {
            error: 'Error on Server'
        });
    }
});

// Route to handle adding new data
router.post('/add', async (req, res, next) => {
    // Try catch method
    try {
        // Using all entries from the database using the Calculator model
        let newCalculator = new Calculator({
            "Course": req.body.Course,
            "CourseCode": req.body.CourseCode,
            "Professor": req.body.Professor,
            "MarksG": req.body.MarksG,
            "MarksT": req.body.MarksT
        });
        // Save the new entry to the database
        await newCalculator.save();
        // Redirects to calculator
        res.redirect('/index');  
    } catch (err) {
        // Redirects to calculator
        console.error(err);
        // Render an error message
        res.render('calculator', {
            error: 'Error on server'
        });
    }
});

// Route to show the edit page for calculations
router.get('/edit/:id', async (req, res, next) => {
    // Try catch method
    try {
        // Get the ID from the route parameters
        const id = req.params.id;
        // Find the entry to edit using the ID
        const CalculatorToEdit = await Calculator.findById(id);
        if (!CalculatorToEdit) {
            // If the entry is not found, send a 404 response
            return res.status(404).send('Values not found');
        }
        // Rendering the edit page
        res.render('Calculate/edit', {
            title: 'Edit Values',
            Calculator: CalculatorToEdit
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// Route to handle editing a book
router.post('/edit/:id', async (req, res, next) => {
    try {
        // Get the ID from the route parameters
        let id = req.params.id;
        // Create an updated entry with the data
        let updatedCalculator = {
            "Course": req.body.Course,
            "CourseCode": req.body.CourseCode,
            "Professor": req.body.Professor,
            "MarksG": req.body.MarksG,
            "MarksT": req.body.MarksT
        };
        // Find the entry by ID and update it in the database
        await Calculator.findByIdAndUpdate(id, updatedCalculator);
        res.redirect('/index');  // Redirect to calculator
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// Route to handle deleting a book
router.post('/delete/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        await Calculator.deleteOne({ _id: id });
        res.redirect('/index');  // Redirect to calculator
    } catch (err) {
        // errors to the console
        console.error(err);
        res.render('Calculate/index', {
            error: 'Error on server'
        });
    }
});

module.exports = router;
//