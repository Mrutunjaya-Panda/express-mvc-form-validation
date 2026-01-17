// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  const {title, description, image} = req.body;
  const errors = [];
//   Title:
// Check if it’s empty.
// Check if its length is at least 3 characters
  if(!title || title.trim().length < 3){
    errors.push("title must be at least 3 characters long");
  }
//   description:
// Check if it’s empty.
// Check if its length is at least 10 characters.
   if(!description ||  description.trim().length < 10){
    errors.push("description must be at least 10 characters long");
   }
   //Image URL:
//Use a regex or URL constructor to check if it’s a valid URL.
   try{
    const validURL = new URL(image);
   }catch(err){
    errors.push("Image URL must be a valid URL");
   }
// If errors exist:
// Respond with status(401) and render the view with the errors.
// If no errors:
// Respond with status(201) and render the view with a success message.
   if(errors.length > 0){
    return res.status(401).render("addBlog", { errors: errors, success: false });
   }
  res.status(201).render("addBlog", { errors: null, success: "Blog added successfully!" });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
