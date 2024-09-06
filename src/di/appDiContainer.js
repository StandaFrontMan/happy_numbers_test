// diSetup.js
import container from "./diContainer";
import { MathExampRepositoryImpl } from "../modules/math_examp/domain/MathExampRepositoryImpl";

// Создаем экземпляр и регистрируем в контейнере
const mathExampRepo = new MathExampRepositoryImpl();
container.register("MathExampRepository", mathExampRepo);
