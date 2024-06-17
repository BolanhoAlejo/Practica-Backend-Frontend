const Sector = require('../models/sector');
const sectorCtrl = {}

sectorCtrl.getSectores = async (req, res) => {
    const sector = await Sector.find();
    res.json(sector);
}

sectorCtrl.createSector = async (req, res) => {
    var sector = new Sector(req.body);
    try {
        await sector.save();
        res.json({
            status: '1',
            'msg': 'Sector guardado'})
    } catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al guardar el sector'})
        }
    
}

sectorCtrl.getSector = async (req, res) => {
    const sector = await Sector.findById(req.params.id);
    res.json(sector);
}

sectorCtrl.editSector = async (req, res) => {
    const vsector = new Sector(req.body);
    try {
        await Sector.updateOne({_id: req.body._id}, vsector);
        res.json({
            status: '1',
            'msg': 'Sector actualizado'})
    }
    catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al actualizar el sector'})
    }
}

sectorCtrl.deleteSector = async (req, res) => {
    try {
        await Sector.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            'msg': 'Sector eliminado'})
    }
    catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al eliminar el sector'})
    }
}

module.exports = sectorCtrl;
