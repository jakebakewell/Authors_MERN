const Author = require('../models/authors.models')

module.exports.findAllAuthors = (req, res) => {
    Author.find().sort({name: 1})
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json({ author: oneAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(createdAuthor => res.json({ author: createdAuthor }))
        .catch(err => res.status(400).json(err));
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { useFindAndModify: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.json(err.errors));
}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}