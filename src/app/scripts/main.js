import { features, company, menu, menu2} from "./services/dataDom";
import "../styles/styles.scss";

features.addEventListener("click", () => {
  menu.classList.toggle("show");
  console.log("Hice click en features");
});

company.addEventListener("click", () => {
  menu2.classList.toggle("show");
  console.log("Hice click en company");
});