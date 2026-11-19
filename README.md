# VELA TACTICS – Versione 2.0

Archivio personale di mini-lezioni di vela, pensato per tablet Android.

## 1. Requisiti
- Browser moderno (Chrome consigliato).
- Connessione Internet per aprire i Reel Instagram.
- Per installazione PWA e cache offline: pubblicazione su HTTPS.

## 2. Avvio
Aprire `index.html` in un browser per una prova locale. Alcune funzioni PWA (installazione e service worker) non sono disponibili da URL `content://` o `file://`.

Per testare correttamente la PWA, servire la cartella tramite HTTPS oppure da `localhost`.

## 3. Struttura del progetto
- `index.html`: struttura semantica della pagina e finestre di dialogo.
- `css.css`: presentazione e layout responsive.
- `js/app.js`: punto di ingresso e coordinamento delle azioni.
- `js/categories.js`: catalogo delle categorie.
- `js/storage.js`: lettura e scrittura dell'archivio locale.
- `js/ui.js`: rendering dei componenti e gestione dei pulsanti.
- `js/backup.js`: esportazione e importazione JSON.
- `manifest.webmanifest`: metadati per installazione PWA.
- `service-worker.js`: cache dei file dell'applicazione.
- `icons/icon.svg`, `icons/icon-192.png`, `icons/icon-512.png`: icone dell'app.

## 4. Modello dati
Ogni lezione è un oggetto:
```json
{
  "id": "identificatore-univoco",
  "title": "Partenza: cercare il varco",
  "category": "partenza",
  "url": "https://www.instagram.com/reel/...",
  "notes": "Osservare la posizione rispetto alla linea"
}
```

## 5. Persistenza e backup
I dati sono salvati in `localStorage` con chiave `vela-tactics-lessons-v2`.
Usare periodicamente il pulsante **Backup** per esportare un file JSON. Il backup è importante prima di svuotare i dati del browser o cambiare dispositivo.

## 6. Scelte progettuali
- JavaScript standard con moduli ES: nessun framework.
- Separazione tra dati, interfaccia, catalogo e coordinamento.
- `localStorage` è sufficiente per un archivio personale di 20–30 link e appunti.
- I video non vengono scaricati: l'app conserva il collegamento originale.
- La PWA mette in cache l'interfaccia, non i contenuti Instagram.

## 7. Limiti noti
- L'apertura dell'app Instagram dipende dalle impostazioni Android e dall'app installata.
- Il browser potrebbe aprire il Reel sul web anziché nell'app.
- Il service worker richiede HTTPS (oppure localhost).
- Questa versione non sincronizza dati tra dispositivi.
