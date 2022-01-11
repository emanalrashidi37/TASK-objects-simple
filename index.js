/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....

const movie1 = {
     id: 1,
     name: " Twilight ",
     image: "https://m.media-amazon.com/images/I/91ULn6UTnEL._SL1500_.jpg",
     rating: 9,
}

const movie2 = {
    id: 2,
    name: " Peter Pan ",
    image: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_FMjpg_UX1000_.jpg",
    rating: 7.5,
}

const movie3 = {
    id: 3,
    name: " Harry Potter ",
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/84605/93507/Harry-Potter-and-the-philosophers-stone-original-movie-poster-buy-now-at-starstills__45891.1577476239.jpg?c=2",
    rating: 8,
}
console.log(movie1);
console.log(movie2);
console.log(movie3);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */
const movies = [
    {
        id: 1,
        name: " Twilight ",
        image: "https://m.media-amazon.com/images/I/91ULn6UTnEL._SL1500_.jpg",
        rating: 9,
   },
   {
        id: 2,
        name: " Peter Pan ",
        image: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_FMjpg_UX1000_.jpg",
        rating: 7.5,
   },
   {
        id: 3,
        name: " Harry Potter ",
        image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/84605/93507/Harry-Potter-and-the-philosophers-stone-original-movie-poster-buy-now-at-starstills__45891.1577476239.jpg?c=2",
        rating: 8,  
   }

]

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */






 