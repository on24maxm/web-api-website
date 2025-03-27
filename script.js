//Grundlegendes Beispiel

const beispiel_grundlegend = document.getElementById("beispiel_grundlegend");

class Tier {
  constructor(name) {
    this.name = name;
  }

  sprich() {
    alert(this.name + " macht ein Geräusch.");
  }
}

const hund = new Tier("Bello");

beispiel_grundlegend.addEventListener("click", function() {
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
