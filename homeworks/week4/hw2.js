const request = require('request');
const pcs = require('process');

if (pcs.argv[2] === 'list') {
  request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const json = JSON.parse(body);
      for (let i = 0; i < json.length; i += 1) {
        console.log(`${json[i].id} ${json[i].name}`);
      }
    },
  );
}

if (pcs.argv[2] === 'read') {
  request.get(
    `https://lidemy-book-store.herokuapp.com/books/${pcs.argv[3]}`,
    (error, response, body) => {
      console.log(body);
    },
  );
}

if (pcs.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${pcs.argv[3]}`,
    (error, response, body) => {
      console.log(body);
    },
  );
}

if (pcs.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: pcs.argv[3] },
    },
    (error, response, body) => {
      console.log(body);
    },
  );
}

if (pcs.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${pcs.argv[3]}`,
      form: { name: pcs.argv[4] },
    },
    (error, response, body) => {
      console.log(body);
    },
  );
}
