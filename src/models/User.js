const { Schema, model } = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a Name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please add a Email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timesTamps: true,
  }
);

//esta funcion me permite encriptar el password accedo a ella y utilico bcryptjs con el metodo .hash
UserSchema.method.encrypPassword = async (password) => {
  //aqui se genera el salt que seria la manera aleatoria de caracteres para encriptar el password
  const salt = await bcryptjs.salt(10);

  //esta funcion me permite encriptar los password, se le pasa como parametro el password y luego un salt
  return await bcryptjs.hash(password, salt);
};

//este metodo me devuelve un true, se encarga de validar si el password ingresado por el usuario conincide con el que esta almacenado 
//en la base de datos, se usa una funcion comun async por que necesita acceder al valor del password que esta guardado con el this.
//bcryptjs.compare es una funcion que me permite realizar la comparacion 
UserSchema.method.matchPassword = async function password() {
  return await bcryptjs.compare(password, this.password);
};

module.exports = model("User", UserSchema);
