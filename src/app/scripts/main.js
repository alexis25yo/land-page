import {
  features,
  company,
  menu,
  menu2,
  featuresRe,
  menuR,
  companyRe,
  menuR2,
  ButtonMenu,
  fullMenu,
  closetMenu,
  velo,
} from "./services/dataDom";
import "../styles/styles.scss";

features.addEventListener("click", () => {
  menu.classList.toggle("show");
});

company.addEventListener("click", () => {
  menu2.classList.toggle("show");
});

featuresRe.addEventListener("click", () => {
  menuR.classList.toggle("showRe2");
});

companyRe.addEventListener("click", () => {
  menuR2.classList.toggle("showRe2");
});

ButtonMenu.addEventListener("click", () => {
  fullMenu.classList.add("showRe");
  velo.classList.add("showVel");
});

closetMenu.addEventListener("click", () => {
  fullMenu.classList.remove("showRe");
  velo.classList.remove("showVel");
});
//prueba de ramas
