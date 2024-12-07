const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const Task = require('../models/Task');
const router = express.Router();

// Validation middleware
const validate = (validations) => async (req, res, next) => {
  await Promise.all(validations.map(validation => validation.run(req)));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// POST /tasks
router.post('/', validate([
  body('title').notEmpty().withMessage('Title is required').isLength({ max: 100 }),
  body('priority').isIn(['LOW', 'MEDIUM', 'HIGH']).withMessage('Invalid priority')
]), async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /tasks
router.get('/', validate([
  query('status').optional().isIn(['TODO', 'IN_PROGRESS', 'COMPLETED']),
  query('priority').optional().isIn(['LOW', 'MEDIUM', 'HIGH']),
  query('sort').optional().isIn(['createdAt', '-createdAt', 'dueDate', '-dueDate'])
]), async (req, res) => {
  try {
    const { status, priority, sort, limit = 10, skip = 0 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const tasks = await Task.find(filter)
      .sort(sort ? { [sort.replace('-', '')]: sort.startsWith('-') ? -1 : 1 } : {})
      .skip(Number(skip))
      .limit(Number(limit));
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /tasks/:id
router.get('/:id', validate([param('id').isMongoId().withMessage('Invalid ID')]), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /tasks/:id
router.put('/:id', validate([
  param('id').isMongoId().withMessage('Invalid ID'),
  body('status').optional().isIn(['TODO', 'IN_PROGRESS', 'COMPLETED']),
  body('priority').optional().isIn(['LOW', 'MEDIUM', 'HIGH'])
]), async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { ...req.body, updatedAt: new Date() }, { new: true });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /tasks/:id
router.delete('/:id', validate([param('id').isMongoId().withMessage('Invalid ID')]), async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;