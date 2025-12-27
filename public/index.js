

const weatherMap = {
  "Clear": "Maaraw",
  "Rain": "Maulan",
  "Clouds": "Maulap",
  "Thunderstorm": "Bumabagyo"
};

const weatherIcons = {
  "Clear": `
     <div class="relative flex items-center justify-center w-32 h-32">
    <div class="absolute w-5 h-5 bg-yellow-300 rounded-full blur-xl opacity-60 animate-pulse"></div>
    <div class="relative w-10 h-10 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full shadow-inner z-10 border-2 border-yellow-200">
      <div class="absolute top-2 left-3 w-4 h-2 bg-white/30 rounded-full rotate-[-20deg]"></div>
    </div>
    <div class="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_infinite]">
      <div class="absolute w-1.5 h-32 bg-gradient-to-t from-transparent via-yellow-400 to-transparent rounded-full rotate-0"></div>
      <div class="absolute w-1.5 h-32 bg-gradient-to-t from-transparent via-yellow-400 to-transparent rounded-full rotate-45"></div>
      <div class="absolute w-1.5 h-32 bg-gradient-to-t from-transparent via-yellow-400 to-transparent rounded-full rotate-90"></div>
      <div class="absolute w-1.5 h-32 bg-gradient-to-t from-transparent via-yellow-400 to-transparent rounded-full rotate-[135deg]"></div>
      <div class="absolute w-1 h-24 bg-gradient-to-t from-transparent via-orange-300 to-transparent rounded-full rotate-[22.5deg]"></div>
      <div class="absolute w-1 h-24 bg-gradient-to-t from-transparent via-orange-300 to-transparent rounded-full rotate-[67.5deg]"></div>
      <div class="absolute w-1 h-24 bg-gradient-to-t from-transparent via-orange-300 to-transparent rounded-full rotate-[112.5deg]"></div>
      <div class="absolute w-1 h-24 bg-gradient-to-t from-transparent via-orange-300 to-transparent rounded-full rotate-[157.5deg]"></div>
    </div>
    
  </div>
  `,
  "Clouds": `
   <div class="relative w-32 h-32 animate-[bounce_4s_ease-in-out_infinite]">
    <div class="absolute bottom-0 w-full h-12 bg-gray-200 rounded-full shadow-md"></div>
    <div class="absolute bottom-4 left-4 w-14 h-14 bg-gray-100 rounded-full"></div>
    <div class="absolute bottom-6 left-12 w-16 h-16 bg-gray-200 rounded-full"></div>
    <div class="absolute bottom-2 left-6 w-20 h-4 bg-gray-200 rounded-full opacity-50"></div>
    <div class="absolute -top-4 -right-8 w-16 h-8 bg-white/60 rounded-full blur-[1px] animate-[pulse_5s_ease-in-out_infinite]">
        <div class="absolute -top-2 left-3 w-6 h-6 bg-white/60 rounded-full"></div>
    </div>
  </div>
  `,
  "Rain": `
     <div class="relative w-32 h-32">
    <div class="relative z-10 animate-[bounce_5s_ease-in-out_infinite]">
      <div class="absolute top-4 left-2 w-16 h-16 bg-slate-400 rounded-full"></div>
      <div class="absolute top-2 left-10 w-20 h-20 bg-slate-500 rounded-full"></div>
      <div class="absolute top-8 left-4 w-24 h-12 bg-slate-500 rounded-full shadow-lg"></div>
    </div>
    <div class="absolute inset-x-0 bottom-0 flex justify-around px-4">
      <div class="w-1 h-4 bg-blue-400 rounded-full opacity-0 animate-[rain_1.5s_linear_infinite]"></div>
      <div class="w-1 h-4 bg-blue-400 rounded-full opacity-0 animate-[rain_1.2s_linear_infinite_0.4s]"></div>
      <div class="w-1 h-4 bg-blue-400 rounded-full opacity-0 animate-[rain_1.8s_linear_infinite_0.2s]"></div>
      <div class="w-1 h-4 bg-blue-400 rounded-full opacity-0 animate-[rain_1.4s_linear_infinite_0.6s]"></div>
    </div>
  </div>

  <style>
  @keyframes rain {
    0% { transform: translateY(-20px); opacity: 0; }
    30% { opacity: 1; }
    100% { transform: translateY(40px); opacity: 0; }
  }
</style>

  `,
  "Thunderstorm": `
    <div class="relative w-32 h-40">
    
    <div class="relative z-20 animate-[bounce_6s_ease-in-out_infinite]">
      <div class="absolute inset-0 bg-yellow-100 rounded-full blur-3xl opacity-0 animate-[long-flash_5s_infinite]"></div>
      <div class="absolute top-4 left-2 w-16 h-16 bg-slate-700 rounded-full"></div>
      <div class="absolute top-2 left-10 w-20 h-20 bg-slate-800 rounded-full"></div>
      <div class="absolute top-8 left-4 w-24 h-12 bg-slate-800 rounded-full shadow-2xl"></div>
    </div>
    <div class="absolute top-16 left-12 z-10 opacity-0 animate-[long-bolt_5s_infinite]">
      <svg width="45" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-[0_0_15px_rgba(250,204,21,1)]">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#FDE047" stroke="#CA8A04" stroke-width="1"/>
      </svg>
    </div>
    <div class="absolute inset-x-0 bottom-4 flex justify-around px-6">
      <div class="w-0.5 h-6 bg-blue-600 rounded-full opacity-0 animate-[rain_0.8s_linear_infinite]"></div>
      <div class="w-0.5 h-6 bg-blue-600 rounded-full opacity-0 animate-[rain_0.8s_linear_infinite_0.2s]"></div>
      <div class="w-0.5 h-6 bg-blue-600 rounded-full opacity-0 animate-[rain_0.8s_linear_infinite_0.5s]"></div>
    </div>
  </div>
  <style>
  /* The "Long Flash" stays visible for about 1 second total per cycle */
  @keyframes long-flash {
    0%, 70%, 100% { opacity: 0; }
    72% { opacity: 0.8; } /* First Strike */
    74% { opacity: 0.2; }
    76% { opacity: 1; }   /* Main Strike */
    85% { opacity: 0.3; } /* Lingering Glow */
    95% { opacity: 0; }   /* Final Fade */
  }

  /* The Bolt stays on screen longer using a multi-step keyframe */
  @keyframes long-bolt {
    0%, 70%, 100% { opacity: 0; transform: scale(0.9); }
    72%, 73% { opacity: 1; transform: scale(1.1); } /* Flicker */
    74% { opacity: 0.3; }
    75%, 85% { opacity: 1; transform: scale(1); }   /* Held Strike */
    90% { opacity: 0; transform: scale(1); }
  }

  @keyframes rain {
    0% { transform: translateY(-20px); opacity: 0; }
    50% { opacity: 0.6; }
    100% { transform: translateY(70px); opacity: 0; }
  }
</style>
  `
};

