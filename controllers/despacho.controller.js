export class DespachoController {
  constructor({ despachoModel }) {
    this.despachoModel = despachoModel;
  }
  consultarDespacho = async (req, res) => {
    const { id } = req.params;
    const despachos = await this.despachoModel.consultarEstadoDespacho({ id });
    if (despachos) return res.json(despachos);
    res.status(404).json({ message: "Despacho no encontrado" });
  };
}
