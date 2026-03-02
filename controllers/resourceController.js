const Resource = require('../models/resourceModel');
const asyncHandler = require('../utils/asyncHandler');

exports.getAllResources = asyncHandler(async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
});

exports.getResourceById = asyncHandler(async (req, res) => {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
        return res.status(404).json({ message: 'Resource not found' });
    }
    res.json(resource);
});

exports.createResource = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const newResource = new Resource({ name, description });
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
});

exports.updateResource = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
        return res.status(404).json({ message: 'Resource not found' });
    }
    resource.name = name;
    resource.description = description;
    await resource.save();
    res.json(resource);
});

exports.deleteResource = asyncHandler(async (req, res) => {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
        res.status(404).json({ message: 'Resource not found' });
        return;
    }
    await resource.deleteOne();
    res.json({ message: 'Resource deleted successfully' });
});
