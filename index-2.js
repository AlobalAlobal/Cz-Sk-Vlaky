const trains = [
  {
    type: 'electric',
    name: 'Lokomotíva 131 ',
    description: 'Dvojdielna lokomotíva určená na ťažkú nákladnú dopravu na náročných tratiach, vyrábaná spoločnosťou Škoda Plzeň',
	  nickname: '131 - Dvojča/Dvojička',
    image: 'Obrázky/Elektrika/131.jpg',
    link: 'Stranky-Vlaky/131.html',
    inDevelopment: true
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Univerzálne lokomotívy určené na zmiešanú traťovú službu, jedná sa o prvé elektrické československé lokomotívy vyrobené po vojne',
	  nickname: '140 - Bobina/Bobinka',
    image: 'Obrázky/Elektrika/140.jpg',
    link: 'Stranky-Vlaky/140.html',
    inDevelopment: true
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Elektrické lokomotívy určené na ťažkú nákladnú službu, táto rada výchádza z rady 182 oproti ktorej sa líšia len drobnými zmenami',
	  nickname: '183 - Rakaňa/Šestikolo',
    image: 'Obrázky/Elektrika/183.jpg',
    link: 'Stranky-Vlaky/183.html',
    inDevelopment: true
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Elektrické lokomotívy používané na posunovanie a ľahkú traťovú službu, často sú používané ako staničné zálohy',
	  nickname: '210 - Žehlička/Jazvec',
    image: 'Obrázky/Elektrika/210.jpg',
    link: 'Stranky-Vlaky/210.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 2',
    description: 'Laminátky sú univerzálne elektrické lokomotívy, dnes sa ale prevažne používajú v nákladnej doprave',
	  nickname: '230 - Laminátka/Lamino',
    image: 'Obrázky/Elektrika/230.jpg',
    link: 'Stranky-Vlaky/230.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 3',
    description: 'Prestavba staršej rady, novšie 240 sa používajú aj v osobnej aj v nákladnej doprave, hlavne na hlavných ťahoch',
	  nickname: '240 - Laminátka/Lamino',
    image: 'Obrázky/Elektrika/240.jpg',
    link: 'Stranky-Vlaky/240.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 4',
    description: 'Po technickej stránke sa jedná o pokračovanie rady 240 (nepriamo 230), používané hlavne v osobnej doprave',
	  nickname: '242 - Plecháč/Plechovka',
    image: 'Obrázky/Elektrika/242.jpg',
    link: 'Stranky-Vlaky/242.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 5',
    description: 'Vyvrcholenie rady lokomotív x6x, aj napriek veľkej spoľahlivosti nebolo vyrobených veľa kusov, no väčšina je stále v prevádzke',
	  nickname: '263 - Princezná',
    image: 'Obrázky/Elektrika/263.jpg',
    link: 'Stranky-Vlaky/263.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 6',
    description: 'Najrýchlejšie a najsilnejšie lokomotíva v ČSR, prevažne používaná na ťahanie vlakov vyšších kategórii (R, EX, IC, EC)',
	  nickname: '350 - Gorila/Škodovácké zlato',
    image: 'Obrázky/Elektrika/350.jpg',
    link: 'Stranky-Vlaky/350.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 7',
    description: 'Prestavba starej rady 162 od ktorej sa delia vyššou maximálnou rýchlosťou, používané sú hlavne v osobnej doprave',
	  nickname: '361 - Morozmrd/Turbozmrd',
    image: 'Obrázky/Elektrika/361.jpg',
    link: 'Stranky-Vlaky/361.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 8',
    description: 'Prestavba starej rady 363 od ktorej sa delia vyššou maximálnou rýchlosťou, používaná sú hlavne v osobnej doprave',
	  nickname: '362 - Eso/Rýchle Eso',
    image: 'Obrázky/Elektrika/362.jpg',
    link: 'Stranky-Vlaky/362.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 9',
    description: 'Československé dvojsystémové lokomotívy, kvôli svojej pomalej rýchlosti dnes používané hlavne v nákladnej doprave',
	  nickname: '363 - Eso',
    image: 'Obrázky/Elektrika/363.jpg',
    link: 'Stranky-Vlaky/363.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Lokomotívy určené pre ČD Cargo vznikli rekonštrukciou lokomotív rady 163, určené na nákladnú dopravu aj mimo územia ČR',
	  nickname: '363.5 - Nákladné Eso/Paťkové Eso',
    image: 'Obrázky/Elektrika/363.5.jpg',
    link: 'Stranky-Vlaky/363.5.html',
    inDevelopment: true
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 10',
    description: 'Povodné lokomotívy pochádzajú z Belgicka, v počte 9 kusov boli rekonštruované na použitie v nákladnej doprave',
	  nickname: '365 - Belgičanka',
    image: 'Obrázky/Elektrika/365.jpg',
    link: 'Stranky-Vlaky/365.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Moderné trojsystémové lokomotívy vyrábané pre ČD firmou Škoda Transportation, aj napriek svojej novosti budú čoskoro vyradené',
	  nickname: '380 - Emil Zátopek/Vaňa/Zváračka',
    image: 'Obrázky/Elektrika/380.jpg',
    link: 'Stranky-Vlaky/380.html',
    inDevelopment: true
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 11',
    description: 'V počte 2 kusov modernizované z rady 380 pre Slovensko, používané hlavne v prímestskej doprave okolo Bratislavy',
   	nickname: '381 - Vaňa/Sváračka/Mrazák',
    image: 'Obrázky/Elektrika/381.jpg',
    link: 'Stranky-Vlaky/381.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 12',
    description: 'Modulárne lokomotívy používané naprieč Európou a aj v USA, používané v nákladnej aj v osobnej doprave - Expresy',
	  nickname: '383 - Vectron/Vetroň/Vetrák',
    image: 'Obrázky/Elektrika/383.jpg',
    link: 'Stranky-Vlaky/383.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Viacsystémové lokomotívy 2. TRAXX Generácie, ťažko využívané hlavne firmou Metrans a zopár lokomotív vlastní aj RegioJet',
	  nickname: '386 - TRAXX',
    image: 'Obrázky/Elektrika/386.jpg',
    link: 'Stranky-Vlaky/386.html',
    inDevelopment: true
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 13',
    description: 'Trojdielne súpravy používané v prímestskej doprave, vyvinuté a vyrobené firmou Škodoa Vagónkoa a vyvážané aj do zahraničia',
  	nickname: '671 - Jánošík/Ešus/Hliník',
    image: 'Obrázky/Elektrika/671.jpg',
    link: 'Stranky-Vlaky/671.html'
  },
  //Pokračovanie - Elektrika

  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Malé dvojnápravové lokomotívy používané na vlečách, v depách a na staniciach. Používané aj na presun elektrických lokomotív na úsekoch bez trakčného vedenia',
  	nickname: '700 - Prasiatko, Gemina',
    image: 'Obrázky/Diesel/700.jpg',
    link: 'Stranky-Vlaky/700.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Lokomotívy vychádzajú z rád 700, 701 a 702 avšak oproti nim sí značne zdokonalené, používané v depách, na staniciach a na vlečkových prevádzkach',
  	nickname: '703 - Prasiatko, Gemina',
    image: 'Obrázky/Diesel/703.jpg',
    link: 'Stranky-Vlaky/703.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'V depách lokomotívy slúžily ako rady 700-703, používané sú hlavne na posun, v krajných prípadoch aj na ľahkých nákladných vlakoch',
  	nickname: '704 - Malé Lego, Kadibúda',
    image: 'Obrázky/Diesel/704.jpg',
    link: 'Stranky-Vlaky/704.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Lokomotívy určené pre staničnú službu a na ľahké traťové výkony - v nákladnej doprave. V dnešnej dobe existuje už iba pár prevádzkyschopných strojov',
  	nickname: '710 - Rosnička',
    image: 'Obrázky/Diesel/710.jpg',
    link: 'Stranky-Vlaky/710.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Lokomotívy sú predurčené hlavne na posun a ľahšiu traťovú službu, vyrábané v ČKD a vyvážané aj do SSSR pod ozačením ČME2',
  	nickname: '721 - (Veľký) Hektor/Šroťák',
    image: 'Obrázky/Diesel/721.jpg',
    link: 'Stranky-Vlaky/721.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Motorové lokomotívy určené pre posun a ľahkú traťovú službu, prvé 2 prototypy vyrobené v ČKD, ostatné potom vyrábané v TS Martin',
  	nickname: '725 - Plešatá Karkulka',
    image: 'Obrázky/Diesel/725.jpg',
    link: 'Stranky-Vlaky/725.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Dieselové, 4-nápravové lokomotívy určené hlavne na staničný posun a ľahkú nákladnú traťovú službu, v počte 59 vyrábané v ČKD Praha',
  	nickname: '730 - Ponorka',
    image: 'Obrázky/Diesel/730.jpg',
    link: 'Stranky-Vlaky/730.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Lokomotívy vznikli zdokonalením rady 730 - lepší prístup k agregátom, ergonomickejší design a lepší výhľad z kabíny vlakvedúceho',
  	nickname: '731 - Ponorka, Favorit, Špageta',
    image: 'Obrázky/Diesel/731.jpg',
    link: 'Stranky-Vlaky/731.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 2',
    description: 'Prestavba starých Pilštykov(735), rekonštrukcia obsahovala výmenu karosérie a inštalovanie nového motora',
	  nickname: '736 - Somárik',
    image: 'Obrázky/Diesel/736.jpg',
    link: 'Stranky-Vlaky/736.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 2',
    description: 'Prestavba starých Pilštykov(735), halvný rozdiel od rady 736 je iný prevádzkovateľ(ZSSK) a odstránenie pomocného agregátu',
	  nickname: '736.1 - Somárik',
    image: 'Obrázky/Diesel/736.1.jpg',
    link: 'Stranky-Vlaky/736.1.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 2',
    description: 'Nákladné lokomotívy určené na nákladnú dopravu a ťažšiu traťovú službu, konštrukciou vychádzajú z rady 740',
	  nickname: '742 - Bangladéška/Kocúr/Včela',
    image: 'Obrázky/Diesel/742.jpg',
    link: 'Stranky-Vlaky/742.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 3',
    description: 'V počte 5 kusov prestavané z rady 740 pre Slovnaft ynačnou zenou karosérie, neskôr objednané aj firmou Duslo Šaľa',
	  nickname: '744.7 - N/A',
    image: 'Obrázky/Diesel/744.jpg',
    link: 'Stranky-Vlaky/744.7.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 4',
    description: 'Rekonštrukcia zo staršej rady 740, prestavané v ZOŠ Vrútky, nasadené hlavne v okolí depa Zvolen firmou ZSSK Cargo',
	  nickname: '746 - Mulička',
    image: 'Obrázky/Diesel/746.jpg',
    link: 'Stranky-Vlaky/746.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Lokomotívy vznikli rekonštrukciou rád 751 a 752 nahradením parného generátora za elektrický agregát, v dnešnej dobe ich už je ale málo',
  	nickname: '749 - Zamračená/Bardotka',
    image: 'Obrázky/Diesel/749.jpg',
    link: 'Stranky-Vlaky/.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Rada vznikla rekonštrukciou rady 753 náhradou parného generátora na vyhrievanie osobných súprav za elektrický agregát s rovnakým účelom',
  	nickname: '750 - Okuliarnik',
    image: 'Obrázky/Diesel/750.jpg',
    link: 'Stranky-Vlaky/750.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 10',
    description: 'Jedna z najúspešnejších lokomotív od ČKD, dnes je už veľa prestavaných na radu 749 bez parného generátora',
  	nickname: '751 - 	Zamračená/Bardotka',
    image: 'Obrázky/Diesel/751.jpg',
    link: 'Stranky-Vlaky/751.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 5',
    description: 'Jedna z najpočetnejších a najúspešnejších typov, určené na osobnú aj nákladnú dopravu, dnes už existuje veľa rekonštrukcií',
	  nickname: '753 - Okuliarnik',
    image: 'Obrázky/Diesel/753.jpg',
    link: 'Stranky-Vlaky/753.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 5',
    description: 'Rekonštrukcie staršých rád (750, 752.6, 753) určené na nákladnú dopravu, zhodné stroje na slovensku označované ako rada 736',
	  nickname: '753.7 - Okuliarnik',
    image: 'Obrázky/Diesel/753.7.jpg',
    link: 'Stranky-Vlaky/753.7.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 5',
    description: 'Po úspešnej rade 753 následovalo "osobné" prevedenie, výroba ukončená predčasne kvôli sabotácii dielní',
	  nickname: '754 - Okuliarnik',
    image: 'Obrázky/Diesel/754.jpg',
    link: 'Stranky-Vlaky/754.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 5',
    description: 'Prestavba neekonomických rušňov rady 750 a 753 pre ZSSK Cargo, rozdie je hlavne v efektívnejšom motore (Caterpillar)',
	  nickname: '756 - Okuliarnik',
    image: 'Obrázky/Diesel/756.jpg',
    link: 'Stranky-Vlaky/756.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 5',
    description: 'Lokomotívy boli objednané firmou ZSSK v počte 25 kusov pre použitie na rýchlikoch na neelektrifikovaných tratiach',
	  nickname: '757 - Okuliarnik',
    image: 'Obrázky/Diesel/757.jpg',
    link: 'Stranky-Vlaky/757.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 10',
    description: 'Modulárna dieselová lokomotíva vyrábané firmou Siemens používané naprieč Európou',
	  nickname: '761 - Herkules',
    image: 'Obrázky/Diesel/761.jpg',
    link: 'Stranky-Vlaky/761.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 6',
    description: 'Lokomotívy sú používané na posun a prepravu ťažkých nákladných vlakov, niektoré sú stavané aj na široký rozchod',
	  nickname: '770 - Čmeliak',
    image: 'Obrázky/Diesel/770.jpg',
    link: 'Stranky-Vlaky/770.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Lokomotívy určené hlavne na nákladnú dopravu ale používali sa aj na postrk, často "pomáhali" lokomotívam rady  781',
  	nickname: '775 - Pomaranč/Cé Nula',
    image: 'Obrázky/Diesel/775.jpg',
    link: 'Stranky-Vlaky/775.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Nákladné lokomotívy vyrábane v SSSR a nástupníckych krajinách avšak kvôli elektrifikácii hlavných tratí sa už nepoužívajú',
  	nickname: '781 - Sergej/Bubny Tajgy',
    image: 'Obrázky/Diesel/781.jpg',
    link: 'Stranky-Vlaky/781.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Malé dvojnápravové a dvojzdrojové lokomotívy používaná v areáloch diep, projektované ako náhrada za už zastaralé rady 700-703',
  	nickname: '799 - Adelka/Adéla',
    image: 'Obrázky/Diesel/799.jpg',
    link: 'Stranky-Vlaky/799.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Jedná sa o dvojnápravové motorizované vagóny, pred ich nahradením radou 810 boli najrozšírenejšímou radou v Československu',
  	nickname: '801 - Hrvínek/Kufor/Kredenc',
    image: 'Obrázky/Diesel/801.jpg',
    link: 'Stranky-Vlaky/801.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Bývali najrozšírenejšímy ľahkými motorizovanými vagónmi, dnes už je ale veľa zrekonštruovaných na rady 809, 812, 813, 814, 816 a viac',
  	nickname: '810- Šukafón/Orchestrión/Krabička',
    image: 'Obrázky/Diesel/810.jpg',
    link: 'Stranky-Vlaky/810.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 7',
    description: 'Najrozšírenejší ľahký motorový osobný vagón používaný na lokálnych tratiach, celkovo vyrobených skoro 700 kusov',
	  nickname: '812 - Šukafón/Regiomouse',
    image: 'Obrázky/Diesel/812.jpg',
    link: 'Stranky-Vlaky/812.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 8',
    description: 'Prestavba prívesných vozňov 011 a "motorákov" 810, dve vozidlá spojené zadnými čelami tvoriace jednu jednotku 813',
  	nickname: '813 - Bageta/Bagetka',
    image: 'Obrázky/Diesel/813.jpg',
    link: 'Stranky-Vlaky/813.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Veľkokapacitné motorové vagóny vyrábané v Tatra Vagónkou, zamýšlané ako náhrada v tej dobe už starých Hurvínkou (801)',
  	nickname: '820 - Singrovka/Vzducholoď/Kačka',
    image: 'Obrázky/Diesel/820.jpg',
    link: 'Stranky-Vlaky/820.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Prvé veľké motorové vagóny, v dnešnej dobe sa už bežne nepoužívajú avšak v čase svojej slávy vozili hlavne rýchliky na neelektrizovaných tratiach',
  	nickname: '830 - Kraksňa/Žhavé Trubky/Loď',
    image: 'Obrázky/Diesel/830.jpg',
    link: 'Stranky-Vlaky/830.html',
    inDevelopment: true
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Základ vychádza z Nemeckých jednotiek, určené na ľahkú osobnú službu,na rovnakom koncepte sú postavené aj tatranské električky',
	  nickname: '840 - Delfín',
    image: 'Obrázky/Diesel/840.jpg',
    link: 'Stranky-Vlaky/840.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Jednotky boli používané hlavne na vozbu rýchlikov na hlavných neelektrifikovaných tratiach, v dnešnej dobe sú už ale nepoužívajú',
	  nickname: '850 - Krokodýl/Ponorka/Hydra',
    image: 'Obrázky/Diesel/850.jpg',
    link: 'Stranky-Vlaky/850.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Motorové jednotky objednané firmou ZSSK vyrábané v dvoch variantoch, slúžia ako náhrada starších motorákov ',
	  nickname: '861 - Dunihlav/Húsenica',
    image: 'Obrázky/Diesel/861.jpg',
    link: 'Stranky-Vlaky/861.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Založené na 810, najpočetnejšie vozidlá používané na údržbu trakčného vedenia, aj napriek pantografu majú naftový motor',
	  nickname: '892 - Mandelinka/Drotár',
    image: 'Obrázky/Diesel/892.jpg',
    link: 'Stranky-Vlaky/892.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Založené na designe rady 820, vozidlá sú používané na údržbu trakčného vedenia, aj napriek pantografu majú naftový motor',
  	nickname: '893 - Mandelinka/Drotár/Pantograf',
    image: 'Obrázky/Diesel/893.jpg',
    link: 'Stranky-Vlaky/893.html',
    inDevelopment: true
  },
  //Pokračovanie - Diesel

  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '310.0 - Kafemlejnek/Tristodesiatka',
    image: 'Obrázky/Para/310.0.jpg',
    link: 'Stranky-Vlaky/310.0.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '331.0 - Uhranka',
    image: 'Obrázky/Para/331.0.jpg',
    link: 'Stranky-Vlaky/331.0.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '423.0 - Veľký Býček',
    image: 'Obrázky/Para/423.0.jpg',
    link: 'Stranky-Vlaky/423.0.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '431.0 - Ventilovka',
    image: 'Obrázky/Para/431.0.jpg',
    link: 'Stranky-Vlaky/431.0.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '434.1 - Jednotka/Štvorkolák',
    image: 'Obrázky/Para/434.1.jpg',
    link: 'Stranky-Vlaky/434.1.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '434.2 - Dvojka/Štvorkolák',
    image: 'Obrázky/Para/434.2.jpg',
    link: 'Stranky-Vlaky/434.2.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '475.1 - Šľachtičná/Päťasedma',
    image: 'Obrázky/Para/475.1.jpg',
    link: 'Stranky-Vlaky/475.1.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '477.0 - Papagáj',
    image: 'Obrázky/Para/477.0.jpg',
    link: 'Stranky-Vlaky/477.0.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '486.0 - Zelený Anton',
    image: 'Obrázky/Para/486.0.jpg',
    link: 'Stranky-Vlaky/486.0.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: '',
    nickname: '534.0 - Kremák',
    image: 'Obrázky/Para/534.0.jpg',
    link: 'Stranky-Vlaky/534.0.html',
    inDevelopment: true
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: 'Ríšske lokomotívy získané ako reparácie, 30 kusov bolo ku koncu prevádzky prerobených na spaľovanie mazutu',
    nickname: '555.3 - Mazutka',
    image: 'Obrázky/Para/555.3.jpg',
    link: 'Stranky-Vlaky/555.3.html',
    inDevelopment: true
  },
  //Pokračovanie - Para
];

function generateTrainThumbnails(trains, containerId) {
  const container = document.getElementById(containerId);

  trains.forEach(train => {
    if (train.type === containerId.replace('-train-container', '')) {
      const thumbnail = document.createElement('div');
      thumbnail.className = 'train-thumbnail';

      if (train.inDevelopment) {
        // Apply different styling for trains in development
        thumbnail.classList.add('in-development-thumbnail');
      }

      const image = document.createElement('img');
      image.src = train.image;
      image.alt = train.name;

      const nickname = document.createElement('div');
      nickname.className = 'train-nickname';
      nickname.textContent = train.nickname;

      const description = document.createElement('div');
      description.className = 'train-description';
      description.textContent = train.description;

      thumbnail.appendChild(nickname);
      thumbnail.appendChild(image);
      thumbnail.appendChild(description);

      thumbnail.addEventListener('click', () => {
        window.location.href = train.link;
      });

      container.appendChild(thumbnail);
    }
  });
}

// Generate train thumbnails for different types
generateTrainThumbnails(trains, 'electric-train-container');
generateTrainThumbnails(trains, 'diesel-train-container');
generateTrainThumbnails(trains, 'steam-train-container');