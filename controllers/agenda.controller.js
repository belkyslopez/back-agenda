const Agenda = require('../models/agenda');

exports.crearDias = async (req, res) => {
    try {
        const dias = new Dias(req.body);
        await dias.save();
        res.status(201).json({ msg: '✅ Dias creados correctamente' });
    } catch (err) {
        res.status(500).json({ error: '❌ Error al crear los dias', detalle: err.message });
    }
};
exports.obtenerDias = async (req, res) => {
    try {
        const dias = await Dias.find().populate('hora_ID');

        if (!dias || dias.length === 0) {
            return res.status(404).json([]);
        }
        return res.status(201).json(dias);

    } catch (err) {
        return res.status(500).json({ error: '❌ Error al obtener los dias', detalle: err.message });
    }
};
exports.crearAgendaProfesional = async (req, res) => {
    try {
        const agenda = new Agenda(req.body);
        if (!req.body.profesional || !req.body.dia_libre || !Array.isArray(req.body.dias)) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }
        await agenda.save();
        res.status(201).json({
            msg: '✅ Agenda creada correctamente',
            id: agenda._id,
            agenda
        });
    } catch (err) {
        res.status(500).json({ error: '❌ Error al crear la agenda', detalle: err.message });
    }
};
exports.obtenerAgenda = async (req, res) => {
    try {
        const agenda = await Agenda.find()
            .populate('hora_ID')
            .populate('profesional_ID ');

        if (!agenda || agenda.length === 0) {
            return res.status(404).json([]);
        }
        return res.status(201).json(agenda);

    } catch (err) {
        return res.status(500).json({ error: '❌ Error al obtener la agenda', detalle: err.message });
    }
};
exports.obtenerAgendaPorId = async (req, res) => {
    try {
        const agenda = await Agenda.findById(req.params.id)
            .populate('usuario_ID')
            .populate('hora_ID');

        if (!agenda) {
            return res.status(404).json({ error: 'Agenda no encontrada' });
        }

        return res.status(200).json(agenda);
    } catch (err) {
        return res.status(500).json({ error: '❌ Error al obtener la agenda', detalle: err.message });
    }
};
exports.actualizarAgendaProfesional = async (req, res) => {
    try {
        const { id } = req.params;

        const agendaActualizada = await Agenda.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true } // retorna el doc actualizado y aplica validaciones
        );

        if (!agendaActualizada) {
            return res.status(404).json({ error: '❌ Agenda no encontrada' });
        }

        res.json({ msg: '✅ Agenda actualizada correctamente', agenda: agendaActualizada });
    } catch (err) {
        res.status(500).json({ error: '❌ Error al actualizar la agenda', detalle: err.message });
    }
};
exports.eliminarAgenda = async (req, res) => {
    try {
        const agenda = await Agenda.findByIdAndDelete(req.params.id);
        if (!agenda) {
            return res.status(404).json({ error: 'Agenda no encontrada' });
        }
        res.json({ msg: '🗑️ Agenda eliminada correctamente' });
    } catch (err) {
        res.status(500).json({ error: '❌ Error al eliminar la agenda', detalle: err.message });
    }
};