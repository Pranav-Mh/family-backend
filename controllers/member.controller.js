const db = require('../db'); // ✅ Correct path to db.js

// ✅ Add Member
exports.addMember = async (req, res) => {
    const { name, age, gender, relation, dob, phone } = req.body;
    const sql = 'INSERT INTO family_members (name, age, gender, relation, dob, phone) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(sql, [name, age, gender, relation, dob, phone], (err, results) => {
        if (err) {
            console.error('❌ Error adding member:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).send('✅ Member added successfully');
    });
};

// ✅ Get All Members
exports.getAllMembers = async (req, res) => {
    db.query('SELECT * FROM family_members', (err, results) => {
        if (err) {
            console.error('❌ Error fetching members:', err);
            return res.status(500).send('Error fetching members');
        }
        res.status(200).json(results);
    });
};

// ✅ Update Member
exports.updateMember = async (req, res) => {
    const { id } = req.params;
    const { name, age, gender, relation, dob, phone } = req.body;

    console.log("🔧 Updating member ID:", id);
    console.log("📦 Data:", { name, age, gender, relation, dob, phone });

    const sql = 'UPDATE family_members SET name = ?, age = ?, gender = ?, relation = ?, dob = ?, phone = ? WHERE id = ?';

    db.query(sql, [name, age, gender, relation, dob, phone, id], (err, results) => {
        if (err) {
            console.error('❌ Error updating member:', err);
            return res.status(500).send('Error updating member');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Member not found');
        }
        res.status(200).send('✅ Member updated successfully');
    });
};

// ✅ Delete Member
exports.deleteMember = async (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM family_members WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('❌ Error deleting member:', err);
            return res.status(500).send('Error deleting member');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Member not found');
        }
        res.status(200).send('✅ Member deleted successfully');
    });
};
