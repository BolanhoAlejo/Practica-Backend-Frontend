const ticketCtrl = require('../controllers/ticket.controller');

const express = require('express');

const router = express.Router();

router.post("/", ticketCtrl.createTicket);
router.get("/", ticketCtrl.getTickets);
router.delete("/:id", ticketCtrl.deleteTickets);
router.put("/:id", ticketCtrl.updateTicket);
router.get("/:categoria", ticketCtrl.getTicketsPorCategoria);

module.exports = router;
