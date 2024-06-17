const Ticket = require('../models/ticket');
const ticketCtrl = {}

ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
            status: '1',
            'msg': 'Ticket guardado'})
    } catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al guardar el ticket'})
    }
}

ticketCtrl.getTickets = async (req, res) => {
    const tickets = await Ticket.find().populate('espectador');
    res.json(tickets);
}

ticketCtrl.deleteTickets = async (req, res) => {
    try {
        await Ticket.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            'msg': 'Ticket eliminado'})
    }
    catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al eliminar el ticket'})
    }
}

ticketCtrl.updateTicket = async (req, res) => {
    try {
        await Ticket.updateOne({_id: req.params.id}, req.body);
        res.json({
            status: '1',
            'msg': 'Ticket actualizado'})
    }
    catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al actualizar el ticket'})
    }
}

ticketCtrl.getTicketsPorCategoria = async (req, res) => {
    try {
        const tickets = await Ticket.find({ categoriaEspectador: req.params.categoria }).populate('espectador');
        res.json(tickets);
    } catch (error) {
        res.status(400).json({
            status: '0',
            'msg': 'Error al obtener los tickets por categoría de espectador'
        });
    }
}


module.exports = ticketCtrl;