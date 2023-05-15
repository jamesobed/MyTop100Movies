const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  rank: Number,
},{
  timestamps: true,
  toJSON: {
    transform(doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
    },
},
});

module.exports = mongoose.model('Movie', movieSchema);
