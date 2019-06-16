const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    // _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
    name: { type: String, trim: true },
    surname: { type: String, trim: true },
    email: { type: String, trim: true, unique: true, lowercase: true },
    password: { type: String },
    birthday: { type: Date },
    avatar: { type: Schema.Types.ObjectId, ref: "FilesModel" },
    role: { type: String } // admin/moderator/user
  },
  {
    collection: "UserCollection",
    timestamps: true
  }
);

UserSchema.statics = {
  saveUser: function(obj) {
    return this.create(obj);
  },
  loginUser: function(email, password, cb) {
    this.findOne({ email: email.toLowerCase() })
      .lean()
      .exec((err, doc) => {
        if (err) return cb(err);
        if (!doc) return cb(new Error("password or email not correct"));
        const same = bcrypt.compareSync(password, doc.password);
        if (same) cb(false, doc);
        else cb(new Error("password or email not correct"));
      });
  },
  deserializeUser: function(id, cb) {
    this.findById(id)
      .lean()
      .exec((err, user) => {
        if (err) {
          return cb(err);
        }
        cb(null, user);
      });
  },
  getAllUsers: function() {
    return this.find({})
      .select("name surname email")
      .lean()
      .exec();
  },
  getUserById: function(id) {
    return this.findById(id)
      .lean()
      .exec();
  }
};

UserSchema.pre("save", function(next) {
  if (this.isNew || this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  next();
});

module.exports = mongoose.model("UserModel", UserSchema);
