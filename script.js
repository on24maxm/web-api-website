// Grundlegendes Beispiel (Basic Example)

const beispiel_grundlegend = document.getElementById("beispiel_grundlegend");

// Erstelle die Tier Klasse
class Tier {
  // Constructor: Wird aufgerufen wenn ein neues Hund Objekt erstellt wird
  constructor(name) {
    // Erstellt eine Name Eigenschaft für die Klasse Tier, die durch den Konstruktor angegeben muss, wenn ein Hund initialisiert wird
    this.name = name; 
  }

  //Erstellt eine Funktion, die zur Tier Klasse gehört
  sprich() {
    alert(this.name + " macht ein Geräusch."); 
  }
}

// Erstelle ein neues Tier Objekt mit dem Namen Hund
const hund = new Tier("Bello");

beispiel_grundlegend.addEventListener("click", function() {
  // Rufe die Sprich Funktion auf
  hund.sprich();
});

//Vererbung

const beispiel_vererbung = document.getElementById("beispiel_vererbung");

class Hund extends Tier {
  constructor(name, rasse) {
    super(name); // Ruft den Konstruktor von Tier auf
    this.rasse = rasse;
  }

  sprich() {
    alert("Wuff!");
  }

  zeigeRasse() {
    console.log(`Dieser Hund ist ein ${this.rasse}.`);
  }
}

const meinHund = new Hund("Blake", "Golden Retriever");

beispiel_vererbung.addEventListener("click", function() {
  meinHund.sprich();
  meinHund.zeigeRasse();
});