const weatherSets = {
  "Clear": {
    images: [
      "Images/sunny.png",
      "Images/washing.png",
      "Images/tuning.png"
    ],
    texts: [
      "Maganda ang araw, tara mag-rides 🚴‍♂️",
      "Perfect weather para mag long ride!",
      "Tara, sayang ang sikat ng araw!",
      "Bike wash day ngayon!",
      "Ayos ang panahon, pwede mag ensayo.",
      "Clear skies, clear mind — ride tayo.",
      "Good vibes lang, walang ulan.",
      "Mainit pero kaya pa, hydrate lang!",
      "Saktong panahon para mag photos ng bike.",
      "Umuulan ba? Hindi! Tara lumabas."
    ]
  },

  "Clouds": {
    images: ["Images/cloudy.png"],
    texts: [
      "Maulap, pero pwede pa rin mag ride.",
      "Sakto lang ang lamig, chill ride muna.",
      "Walang araw, walang ulan — go!",
      "Cloudy ride hits different.",
      "Pwede mag short ride para safe.",
      "Mukhang okay pa, pero ready sa ulan.",
      "Masarap mag bike pag di mainit.",
      "Tara ikot lang saglit.",
      "Magaan sa mata ang langit ngayon.",
      "Keep an eye sa forecast!"
    ]
  },

  "Rain": {
    images: [
      "Images/lightrain.png",
      "Images/raining.png"
    ],
    texts: [
      "Umuulan na naman, pahinga muna.",
      "Magdala ng payong kung lalabas.",
      "Wet roads — delikado mag ride.",
      "Bike wash sana, kaso tuloy ang ulan.",
      "Mas okay mag indoor workout muna.",
      "Rainy day vibes, kape muna ☕",
      "Short ride lang kung kailangan.",
      "Safety first, iwas disgrasya.",
      "Hintayin tumila ang ulan.",
      "Rest day muna si bike."
    ]
  },

  "Thunderstorm": {
    images: ["Images/thunder.png"],
    texts: [
      "Bumabagyo, stay sa loob ng bahay!",
      "Malakas ang ulan at hangin — wag na!",
      "Delikado sa labas, cancel ride.",
      "Protect your bike and yourself.",
      "Hindi ride day ngayon.",
      "Safety > Strava",
      "Charge muna ng lakas.",
      "Netflix muna today.",
      "Better luck tomorrow!",
      "Wag pilitin, bagyo na."
    ]
  }
};


