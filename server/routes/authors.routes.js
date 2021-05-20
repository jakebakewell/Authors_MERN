const AuthorController = require('../controllers/authors.controllers')

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.post('/api/authors/new', AuthorController.createNewAuthor);
    app.put('/api/authors/update/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/delete/:id', AuthorController.deleteAnExistingAuthor);
}