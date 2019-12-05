import express from 'express';
import * as subsController from './subscriptions.controller';

const router = express.Router();

router.get('/', subsController.index);
router.get('/:id', subsController.show);
router.post('/', subsController.create);
router.delete('/:id', subsController.destroy);
router.put('/:id', subsController.update);

module.exports = router;
