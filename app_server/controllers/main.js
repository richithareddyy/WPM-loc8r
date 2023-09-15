/* GET homepage */
const index = (req, res) => {  // creates an index function
    res.render('index', { title: 'Loc8r' });    // includes controller code for the homepage
};

//exposes the index function as a method
module.exports = {
    index
};