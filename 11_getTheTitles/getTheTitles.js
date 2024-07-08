const books = [
    {
      title1: 'Book',
      author1: 'Name'
    },
    {
      title2: 'Book2',
      author2: 'Name2'
    }
  ]


  const getTheTitles = function (array) {
    return array.map((book) => book.title);
  };

// Do not edit below this line
module.exports = getTheTitles;
