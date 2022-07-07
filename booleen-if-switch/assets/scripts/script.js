//Les booléens
/*
C'est une variable qui ne peut avoir que 2 états :
-vrai (true)
- faux (false)
Les tests et comparaisons renvoient des valeurs booléenes

- Operateur de comparaison
****************************
- Test d'égalité
*/
// const nb1 = 42;
// const nb2 = 24;
// const nb3 = 18;

test1 = true;
test2 = true;
test3 = false;
test4 = true;
test5 = true;
test6 = true;
test7 = false;
test8 = false;
test9 = true;
test10 = false;

/*1) */

const userAnswer = document.getElementById("userAnswer");

const btn = document.getElementById("btn");
const resultat = document.getElementById("result");

btn.addEventListener("click", () => {
  userAnswerValue = parseFloat(userAnswer.value);
  if (isNaN(userAnswerValue) || userAnswerValue < 0 || userAnswerValue > 50) {
    //   resultat.style.color = 'red';
    resultat.classList.add("resultat");
    resultat.innerHTML = "Veuillez entrer une valeur correcte!";
  } else if (userAnswerValue === 0) {
    resultat.innerHTML = `Reservoir vide !`;
  } else if (userAnswerValue <= 10) {
    resultat.innerHTML = `Reservoir presque vide !`;
  } else if (userAnswerValue < 50) {
    resultat.innerHTML = `Reservoir niveau normal !`;
  } else {
    resultat.innerHTML = `Reservoir plein !`; // === 50
  }
});

const biss = document.getElementById("biss");

const btn2 = document.getElementById("btn2");
const resultat2 = document.getElementById("result2");

btn2.addEventListener("click", () => {
  bissValue = parseInt(biss.value);
  let verbe;

  if ((bissValue % 4 === 0 && bissValue % 100 !== 0) || bissValue % 400 === 0) {
    verbe = "est";
  } else {
    verbe = "n'est pas";
  }
  // Ternaire -> condition ? valeur_si_vrai : valeur_si_faux
  // const verbe2 =
  //   (bissValue % 4 === 0 && bissValue % 100 !== 0) || bissValue % 400 === 0 ? "est" : "n'est pas";

  resultat2.innerHTML = `L'année ${bissValue} ${verbe} bissextile !`;
});

// 3) "Obtenir l'etat (liquide/solide/gazeux) d'un liquide en fonction de la temperature"
// La page Web qui permet à l'utilisateur d'encoder une temperature
// En fonction de la temperature, la page web indique l'etat de l'eau.
// À pression atmosphérique normale, l'eau pure, distillée, est solide (glace) pour une température inférieure à 0 °C , liquide pour une température comprise entre 0 °C et 100 °C , et à l'état gazeux (vapeur d'eau) pour des températures supérieures.

const usernb = document.getElementById("usernb");
const btnEtat = document.getElementById("btnEtat");
const resultEtat = document.getElementById("resultEtat");

btnEtat.addEventListener("click", () => {
  const usernbValue = parseFloat(usernb.value);
  if (usernbValue < 0) {
    resultEtat.innerHTML =
      "À pression atmosphérique normale, l'eau pure, distillée, est solide (glace) pour une température inférieure à 0 °C";
  } else if (usernbValue >= 0 && usernbValue <= 100) {
    resultEtat.innerHTML =
      "L'eau est liquide pour une température comprise entre 0 °C et 100 °C , et à l'état gazeux (vapeur d'eau) pour des températures supérieures";
  } else {
    resultEtat.innerHTML =
      "Etat gazeux (vapeur d'eau) pour des températures supérieures à 100 °C.";
  }
});

// 4) "Générateur de note"
// Créer un site Web qui permet à l'utilisateur d'encoder un résultat de 0 à 20
// pour obtenir le grade correspondant :
//  • 20    : Excellent
//  • 17-19 : Très Bien
//  • 13-16 : Bien
//  • 10-12 : Suffisant
//  • 8-9   : Insufisant
//  • 0-7   : Echec

// BONUS - Gérer les nombres à virgule
// Exemple :
//   • 12.2 -> Suffisant
//   • 19.9 -> Très Bien

const userNote = document.getElementById("userNote");
const btnNote = document.getElementById("btnNote");
const resultNote = document.getElementById("resultNote");

btnNote.addEventListener("click", () => {
  const userNoteValue = parseFloat(userNote.value);
  if (userNoteValue < 0 || userNoteValue > 20) {
    resultNote.innerHTML = "Veuillez indiquer une note entre 0 et 20";
  } else if (userNoteValue < 8) {
    resultNote.innerHTML = "Echec";
  } else if (userNoteValue < 10) {
    resultNote.innerHTML = "Insuffisant";
  } else if (userNoteValue < 13) {
    resultNote.innerHTML = "Suffisant";
  } else if (userNoteValue < 17) {
    resultNote.innerHTML = "Bien";
  } else if (userNoteValue < 20) {
    resultNote.innerHTML = "Très bien";
  } else {
    resultNote.innerHTML = "Excellent";
  }
});

//Exercice 5 : Realisation d'une calculatrice

const nb1 = document.getElementById("nb1");
const nb2 = document.getElementById("nb2");

const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const soustraction = document.getElementById("soustraction");
const addition = document.getElementById("addition");

const btn3 = document.getElementById("btn3");
const result3 = document.getElementById("result3");
const operateur = document.getElementById("operateur");

btn3.addEventListener("click", () => {
  const nb1Value = parseFloat(nb1.value);
  const nb2Value = parseFloat(nb2.value);
  const operateurValue = operateur.value;

  switch (operateurValue) {
    case "+":
      const resultataddition = nb1Value + nb2Value;
      result3.innerHTML = `${nb1Value} + ${nb2Value} = ${resultataddition}`;
      break;

    case "/":
      const resulatdivision = nb1Value / nb2Value;

      if (nb2Value === 0) {
        result3.innerHTML = "ne peut être divisé par 0";
      } else {
        result3.innerHTML = `${nb1Value} / ${nb2Value} = ${resulatdivision}`;
      }
      break;

    case "-":
      const resultatsoustraction = nb1Value - nb2Value;
      result3.innerHTML = `${nb1Value} - ${nb2Value} = ${resultatsoustraction}`;
      break;

    case "*":
      const resultatmultiplication = nb1Value * nb2Value;
      result3.innerHTML = `${nb1Value} * ${nb2Value} = ${resultatmultiplication}`;
      break;

    case "pow":
      const resultatpow = Math.pow(nb1Value, nb2Value);
      result3.innerHTML = `${nb1Value} ^ ${nb2Value} = ${resultatpow}`;
      break;

    default:
      result3.innerHTML =
        "Veuillez introduire deux nombres et choisir un opérateur";
      break;
  }
});
