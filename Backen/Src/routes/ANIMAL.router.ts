import  express  from "express";
import * as controller from '../controller/ANIMAL.control';

const router =express.Router();

router.get('/',(_, res)=>{
  controller.GetANIMAL()
  .then((obj)=>{
    res.json(obj);
  })
  .catch((err)=>{
        res.status(500).json(err);
  });
});

export default router;