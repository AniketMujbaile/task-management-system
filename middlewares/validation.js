 // Middleware to validate task data
exports.validateTaskData = (req, res, next) => {
  const { title, description, status } = req.body;

  // Check if required fields are present
  if (!title || !description || !status) {
    return res.status(400).json({ message: 'Title, description, and status are required' });
  }

  // Check if title and description are not empty strings
  if (typeof title !== 'string' || typeof description !== 'string' || title.trim() === '' || description.trim() === '') {
    return res.status(400).json({ message: 'Title and description must be non-empty strings' });
  }

  // Check if status is one of the allowed values
  const allowedStatus = ['pending', 'in progress', 'completed'];
  if (!allowedStatus.includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }
  
  // If all validation checks pass, proceed to the next middleware
  next();
};
