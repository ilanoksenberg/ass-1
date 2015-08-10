
var fs = require('fs');
var bookList = JSON.parse(fs.readFileSync('bookList.json', 'utf8'));


exports.getAllBooks = function(){
    console.log(bookList);
    return bookList;
}

exports.getBookNameByID = function(Id){
    var bookName = "";
    bookList.forEach(function(book){

        if (book.id == Id) {
            bookName = book.name;
        }
    });
   // console.log(bookName);
    return bookName;
}

exports.getBestReviewsForMonthByNumOfStars = function(stars){
    var bestReviewsList = [];
    bookList.forEach(function(book){
        if (book.bestStarReviews == stars) {
            bestReviewsList.push(book);
        };
    })
    console.log(bestReviewsList);
    return bestReviewsList;
}