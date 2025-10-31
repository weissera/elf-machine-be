import { Router } from 'express';
import elfMachineRouter from '../controller/elf-machine';

const router = Router();

router.use('/elf-machine', elfMachineRouter);
// router.use('/posts', postRoutes);

export default router;
