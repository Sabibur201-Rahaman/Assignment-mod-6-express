const express = require('express');
const router = express.Router();

// Import controllers
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

const {
  create: createBlogDetails,
  read: readBlogDetails,
  delete: deleteBlogDetails,
  update: updateBlogDetails,
} = require('../Controllers/blogDetailsController');
// Define routes
router.get('/', createBlog);
router.get('/blog/read', readBlog);
router.get('/blog/delete', deleteBlog);
router.get('/blog/update', updateBlog);

router.get('/', createBlogDetails);
router.get('/blog/read', readBlogDetails);
router.get('/blog/delete', deleteBlogDetails);
router.get('/blog/update', updateBlogDetails);

const {
  create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
} = require('../Controllers/commentController');

router.get('/', createComment);
router.get('/blog/read', readComment);
router.get('/blog/delete', deleteComment);
router.get('/blog/update', updateComment);
module.exports = router;
