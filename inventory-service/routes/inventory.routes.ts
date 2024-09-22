import { Router } from 'express';
import InventoryController from '../controllers/inventory.controller';

const router = Router();

// Define routes
router.get('/', InventoryController.getAllItems);
router.post('/', InventoryController.addItem);
router.put('/:id', InventoryController.updateItem);
router.delete('/:id', InventoryController.deleteItem);

export default router;
