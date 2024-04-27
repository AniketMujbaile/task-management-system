const request = require('supertest');
const app = require('../app');
const Task = require('../models/taskModel');

describe('Task API', () => {
  beforeEach(async () => {
    await Task.create({ title: 'Task 1', description: 'Description 1', status: 'pending' });
    await Task.create({ title: 'Task 2', description: 'Description 2', status: 'completed' });
  });

  afterEach(async () => {
     await Task.deleteMany();
  });

  describe('GET /tasks', () => {
    it('should return all tasks', async () => {
      const res = await request(app).get('/tasks');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.lengthOf(2);
    });
  });

 });

 
