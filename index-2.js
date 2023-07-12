const trains = [
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 1',
    description: 'Vlak 1',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/210.jpg',
    link: 'Stranky-Vlaky/Elektrika-1.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 2',
    description: 'Vlak 2',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/230.jpg',
    link: 'Stranky-Vlaky/Elektrika-2.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 10',
    description: 'Vlak 10',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/263.jpg',
    link: 'Stranky-Vlaky/Elektrika-10.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 3',
    description: 'Vlak 3',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/242.jpg',
    link: 'Stranky-Vlaky/Elektrika-3.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 9',
    description: 'Vlak 9',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/350.jpg',
    link: 'Stranky-Vlaky/Elektrika-9.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 4',
    description: 'Vlak 4',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/362.jpg',
    link: 'Stranky-Vlaky/Elektrika-4.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 8',
    description: 'Vlak 8',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/365.jpg',
    link: 'Stranky-Vlaky/Elektrika-8.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 5',
    description: 'Vlak 5',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/381.jpg',
    link: 'Stranky-Vlaky/Elektrika-5.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 6',
    description: 'Vlak 6',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/383.jpg',
    link: 'Stranky-Vlaky/Elektrika-6.html'
  },
  {
    type: 'electric',
    name: 'Elektrická lokomotíva 7',
    description: 'Vlak 7',
	nickname: 'Vlak',
    image: 'Obrázky/Elektrika/671.jpg',
    link: 'Stranky-Vlaky/Elektrika-7.html'
  },
  //Pokračovanie - Elektrika

  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 1',
    description: 'Vlak 1',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/575.jpg',
    link: 'Stranky-Vlaky/Diesel-1.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 2',
    description: 'Vlak 2',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/742.jpg',
    link: 'Stranky-Vlaky/Diesel-2.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 3',
    description: 'Vlak 3',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/744.jpg',
    link: 'Stranky-Vlaky/Diesel-3.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 4',
    description: 'Vlak 4',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/746.jpg',
    link: 'Stranky-Vlaky/Diesel-4.html'
  },{
    type: 'diesel',
    name: 'Dieselová Lokomotíva 5',
    description: 'Vlak 5',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/770.jpg',
    link: 'Stranky-Vlaky/Diesel-5.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 6',
    description: 'Vlak 6',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/812.jpg',
    link: 'Stranky-Vlaky/Diesel-6.html'
  },{
    type: 'diesel',
    name: 'Dieselová Lokomotíva 7',
    description: 'Vlak 7',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/813.jpg',
    link: 'Stranky-Vlaky/Diesel-7.html'
  },
  {
    type: 'diesel',
    name: 'Dieselová Lokomotíva 8',
    description: 'Vlak 8',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/.jpg',
    link: 'Stranky-Vlaky/Diesel-8.html'
  },{
    type: 'diesel',
    name: 'Dieselová Lokomotíva 9',
    description: 'Vlak 9',
	nickname: 'Vlak',
    image: 'Obrázky/Diesel/.jpg',
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
	nickname: 'Vlak',
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