let slideInterval;

async function getWeatherByCoords(lat, lon) {
  try {
    const res = await fetch(
  `/api/weather?lat=${lat}&lon=${lon}`
);
    const data = await res.json();

    const cityName = data.city.name;
    document.getElementById("city").innerText = cityName;

    renderHourly(data.list);
    renderDaily(data.list);

    const currentWeatherMain = data.list[0].weather[0].main;
    const currentWeatherText = weatherMap[currentWeatherMain] || currentWeatherMain;
    document.getElementById("current-weather").innerText = currentWeatherText;

    startWeatherSlideshow(currentWeatherMain);

  } catch (err) {
    console.error("Weather fetch failed:", err);
    alert("Cannot fetch weather by coordinates.");
  }
}

async function getWeatherByCity(city) {
  try {
    const res = await fetch(
  `/api/weather?city=${city}`
);

    const data = await res.json();

    const cityName = data.city.name;
    document.getElementById("city").innerText = cityName;

    renderHourly(data.list);
    renderDaily(data.list);

    const currentWeatherMain = data.list[0].weather[0].main;
    const currentWeatherText = weatherMap[currentWeatherMain] || currentWeatherMain;
    document.getElementById("current-weather").innerText = currentWeatherText;

    startWeatherSlideshow(currentWeatherMain);

  } catch (err) {
    console.error("Weather fetch failed:", err);
    alert("Cannot fetch weather for default city either.");
  }
}

async function getWeather() {
  try {
    const { lat, lon } = await getUserLocation();
    await getWeatherByCoords(lat, lon);
  } catch (err) {
    console.warn("Geolocation failed:", err);
    alert("Cannot access location. Showing default city weather.");
      await getWeatherByCity("Manila"); 
      
  }
}




function startWeatherSlideshow(weatherMain) {
  const set = weatherSets[weatherMain] || {images: ["Images/sunny.png"], texts: ["Loading..."]};
  const iconEl = document.getElementById("weather-icon");
  const textEl = document.getElementById("ride-text");

  let index = 0;

  if (slideInterval) clearInterval(slideInterval);

  iconEl.classList.add("transition-opacity", "duration-700");
  textEl.classList.add("transition-opacity", "duration-700");

  iconEl.style.opacity = 0;
  textEl.style.opacity = 0;

  setTimeout(() => {
    iconEl.src = set.images[0];
    textEl.innerText = set.texts[0];
    iconEl.style.opacity = 1;
    textEl.style.opacity = 1;
  }, 50);

  slideInterval = setInterval(() => {
    iconEl.style.opacity = 0;
    textEl.style.opacity = 0;

    setTimeout(() => {
const randomImageIndex = Math.floor(Math.random() * set.images.length);
const randomTextIndex = Math.floor(Math.random() * set.texts.length);

iconEl.src = set.images[randomImageIndex];
textEl.innerText = set.texts[randomTextIndex];

      iconEl.style.opacity = 1;
      textEl.style.opacity = 1;
    }, 700); 
  }, 5000);
}

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (err) => {
          reject(err);
        },
          { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser"));
    }
  });
}


function renderHourly(list) {
  const hourly = document.getElementById("hourly");
  hourly.innerHTML = "";

  list.slice(0, 10).forEach(item => {
    const time = new Date(item.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true
    });

    const mainWeather = item.weather[0].main;
    const description = weatherMap[mainWeather] || mainWeather;

    hourly.innerHTML += `
      <div class="bg-white rounded-xl shadow-xl p-6 min-w-37.5 shrink-0 flex flex-col items-center">
        ${weatherIcons[mainWeather] || `<p>❓</p>`}
        <p class="text-sm text-gray-500 mt-2">${time}</p>
        <p class="text-lg font-medium">${description}</p>
      </div>
    `;
  });
}

function renderDaily(list) {
  const daily = document.getElementById("daily");
  daily.innerHTML = "";

  const days = {};

  list.forEach(item => {
    const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long"
    });

    if (!days[day]) {
      days[day] = item;
    }
  });

  Object.values(days).slice(0, 7).forEach(item => {
    const dayName = new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long"
    });

    const mainWeather = item.weather[0].main;
    const description = weatherMap[mainWeather] || mainWeather;

    daily.innerHTML += `
      <div class="bg-white rounded-xl shadow-xl p-6 min-w-37.5 shrink-0 flex flex-col items-center">
        ${weatherIcons[mainWeather] || `<p>❓</p>`}
        <p class="text-sm text-gray-500 mt-2">${dayName}</p>
        <p class="text-lg font-medium">${description}</p>
      </div>
    `;
  });
}

// Run
getWeather();

