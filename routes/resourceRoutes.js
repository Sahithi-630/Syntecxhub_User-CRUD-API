const express = require('express');
const {
    getAllResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
} = require('../controllers/resourceController');

const router = express.Router();

router.route('/')
    .get(getAllResources)
    .post(createResource);

router.route('/:id')
    .get(getResourceById)
    .put(updateResource)
    .delete(deleteResource);

module.exports = router;
