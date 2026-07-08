const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;// API yetu itakimbia kwenye port 3000

// Ruhusu frontend yoyote isomane na hii server
app.use(cors());

// Ruhusu mawasiliano
app.use(express.json());

// Data zetu za ushauri wa Kiswahili (Hii ndio Database yetu ndogo)
const ushauriData = [
   // ==================== PROGRAMMING ====================
{ id: 1, category: "Programming", ushauri: "Jifunze kodi kila siku, hata kwa dakika 30." },
{ id: 2, category: "Programming", ushauri: "Soma errors kabla ya kutafuta suluhisho mtandaoni." },
{ id: 3, category: "Programming", ushauri: "Usikariri syntax pekee, elewa mantiki ya programu." },
{ id: 4, category: "Programming", ushauri: "Andika code safi na yenye mpangilio mzuri." },
{ id: 5, category: "Programming", ushauri: "Fanya mazoezi ya projects halisi ili kukuza ujuzi." },
{ id: 6, category: "Programming", ushauri: "Soma documentation kabla ya kutumia library mpya." },
{ id: 7, category: "Programming", ushauri: "Debugging ni sehemu ya kujifunza, usiikimbie." },
{ id: 8, category: "Programming", ushauri: "Tumia Git kuhifadhi na kufuatilia mabadiliko ya code." },
{ id: 9, category: "Programming", ushauri: "Usiogope kurekebisha code uliyoandika jana." },
{ id: 10, category: "Programming", ushauri: "Jifunze algorithm kabla ya kuandika code." },
{ id: 11, category: "Programming", ushauri: "Linda API Keys zako, usiziweke wazi kwenye GitHub." },
{ id: 12, category: "Programming", ushauri: "Tumia majina ya variables yanayoeleweka." },
{ id: 13, category: "Programming", ushauri: "Pima programu yako kabla ya kuitoa kwa watumiaji." },
{ id: 14, category: "Programming", ushauri: "Kila bug ni nafasi ya kuongeza uelewa." },
{ id: 15, category: "Programming", ushauri: "Jifunze database pamoja na programming." },
{ id: 16, category: "Programming", ushauri: "Usiache kujifunza teknolojia mpya." },
{ id: 17, category: "Programming", ushauri: "Andika comments pale zinapohitajika." },
{ id: 18, category: "Programming", ushauri: "Backup ya project ni muhimu kuliko kuanza upya." },
{ id: 19, category: "Programming", ushauri: "Programu bora hujengwa kwa uvumilivu." },
{ id: 20, category: "Programming", ushauri: "Usiogope kuuliza maswali unapokwama." },
// ==================== ELIMU ====================
{ id: 21, category: "Elimu", ushauri: "Maarifa ni uwekezaji ambao haupotezi thamani." },
{ id: 22, category: "Elimu", ushauri: "Soma angalau dakika 30 kila siku." },
{ id: 23, category: "Elimu", ushauri: "Usisome kwa ajili ya mtihani pekee, soma kwa ajili ya maisha." },
{ id: 24, category: "Elimu", ushauri: "Uliza maswali unaposhindwa kuelewa." },
{ id: 25, category: "Elimu", ushauri: "Rudia ulichojifunza ili usikisahau." },
{ id: 26, category: "Elimu", ushauri: "Panga ratiba ya kujisomea na uifuate." },
{ id: 27, category: "Elimu", ushauri: "Vitabu ni marafiki wanaokufundisha bila kuchoka." },
{ id: 28, category: "Elimu", ushauri: "Jifunze kwa vitendo badala ya kukariri pekee." },
{ id: 29, category: "Elimu", ushauri: "Kila siku ongeza maarifa mapya hata kama ni jambo dogo." },
{ id: 30, category: "Elimu", ushauri: "Usione aibu kujifunza kutoka kwa wengine." },
{ id: 31, category: "Elimu", ushauri: "Andika malengo ya kujifunza na uyafuatilie." },
{ id: 32, category: "Elimu", ushauri: "Kusoma kwa utulivu huongeza uelewa." },
{ id: 33, category: "Elimu", ushauri: "Jifunze kutumia muda wako kwa busara." },
{ id: 34, category: "Elimu", ushauri: "Maarifa huongezeka unapoyashirikisha na wengine." },
{ id: 35, category: "Elimu", ushauri: "Usikate tamaa kwa sababu ya alama ndogo." },
{ id: 36, category: "Elimu", ushauri: "Sikiliza kwa makini kabla ya kutoa hoja." },
{ id: 37, category: "Elimu", ushauri: "Jenga tabia ya kusoma kila siku." },
{ id: 38, category: "Elimu", ushauri: "Kila mwalimu ana kitu cha kukufundisha." },
{ id: 39, category: "Elimu", ushauri: "Tumia teknolojia kuongeza maarifa, si kupoteza muda." },
{ id: 40, category: "Elimu", ushauri: "Elimu ni ufunguo wa fursa nyingi maishani." },
// ==================== MOTIVATION ====================
{ id: 41, category: "Motivation", ushauri: "Mafanikio huanza pale unapochukua hatua ya kwanza." },
{ id: 42, category: "Motivation", ushauri: "Usikate tamaa kwa sababu ya kushindwa mara moja." },
{ id: 43, category: "Motivation", ushauri: "Kila changamoto ni nafasi ya kukua." },
{ id: 44, category: "Motivation", ushauri: "Anza na ulicho nacho, ulipo." },
{ id: 45, category: "Motivation", ushauri: "Subira ni daraja la mafanikio makubwa." },
{ id: 46, category: "Motivation", ushauri: "Jiamini hata kama wengine hawakuamini." },
{ id: 47, category: "Motivation", ushauri: "Ndoto kubwa zinahitaji juhudi kubwa." },
{ id: 48, category: "Motivation", ushauri: "Usiache kujaribu mpaka upate matokeo." },
{ id: 49, category: "Motivation", ushauri: "Kila siku ni nafasi mpya ya kuanza tena." },
{ id: 50, category: "Motivation", ushauri: "Ushindi wa kweli ni kutokukata tamaa." },
{ id: 51, category: "Motivation", ushauri: "Usikubali hofu ikuondoe kwenye ndoto zako." },
{ id: 52, category: "Motivation", ushauri: "Jenga nidhamu, usitegemee motisha pekee." },
{ id: 53, category: "Motivation", ushauri: "Hatua ndogo zinazochukuliwa kila siku huleta mafanikio makubwa." },
{ id: 54, category: "Motivation", ushauri: "Usijilinganishe na wengine, linganisha na jana yako." },
{ id: 55, category: "Motivation", ushauri: "Mafanikio ni safari, si mwisho wa safari." },
{ id: 56, category: "Motivation", ushauri: "Jifunze kutokana na makosa badala ya kuyahofia." },
{ id: 57, category: "Motivation", ushauri: "Amini uwezo wako hata kama safari ni ngumu." },
{ id: 58, category: "Motivation", ushauri: "Kushindwa leo hakumaanishi utashindwa milele." },
{ id: 59, category: "Motivation", ushauri: "Mafanikio huwapenda watu wanaoendelea mbele." },
{ id: 60, category: "Motivation", ushauri: "Leo ndiyo siku bora ya kuanza kutimiza ndoto zako." },
// ==================== MAISHA ====================
{ id: 61, category: "Maisha", ushauri: "Maisha ni safari; furahia kila hatua unayopiga." },
{ id: 62, category: "Maisha", ushauri: "Usiishi maisha ya kulinganisha, kila mtu ana safari yake." },
{ id: 63, category: "Maisha", ushauri: "Heshima hujengwa kwa matendo, si kwa maneno." },
{ id: 64, category: "Maisha", ushauri: "Jifunze kusamehe ili moyo wako upate amani." },
{ id: 65, category: "Maisha", ushauri: "Usiruhusu hasira iamue maamuzi yako." },
{ id: 66, category: "Maisha", ushauri: "Muda ukipotea haurudi tena, utumie kwa busara." },
{ id: 67, category: "Maisha", ushauri: "Shukuru kwa kidogo ulicho nacho huku ukipambana kupata zaidi." },
{ id: 68, category: "Maisha", ushauri: "Afya njema ni utajiri usionunulika kwa pesa." },
{ id: 69, category: "Maisha", ushauri: "Jifunze kusema hapana kwa mambo yasiyoongeza thamani maishani." },
{ id: 70, category: "Maisha", ushauri: "Kuwa mwaminifu hata pale ambapo hakuna anayekuona." },
{ id: 71, category: "Maisha", ushauri: "Makosa ni sehemu ya maisha, muhimu ni kujifunza kutoka kwake." },
{ id: 72, category: "Maisha", ushauri: "Usikimbilie kuwahukumu wengine kabla ya kuelewa hali zao." },
{ id: 73, category: "Maisha", ushauri: "Jenga tabia nzuri leo, ndiyo itakayounda maisha yako kesho." },
{ id: 74, category: "Maisha", ushauri: "Amani ya ndani ni muhimu kuliko sifa za watu." },
{ id: 75, category: "Maisha", ushauri: "Usikubali maneno ya watu yaamue thamani yako." },
{ id: 76, category: "Maisha", ushauri: "Chagua marafiki wanaokujenga badala ya kukuvunja." },
{ id: 77, category: "Maisha", ushauri: "Kuwa na shukrani kila siku, hata kwa mambo madogo." },
{ id: 78, category: "Maisha", ushauri: "Usikate tamaa kwa sababu mambo hayaendi kama ulivyopanga." },
{ id: 79, category: "Maisha", ushauri: "Furaha ya kweli hutokana na moyo wenye amani." },
{ id: 80, category: "Maisha", ushauri: "Ishi maisha yenye kusudi, si ya kufuata mkumbo." },
// ==================== FEDHA ====================
{ id: 81, category: "Fedha", ushauri: "Akiba ya leo inaweza kuwa suluhisho la kesho." },
{ id: 82, category: "Fedha", ushauri: "Usitumie pesa zote unazopata; tenga sehemu ya kuokoa." },
{ id: 83, category: "Fedha", ushauri: "Panga bajeti yako kabla ya kutumia fedha." },
{ id: 84, category: "Fedha", ushauri: "Nunua unachohitaji kwanza, si unachotamani." },
{ id: 85, category: "Fedha", ushauri: "Uwekezaji wa maarifa huzaa faida maisha yote." },
{ id: 86, category: "Fedha", ushauri: "Epuka madeni yasiyo ya lazima." },
{ id: 87, category: "Fedha", ushauri: "Kila shilingi ina thamani, itumie kwa busara." },
{ id: 88, category: "Fedha", ushauri: "Jifunze chanzo cha mapato kabla ya kutafuta matumizi." },
{ id: 89, category: "Fedha", ushauri: "Usifanye maamuzi ya kifedha ukiwa na hasira au furaha kupita kiasi." },
{ id: 90, category: "Fedha", ushauri: "Wekeza kwenye ujuzi unaoweza kukuongezea kipato." },
{ id: 91, category: "Fedha", ushauri: "Usiishi kwa kutegemea mshahara pekee; tafuta vyanzo vingine vya mapato." },
{ id: 92, category: "Fedha", ushauri: "Andika matumizi yako ili ujue fedha zinaenda wapi." },
{ id: 93, category: "Fedha", ushauri: "Subira ni muhimu katika kujenga utajiri." },
{ id: 94, category: "Fedha", ushauri: "Epuka kununua vitu kwa ajili ya kuwafurahisha watu." },
{ id: 95, category: "Fedha", ushauri: "Anza kuwekeza mapema hata kama ni kiasi kidogo." },
{ id: 96, category: "Fedha", ushauri: "Punguza matumizi yasiyo na faida kwa maisha yako." },
{ id: 97, category: "Fedha", ushauri: "Fedha ni mtumwa mzuri lakini bwana mbaya." },
{ id: 98, category: "Fedha", ushauri: "Usiogope kuanzisha biashara ndogo kama una mpango mzuri." },
{ id: 99, category: "Fedha", ushauri: "Lipa madeni yako kwa wakati ili ujenge uaminifu." },
{ id: 100, category: "Fedha", ushauri: "Uhuru wa kifedha huanza na nidhamu ya matumizi." },
// ==================== MAHUSIANO ====================
{ id: 101, category: "Mahusiano", ushauri: "Uaminifu ni msingi wa kila uhusiano wa kudumu." },
{ id: 102, category: "Mahusiano", ushauri: "Jifunze kusikiliza kabla ya kujibu." },
{ id: 103, category: "Mahusiano", ushauri: "Heshima hujenga mahusiano yenye afya." },
{ id: 104, category: "Mahusiano", ushauri: "Mawasiliano mazuri hutatua migogoro mingi." },
{ id: 105, category: "Mahusiano", ushauri: "Usifanye maamuzi ukiwa na hasira." },
{ id: 106, category: "Mahusiano", ushauri: "Samehe pale inapowezekana, lakini usisahau kujifunza." },
{ id: 107, category: "Mahusiano", ushauri: "Chagua marafiki wanaokuchochea kuwa bora zaidi." },
{ id: 108, category: "Mahusiano", ushauri: "Usivunje imani ya mtu kwa faida ya muda mfupi." },
{ id: 109, category: "Mahusiano", ushauri: "Muda unaoutoa kwa watu unaonyesha thamani yao kwako." },
{ id: 110, category: "Mahusiano", ushauri: "Kubali tofauti za wengine bila kupoteza maadili yako." },
{ id: 111, category: "Mahusiano", ushauri: "Marafiki wa kweli hubaki hata nyakati ngumu." },
{ id: 112, category: "Mahusiano", ushauri: "Maneno mazuri yanaweza kuponya moyo uliovunjika." },
{ id: 113, category: "Mahusiano", ushauri: "Epuka kutoa ahadi usizoweza kutimiza." },
{ id: 114, category: "Mahusiano", ushauri: "Kila uhusiano unahitaji uvumilivu na kuelewana." },
{ id: 115, category: "Mahusiano", ushauri: "Usiruhusu kiburi kiharibu uhusiano muhimu." },
{ id: 116, category: "Mahusiano", ushauri: "Jifunze kuomba msamaha unapokosea." },
{ id: 117, category: "Mahusiano", ushauri: "Toa pongezi kwa wengine bila wivu." },
{ id: 118, category: "Mahusiano", ushauri: "Watu wanaweza kusahau ulichosema, lakini si jinsi ulivyowafanya wajisikie." },
{ id: 119, category: "Mahusiano", ushauri: "Moyo wa shukrani huimarisha mahusiano." },
{ id: 120, category: "Mahusiano", ushauri: "Jenga mahusiano yanayokuletea amani, si msongo wa mawazo." }
];

// Tengeneza "Endpoint" (Anuani) ya API yetu
// ... (hapa juu kuna express, cors, na ile ushauriData mpya)

// 1. Endpoint ya sasa (Ushauri wa jumla - Random yoyote)
app.get('/api/ushauri', (req, res) => {
    // Chagua ushauri mmoja kwa random
    const randomIndex = Math.floor(Math.random() * ushauriData.length);
    const ushauriWaNasibu = ushauriData[randomIndex];
    
    // Rudisha jibu kwa mfumo wa JSON
    res.json(ushauriWaNasibu);
});

// 2. Endpoint MPYA (Ushauri wa kikundi maalum) - IWEKE HAPA
app.get('/api/ushauri/:category', (req, res) => {
    const category = req.params.category;

    const filtered = ushauriData.filter(
        item => item.category.toLowerCase() === category.toLowerCase()
    );

    if (filtered.length === 0) {
        return res.status(404).json({
            message: "Category haijapatikana"
        });
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    res.json(filtered[randomIndex]);
});


// Washa Server
app.listen(PORT, () => {
    console.log(`Server yako inafanya kazi kwenye http://localhost:${PORT}`);
});
