const trains = [
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Elektrická lokomotíva používaná na posunovanie a ľahkú traťovú službu, často sú používané ako staničné zálohy',
	  nickname: '210 - Žehlička/Jazvec',
    image: 'Obrázky/Elektrika/210.jpg',
    link: 'Stranky-Vlaky/Elektrika-1.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 2',
    description: 'Laminátky sú univerzálne elektrické lokomotívy, dnes sa ale prevažne používajú v nákladnej doprave',
	  nickname: '230/240 - Laminátka/Lamino',
    image: 'Obrázky/Elektrika/230.jpg',
    link: 'Stranky-Vlaky/Elektrika-2.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 3',
    description: 'Po technickej stránke sa jedná o pokračovanie rady 240 (nepriamo 230), používané hlavne v osobnej doprave',
	  nickname: '242 - Plecháč/Plechovka',
    image: 'Obrázky/Elektrika/242.jpg',
    link: 'Stranky-Vlaky/Elektrika-3.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 4',
    description: 'Vyvrcholenie rady lokomotív x6x, aj napriek veľkej spoľahlivosti bolo vyrobených iba 12 kusov kde všetky patria ČD',
	  nickname: '263 - Princezná',
    image: 'Obrázky/Elektrika/263.jpg',
    link: 'Stranky-Vlaky/Elektrika-4.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 5',
    description: 'Najrýchlejšia a najsilnejšia lokomotíva v ČSR, prevažne používaná na ťahanie Expresov, Rýchlikov a REX',
	  nickname: '350 - Gorila/Škodovácké zlato',
    image: 'Obrázky/Elektrika/350.jpg',
    link: 'Stranky-Vlaky/Elektrika-5.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 6',
    description: 'Prestavba starej rady 363 od ktorej sa delia vyššou maximálnou rýchlosťou, používaná sú hlavne v osobnej doprave',
	  nickname: '362 - Eso/Rýchle Eso',
    image: 'Obrázky/Elektrika/362.jpg',
    link: 'Stranky-Vlaky/Elektrika-6.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 7',
    description: 'Povodné lokomotívy pochádzajú z Belgicka, v počte 9 kusov boli rekonštruované na použitie v nákladnej doprave',
	  nickname: '365 - Belgičanka',
    image: 'Obrázky/Elektrika/365.jpg',
    link: 'Stranky-Vlaky/Elektrika-7.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 8',
    description: 'V počte 2 kusov modernizované z rady 380 pre Slovensko, používané hlavne v prímestskej doprave okolo Bratislavy',
   	nickname: '380/381 - Vaňa/Sváračka/Mrazák',
    image: 'Obrázky/Elektrika/381.jpg',
    link: 'Stranky-Vlaky/Elektrika-8.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 9',
    description: 'Modulárna lokomotíva používaná naprieč Európou a aj v USA, používaná v nákladnej aj v osobnej doprave - Expresy',
	  nickname: '383 - Vectron, Vetroň, Vetrák',
    image: 'Obrázky/Elektrika/383.jpg',
    link: 'Stranky-Vlaky/Elektrika-9.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 10',
    description: 'Trojdielna súprava používaná v prímestskej doprave, postavená Škodou-Vagónkou a vyvážaná aj do zahraničia',
  	nickname: '671 - Jánošík, Ešus, Hliník',
    image: 'Obrázky/Elektrika/671.jpg',
    link: 'Stranky-Vlaky/Elektrika-10.html'
  },
  //Pokračovanie - Elektrika

  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Vlak 8',
	nickname: '721 - (Veľký) Hektor/Šroťák',
    image: 'Obrázky/Diesel/721.jpg',
    link: 'Stranky-Vlaky/Diesel-1.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 2',
    description: 'Vlak 2',
	nickname: '742 - Bangladéška/Kocúr/Včela',
    image: 'Obrázky/Diesel/742.jpg',
    link: 'Stranky-Vlaky/Diesel-2.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 3',
    description: 'Vlak 3',
	nickname: '744 - N/A',
    image: 'Obrázky/Diesel/744.jpg',
    link: 'Stranky-Vlaky/Diesel-3.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 4',
    description: 'Vlak 4',
	nickname: '746 - N/A',
    image: 'Obrázky/Diesel/746.jpg',
    link: 'Stranky-Vlaky/Diesel-4.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 5',
    description: 'Vlak 1',
	nickname: '757 - Okuliarnik',
    image: 'Obrázky/Diesel/757.jpg',
    link: 'Stranky-Vlaky/Diesel-5.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 6',
    description: 'Vlak 5',
	nickname: '770 - Čmeliak',
    image: 'Obrázky/Diesel/770.jpg',
    link: 'Stranky-Vlaky/Diesel-6.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 7',
    description: 'Vlak 6',
	nickname: '812 - Šukafón/Regiomouse',
    image: 'Obrázky/Diesel/812.jpg',
    link: 'Stranky-Vlaky/Diesel-7.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 8',
    description: 'Vlak 7',
	nickname: '813 - Bageta/Bagetka',
    image: 'Obrázky/Diesel/813.jpg',
    link: 'Stranky-Vlaky/Diesel-8.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Vlak 9',
	nickname: '861 - Dunihlav, Húsenica',
    image: 'Obrázky/Diesel/861.jpg',
    link: 'Stranky-Vlaky/Diesel-9.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 10',
    description: 'Vlak 10',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/.jpg',
    link: 'Stranky-Vlaky/Diesel-10.html'
  },
  
  //Pokračovanie - Diesel

  {
    type: 'steam',
    name: 'Parná Lokomotíva 1',
    description: 'Vlak 1.',
	nickname: '555.3 - Mazutka',
    image: 'Obrázky/555.3008.jpg',
    link: 'Stranky-Vlaky/Para-1.html'
  },
  {
    type: 'steam',
    name: 'Parná Lokomotíva 2',
    description: 'Vlak 2',
	nickname: 'Vlak',
    image: 'Obrázky/jpg',
    link: 'Stranky-Vlaky/Para-22.html'
  }
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