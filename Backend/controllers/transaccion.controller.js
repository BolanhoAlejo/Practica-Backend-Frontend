const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            status: '1',
            'msg': 'Transaccion guardada'})
    } catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al guardar la transaccion'})
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccion = async (req, res) => {
    try {
    const transaccion = await Transaccion.find({ emailCliente: req.params.email });
    res.json(transaccion);
    } catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'No se encuentran las transacciones'});
    }
}

transaccionCtrl.getTransaccionesDivisas = async(req, res) => {
    try {
        const { monedaOrigen, monedaDestino} = req.params;
        const transacciones = await Transaccion.find({ monedaOrigen, monedaDestino });
        res.json(transacciones);
    } catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'No se encuentran las transacciones'});
    }
}


module.exports = transaccionCtrl;