const path = require('path');

const rootDir = require('../helpers/path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};

exports.postContact = (req, res, next) => {
    res.redirect('/success');
};

exports.getSuccessContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};