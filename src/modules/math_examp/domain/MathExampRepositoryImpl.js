import $ from "jquery";
import { MathExampRepository } from "./MathExampRepository";

// Класс реализует логику создания примеров умножения
export class MathExampRepositoryImpl extends MathExampRepository {
  createMathExamp() {
    console.log("work!");
  }
}
