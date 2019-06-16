const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

// TODO: разграничить данные по user'ам

const ContactsSchema = new Schema(
  {
    name: { type: String, trim: true },
    surname: { type: String, trim: true },
    surname_ua: { type: String, trim: true },
    surname_ru: { type: String, trim: true },
    surname_en: { type: String, trim: true },
    preferred_language: { type: String, trim: true },
    email: { type: [{ type: String, trim: true, lowercase: true }] },
    birthday: { type: Date },
    avatar: { type: Schema.Types.ObjectId, ref: "FilesModel" },
    description: { type: String },
    phones: {
      type: [
        {
          code: { type: String },
          value: { type: String }
        }
      ]
    },
    social: {
      fb: { type: String },
      insta: { type: String }
    },
    category: { type: Schema.Types.ObjectId, ref: "CategoriesModel" },
    addedBy: { type: Schema.Types.ObjectId, ref: "UsersModel" }
  },
  {
    collection: "ContactsCollection",
    timestamps: true
  }
);

ContactsSchema.statics = {
  getContacts: function(user) {
    return this.find({
      addedBy: user
    })
      .populate([
        {
          path: "category",
          select: "name"
        }
      ])
      .lean()
      .exec();
  },
  updateContact: async function(id, data, initiator) {
    const doc = this.findOne({ _id: id, addedBy: initiator }).exec();
    if (!doc) {
      throw new Error("contact not found");
    }
    Object.assign(doc, data);
    return doc.save();
  },
  addContact: function(data) {
    return this.create(data);
  }
};

module.exports = mongoose.model("ContactsModel", ContactsSchema);
