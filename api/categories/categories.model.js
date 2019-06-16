const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const CategoriesSchema = new Schema(
  {
    name: { type: String, trim: true },
    // TODO: разграничивать
    addedBy: { type: Schema.Types.ObjectId, ref: "UsersModel" }
  },
  {
    collection: "CategoriesCollection",
    timestamps: true
  }
);

CategoriesSchema.statics = {
  getCategories: function(page, user) {
    return this.find({
      $or: [{ addedBy: user }, { addedBy: { $exists: false } }]
    })
      .skip(50 * (page - 1))
      .limit(50)
      .lean()
      .exec();
  },
  addCategory: function(data, user) {
    return this.create({ ...data, addedBy: user });
  }
};

module.exports = mongoose.model("CategoriesModel", CategoriesSchema);
