// We use Open-Meteo as it requires no API key and provides excellent data.

// Convert WMO Weather codes to human readable strings and icons
const WMO_CODES = {
    0: { desc: 'Clear sky', icon: '☀️' },
    1: { desc: 'Mainly clear', icon: '🌤' },
    2: { desc: 'Partly cloudy', icon: '⛅' },
    3: { desc: 'Overcast', icon: '☁️' },
    45: { desc: 'Fog', icon: '🌫' },
    48: { desc: 'Depositing rime fog', icon: '🌫' },
    51: { desc: 'Light Drizzle', icon: '🌧' },
    53: { desc: 'Moderate Drizzle', icon: '🌧' },
    55: { desc: 'Dense Drizzle', icon: '🌧' },
    61: { desc: 'Slight Rain', icon: '🌧' },
    63: { desc: 'Moderate Rain', icon: '🌧' },
    65: { desc: 'Heavy Rain', icon: '🌧' },
    71: { desc: 'Slight Snow fall', icon: '❄️' },
    73: { desc: 'Moderate Snow fall', icon: '❄️' },
    75: { desc: 'Heavy Snow fall', icon: '❄️' },
    95: { desc: 'Thunderstorm', icon: '⛈' },
};

export const fetchWeather = async () => {
    // For demonstration, let's fetch weather for New York
    // You could expand this to use Geolocation API later
    const lat = 40.7143;
    const lon = -74.006;
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`);
        
        if (!response.ok) throw new Error('Failed to fetch weather data');
        
        const data = await response.json();
        const current = data.current;
        const codeInfo = WMO_CODES[current.weather_code] || { desc: 'Unknown', icon: '🌍' };
        
        return {
            location: "New York, US",
            temp: Math.round(current.temperature_2m),
            feelsLike: Math.round(current.apparent_temperature),
            humidity: current.relative_humidity_2m,
            windSpeed: current.wind_speed_10m,
            condition: codeInfo.desc,
            icon: codeInfo.icon,
            isDay: current.is_day === 1
        };
    } catch (error) {
        console.error("Error fetching weather:", error);
        throw error;
    }
};
