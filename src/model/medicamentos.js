const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicamentosSchema = new Schema(
  {
    paciente: { type: String },
    doença: { type: String, required: true },
    medicamento: {type: String}
  },
  {
    versionKey: false
  }
);

const Medicamentos = mongoose.model("Medicamentos", medicamentosSchema);

module.exports = Medicamentos;