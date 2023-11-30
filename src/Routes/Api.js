const express = require('express');
const router = express.Router();

// Import controllers
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');


// Define routes
router.get('/', createBlog);
router.get('/blog/read', readBlog);
router.get('/blog/delete', deleteBlog);
router.get('/blog/update', updateBlog);

// Repeat the above for other controllers and functions

module.exports = router;
