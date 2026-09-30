/* GET about page */
const about = (req, res) => {
    res.render('generic-text', {
        title: 'About Loc8r',
        content: [
            'Loc8r was created to help people find places to sit down and get a bit of work done.',
            'Whether you need a quiet corner with fast wifi, somewhere to grab a coffee between meetings, or a spot to spread out with your laptop for the afternoon, Loc8r lists nearby places along with their facilities, opening hours and honest reviews from people who have worked there.',
            'Found somewhere great? Leave a review so others can find it too.'
        ]
    });
};

module.exports = {
    about
};
