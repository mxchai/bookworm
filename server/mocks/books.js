module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();

  var books = [
    {
      id: 1,
      title: 'Hamlet',
      author: 'Some old dude',
      description: 'Some stupid book written long ago'
    },
    {
      id: 2,
      title: 'The quick brown fox',
      author: 'Every internet writer ever',
      description: 'Jumps over the lazy dog is the best book ever'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      description: 'Scary world to live in, the 1984 world is.'
    }
  ];

  booksRouter.get('/', function(req, res) {
    var data = [];
    books.forEach(function(item) {
      // The format below is the JSONApi format
      data.push({
        type: 'books',
        id: item.id.toString(),
        attributes: {
          title: item.title,
          description: item.description,
          author: item.author
        }
      })
    })
    res.set('Content-Type', 'application/vnd.api+json');
    res.send({
      data: data
    });
  });

  booksRouter.post('/', function(req, res) {
    // Need body parser for this post method to work
    // body.data probably extracts the hash I think
    var newBook = req.body.data.attributes;
    var newId = books.length + 1;
    
    // books is server memory of the book store, a JS array
    books.push({
      title: newBook.title,
      description: newBook.description,
      author: newBook.author,
      id: newId
    });

    // Response to the client
    res.send({
      data: {
        type: 'books',
        id: newId,
        attributes: newBook
      }
    });
  });

  booksRouter.get('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/books', booksRouter);
};
