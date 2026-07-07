const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;// API yetu itakimbia kwenye port 3000

// Ruhusu frontend yoyote isomane na hii server
app.use(cors());

// Data zetu za ushauri wa Kiswahili (Hii ndio Database yetu ndogo)
const ushauriData = [
    { id: 1, ushauri: "Jifunze kodi kila siku, hata kwa nusu saa tu." },
    { id: 2, ushauri: "Uvumilivu na msimamo ndio siri ya mafanikio kwenye teknolojia." },
    { id: 3, ushauri: "Soma makosa (errors) kwenye kodi yako, yanajenga uelewa mkubwa." },
    { id: 4, ushauri: "Usiogope kuanza upya pale unapokwama." }
];

// Tengeneza "Endpoint" (Anuani) ya API yetu
app.get('/api/ushauri', (req, res) => {
    // Chagua ushauri mmoja kwa random
    const randomIndex = Math.floor(Math.random() * ushauriData.length);
    const ushauriWaNasibu = ushauriData[randomIndex];
    
    // Rudisha jibu kwa mfumo wa JSON
    res.json(ushauriWaNasibu);
});

// Washa Server
app.listen(PORT, () => {
    console.log(`Server yako inafanya kazi kwenye http://localhost:${PORT}`);
});
