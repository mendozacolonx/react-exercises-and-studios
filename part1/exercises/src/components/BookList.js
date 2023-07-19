export default function BookList() {
   let pageTitle = "List of Books";
   let book1 = "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_lg.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51zj+e-O+pL._SY344_BO1,204,203,200_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51BsLIrJ4KL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Great Gatsby by F. Scott Fitzgerald" />
         <img src={book2} alt="Pride and Predjudice by Jane Austen" />
         <img src={book3} alt="Think and Grow Rich! by Napoleon Hill" />
      </div>      
   );
}