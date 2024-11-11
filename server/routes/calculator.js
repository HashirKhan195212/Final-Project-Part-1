var express = require('express');
var router = express.Router();
let Calculator = require('../model/calculator');

// Route to get the list of books
router.get('/', async (req, res, next) => {
    try {
        const calculatorList = await Calculator.find();
        res.render('calculate/calculator', {
            title: 'Calculator',
            calculatorList: calculatorList
        });
    } catch (err) {
        console.error(err);
        res.render('calculator', {
            error: 'Error on Server'
        });
    }
});
// Route to show the add book page
router.get('/add', async (req, res, next) => {
    try {
        res.render('Calculate/add', {
            title: "Add Grade"
        });
    } catch (err) {
        console.error(err);
        res.render('calculator', {
            error: 'Error on Server'
        });
    }
});

// Route to handle adding a book
router.post('/add', async (req, res, next) => {
    try {
        let newCalculator = new Calculator({
            "Course": req.body.Course,
            "CourseCode": req.body.CourseCode,
            "Professor": req.body.Professor,
            "MarksG": req.body.MarksG,
            "MarksT": req.body.MarksT
        });
        await newCalculator.save(); // Use save instead of create for a cleaner approach
        res.redirect('/calculator');  // Redirect to home page (or to your books list)
    } catch (err) {
        console.error(err);
        res.render('calculator', {
            error: 'Error on server'
        });
    }
});

// Route to show the edit page for a book
router.get('/edit/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const CalculatorToEdit = await Calculator.findById(id);
        if (!CalculatorToEdit) {
            return res.status(404).send('Values not found');
        }
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
        let id = req.params.id;
        let updatedCalculator = {
            "Course": req.body.Course,
            "CourseCode": req.body.CourseCode,
            "Professor": req.body.Professor,
            "MarksG": req.body.MarksG,
            "MarksT": req.body.MarksT
        };

        await Calculator.findByIdAndUpdate(id, updatedCalculator);
        res.redirect('/calculator');  // Redirect to home page (or to your books list)
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
        res.redirect('/calculator');  // Redirect to home page (or to your books list)
    } catch (err) {
        console.error(err);
        res.render('Calculate/calculator', {
            error: 'Error on server'
        });
    }
});

module.exports = router;
