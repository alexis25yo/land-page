import { features, company, menu, menu2, featuresRe, menuR, companyRe, menuR2, ButtonMenu, fullMenu} from "./services/dataDom";
import "../styles/styles.scss";

features.addEventListener("click", () => {
  menu.classList.toggle("show");
});

company.addEventListener("click", () => {
  menu2.classList.toggle("show");
});

featuresRe.addEventListener("click", () => {
  menuR.classList.toggle("showRe");
});

companyRe.addEventListener("click", () => {
  menuR2.classList.toggle("showRe");
});

ButtonMenu.addEventListener("click", () => {
  fullMenu.classList.toggle("showRe");
});

//prueba de ramas