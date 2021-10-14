const franc = require("franc"); //to get languag iso code from input
const langs = require("langs");
const colors = require("colors"); //for cli colors

//tells iso code of language
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
}); //readline is node module thay gets input from terminal

readline.question(`Enter text of any language : `.bgBlack.green, (input) => {
  guessr(input);
  readline.close();
});

function guessr(input) {

    const langIso = franc(`${input}`);
    const lang = langs.where("3", langIso);

    if (lang.name === undefined || langIso === 'und' ) {
      console.log(
        "Oops! Could not find the language .Try giving a bigger/different sample".bgBlack
          .red
      );
      return;
    }

    console.log(`Given text is of '${lang.name}' language`.bgBlack.yellow);
  
}
