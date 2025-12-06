const Vacancy = require('../models/Vacancy');

exports.createVacancy = async (req, res) => {
  try {
    // const { name, code, district, province } = req.body;
    console.log(req.body);
    const school = req.body.school;
    const subject = req.body.subject;
    const number_of_teachers = req.body.number_of_teachers;
    const district = req.body.district;
    const province = req.body.province;

    const existing = await Vacancy.findOne({ where: { school } });
    if (existing) return res.status(400).json({ message: 'Vacancy already exists' });

    const vacancy = await Vacancy.create({ school,subject, number_of_teachers, district, province });
    res.status(201).json(vacancy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getVacancy = async (req, res) => {
  try {
    const vacancy = await Vacancy.findAll();
    res.status(200).json(vacancy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getVacancyById = async (req, res) => {
  try {
    const vacancy = await Vacancy.findByPk(req.params.id);
    if (!vacancy) return res.status(404).json({ message: 'Vacancy not found' });
    res.status(200).json(vacancy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateVacancy = async (req, res) => {
  try {
    const [updatedRows, [updatedVacancy]] = await Vacancy.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    if (updatedRows === 0) return res.status(404).json({ message: 'Vacancy not found' });
    res.status(200).json(updatedVacancy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteVacancy = async (req, res) => {
  try {
    const deleted = await Vacancy.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Vacancy not found' });
    res.status(200).json({ message: 'Vacancy deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
