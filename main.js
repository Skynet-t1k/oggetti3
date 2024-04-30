// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi

// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:

// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling
// , e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:

// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )

// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui

// determinare il vincitore

let bowling = {
    giocatori : [
        {nome : 'Skynet', punteggio : 0},
        {nome : 'Osiride', punteggio : 0},
        {nome : 'Kreya', punteggio : 0},
        {nome : 'Alex', punteggio : 0},
        {nome : 'Hades', punteggio : 0},
        {nome : 'Wolfgang', punteggio : 0},
    ],

    creaPunteggioAll: function() {
        this.giocatori.forEach(giocatore => {
          let totalScore = 0;
          for (let i = 1; i <= 10; i++) {
             totalScore += Math.floor(Math.random() * 10 + 1);
          }
          giocatore.punteggio = totalScore;
        });
      },
    
      aggiungiGiocatore: function(nome) {
        this.giocatori.push({ nome: nome, punteggio: 0 });
        this.creaPunteggioNew(this.giocatori[this.giocatori.length - 1]);
      },
    
      creaPunteggioNew: function(giocatore) {
        let totalScore = 0;
        for (let i = 1; i <= 10; i++) {
          totalScore += Math.floor(Math.random() * 10 + 1);
        }
        giocatore.punteggio = totalScore;
      },
    
      trovaVincitore: function() {
        let vincitore = this.giocatori.sort((a, b) => b.punteggio - a.punteggio)[0];
        console.log(vincitore);
      }
    };
    

bowling.creaPunteggioAll();
bowling.aggiungiGiocatore("Godzilla");
bowling.trovaVincitore();
console.log(bowling.giocatori);
