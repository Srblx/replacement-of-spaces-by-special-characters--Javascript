// fonction qui modifie mes caratères espace - et _
function toCamelCase(str) {
    // Variable de stockage du str créer
        let newStr = "";
        //boucle pour enlever les espaces et caractères speciaux
        for (let i = 0; i < str.length; i++) {
          if (str[i] === " " || str[i] === "-" || str[i] === "_") {
            //Mise en majuscule de la première lettre du mot
            newStr += str[i + 1].toUpperCase()
            i++;
          } else {
            newStr += str[i]
          }
        }
        return newStr
      }
      
      let myStringUpperCase = "le background-colo de user name et de first_name est généré automatiquement"
      console.log(toCamelCase(myStringUpperCase)); 

// fonction qui modifie mes caratères espace - et _
function newStrInCamelCase(string) {
// split() pour séparer la chaîne en utilisant le séparateur -_\s (espace, tiret et soulignement)
// \s = soulignement
let strCamelCase = string.split(/[-_\s]/)
for (i = 1; i < strCamelCase.length; i++){
    // remplace le premier caractère par un majuscule
    // charAt() => renvoi une nouvelle chaine de caractère
    // slice() => renvoi un object tableau contenant un copie superficielle d'une portion du tableau d'origine
    strCamelCase[i] = strCamelCase[i].charAt(0).toUpperCase() + strCamelCase[i].slice(1)
}
// join() => créer et renvoi une nouvelle chaine de caractère en concaténant tous les éléments d'un tableau/object
return strCamelCase.join("")
}
let myStringSplitAndJoin = "il-etait-une fois trois_petit_canard"
console.log(newStrInCamelCase(myStringSplitAndJoin))