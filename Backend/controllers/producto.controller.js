const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            status: '1',
            'msg': 'Producto guardado'})
    } catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al guardar el producto'})
    }
}

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            'msg': 'Producto eliminado'})
    }
    catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al eliminar el producto'})
    }
}

productoCtrl.editProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({_id: req.body._id}, vproducto);
        res.json({
            status: '1',
            'msg': 'Producto actualizado'})
    }
    catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al actualizar el producto'})
    }
}

productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.find({ destacado: true });
    res.json(producto);
}


module.exports = productoCtrl;