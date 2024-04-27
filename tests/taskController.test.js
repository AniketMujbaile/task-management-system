const sinon = require('sinon');
const taskController = require('../controllers/taskController');
const Task = require('../models/taskModel');

describe('Task Controller', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      const req = { body: { title: 'Test Task', description: 'Test Description', status: 'pending' } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
      const createStub = sinon.stub(Task, 'create').returns({ _id: '123', ...req.body });

      await taskController.createTask(req, res);

      sinon.assert.calledWithExactly(createStub, req.body);
      sinon.assert.calledWith(res.status, 201);
      sinon.assert.calledWith(res.json, sinon.match({ _id: '123', ...req.body }));
    });

   });

 });

 