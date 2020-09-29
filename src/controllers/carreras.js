import Carreras from "../models/Carreras";
import { Controller } from "./Conttroller";
import Carreras from "../models/Carreras";

class carrera extends Controller {
  constructor({}) {
    super(res, req, Carreras);
  }
}

export default Carreras;
