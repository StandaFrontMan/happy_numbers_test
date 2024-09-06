import $ from "jquery";
import _ from "underscore";
import "./styles.css";
import { MathExampRepositoryImpl } from "../src/modules/math_examp/domain/MathExampRepositoryImpl";

import "../src/di/appDiContainer";
import container from "../src/di/diContainer";

$(document).ready(function () {
  const mathExampRepo = container.get("MathExampRepository");

  mathExampRepo.createMathExamp();
});
