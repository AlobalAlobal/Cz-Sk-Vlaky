const trains = [
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Elektrická lokomotíva používaná na posunovanie a ľahkú traťovú službu, často sú používané ako staničné zálohy',
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
    description: 'Najrýchlejšie a najsilnejšie lokomotíva v ČSR, prevažne používaná na ťahanie Expresov, Rýchlikov a REX',
	  nickname: '350 - Gorila/Škodovácké zlato',
    image: 'Obrázky/Elektrika/350.jpg',
    link: 'Stranky-Vlaky/350.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 7',
    description: 'Prestavba starej rady 162 od ktorej sa delia vyššou maximálnou rýchlosťou, používané sú hlavne v osobnej doprave',
	  nickname: '361 - Morozmrd, Turbozmrd',
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
    name: 'Elektrická lokomotíva 10',
    description: 'Povodné lokomotívy pochádzajú z Belgicka, v počte 9 kusov boli rekonštruované na použitie v nákladnej doprave',
	  nickname: '365 - Belgičanka',
    image: 'Obrázky/Elektrika/365.jpg',
    link: 'Stranky-Vlaky/365.html'
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
	  nickname: '383 - Vectron, Vetroň, Vetrák',
    image: 'Obrázky/Elektrika/383.jpg',
    link: 'Stranky-Vlaky/383.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 13',
    description: 'Trojdielne súpravy používané v prímestskej doprave, postavené Škodou-Vagónkou a vyvážané aj do zahraničia',
  	nickname: '671 - Jánošík, Ešus, Hliník',
    image: 'Obrázky/Elektrika/671.jpg',
    link: 'Stranky-Vlaky/671.html'
  },
  //Pokračovanie - Elektrika

  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'V depách boli lokomotívy výtanou náhradou rád 700-703,',
  	nickname: '704 - (Veľký) Hektor/Šroťák',
    image: 'Obrázky/Diesel/704.jpg',
    link: 'Stranky-Vlaky/704.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Lokomotívy sú predurčené hlavne na posun a ľahšiu traťovú službu, vyrábané v ČKD podľa vzoru sovietskych ČME2',
  	nickname: '721 - (Veľký) Hektor/Šroťák',
    image: 'Obrázky/Diesel/721.jpg',
    link: 'Stranky-Vlaky/721.html'
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
    name: 'Dieselová Lokomotíva 10',
    description: 'Jedna z najúspešnejších lokomotív od ČKD, dnes je už veľa prestavaných na radu 749 bez parného generátora',
  	nickname: '751 - 	Zamračená/ Bardotka',
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
    name: 'Dieselová Lokomotíva 7',
    description: 'Najrozšírenejší ľahký motorizovaný osobný vagón používaný na lokálnych tratiach, celkovo vyrobených skoro 700 kusov',
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
    name: 'Dieselová Lokomotíva 9',
    description: 'Základ vychádza z Nemeckých jednotiek, určené na ľahkú osobnú službu,na rovnakom koncepte sú postavené aj tatranské električky',
	  nickname: '840 - Delfín',
    image: 'Obrázky/Diesel/840.jpg',
    link: 'Stranky-Vlaky/840.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: '',
	  nickname: '850 - Krokodýl, Ponorka, Hydra',
    image: 'Obrázky/Diesel/850.jpg',
    link: 'Stranky-Vlaky/850.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Motorové jednotky objednané firmou ZSSK vyrábané v dvoch variantoch, slúžia ako náhrada starších motorákov ',
	  nickname: '861 - Dunihlav, Húsenica',
    image: 'Obrázky/Diesel/861.jpg',
    link: 'Stranky-Vlaky/861.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Založené na 810, najpočetnejšie vozidlá používané na údržbu trakčného vedenia, aj napriek pantografu majú naftový motor',
	  nickname: '892 - Mandelinka, Drotár',
    image: 'Obrázky/Diesel/892.jpg',
    link: 'Stranky-Vlaky/892.html'
  },
  //Pokračovanie - Diesel

  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: 'Vlak 1',
	  nickname: '555.3 - Mazutka',
    image: 'Obrázky/555.3008.jpg',
    link: 'Stranky-Vlaky/Para-1.html'
  },
  //Pokračovanie - Para
];

function generateTrainThumbnails(trains, containerId) {
  const container = document.getElementById(containerId);

  trains.forEach(train => {
    if (train.type === containerId.replace('-train-container', '')) {
      const thumbnail = document.createElement('div');
      thumbnail.className = 'train-thumbnail';

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

generateTrainThumbnails(trains, 'electric-train-container');
generateTrainThumbnails(trains, 'diesel-train-container');
generateTrainThumbnails(trains, 'steam-train-container');