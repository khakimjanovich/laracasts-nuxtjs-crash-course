export default async (req, res) => {
    return await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=Uzbekistan&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);
};
