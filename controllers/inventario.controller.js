export class InventarioController {
  constructor({ inventarioModel }) {
    this.inventarioModel = inventarioModel;
  }
  consultarStock=async(req,res)=>{
    const stock= await this.inventarioModel.consultarStock();
    if(stock) return res.json(stock)
      res.status(404).json({message:"Sin Stock"})
  }
}
