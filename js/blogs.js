// We need 20 blog posts.
// Using Unsplash source for images for demonstration purposes.

const generateContent = (subject) => `
Welcome to our comprehensive guide on ${subject}. The weather plays a crucial role in our daily lives, influencing everything from what we wear to how we travel and even our mood.

Understanding meteorological data and patterns helps us prepare for the future. Over the past decade, tracking these patterns has become both more precise and more complex. 

In this article, we'll dive deep into:
- The historical patterns of ${subject}
- Why tracking this is more important now than ever
- Cutting-edge predictive technologies in meteorology
- How you can apply this knowledge

Stay tuned as we continue exploring the fascinating world of atmospheric science and climate analysis. Knowing what tomorrow brings gives you the power to plan today.
`.trim();

export const blogs = [
    {
        id: 1,
        title: "The Rise of Extreme Weather Patterns in 2026",
        date: "April 25, 2026",
        excerpt: "An in-depth look at how global climate shifts are leading to more frequent and severe weather anomalies.",
        image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=600&q=80",
        content: generateContent("extreme weather patterns")
    },
    {
        id: 2,
        title: "Understanding Microclimates in Urban Areas",
        date: "April 22, 2026",
        excerpt: "Why downtown areas are often significantly warmer than surrounding suburbs, and how urban planning affects this.",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80",
        content: generateContent("urban microclimates")
    },
    {
        id: 3,
        title: "How to Predict Rain Without a Barometer",
        date: "April 18, 2026",
        excerpt: "Learn how to read the clouds and natural signs to determine if you need to carry an umbrella today.",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
        content: generateContent("predicting rain naturally")
    },
    {
        id: 4,
        title: "The Science of Sunsets: Why Winter Skies Burn Brighter",
        date: "April 15, 2026",
        excerpt: "Discover the atmospheric physics that make cold evening skies burst with vibrant pinks and purples.",
        image: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=600&q=80",
        content: generateContent("sunset physics")
    },
    {
        id: 5,
        title: "El Niño vs La Niña: Global Impacts",
        date: "April 12, 2026",
        excerpt: "Breaking down these massive Pacific ocean patterns and how they shape the weather around the world.",
        image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&w=600&q=80",
        content: generateContent("El Niño and La Niña")
    },
    {
        id: 6,
        title: "Preparing Your Home for Hurricane Season",
        date: "April 08, 2026",
        excerpt: "Essential steps to take before a storm hits to protect your property and your family.",
        image: "https://images.unsplash.com/photo-1605727216801-e27ce1d0ce49?auto=format&fit=crop&w=600&q=80",
        content: generateContent("hurricane preparation")
    },
    {
        id: 7,
        title: "The Mechanics of Tornado Formation",
        date: "April 05, 2026",
        excerpt: "From supercells to touchdowns, exploring the terrifying beauty and power of tornadoes.",
        image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=600&q=80", /* Reused for aesthetic theme */
        content: generateContent("tornado mechanics")
    },
    {
        id: 8,
        title: "Decoding the UV Index: Staying Safe in the Sun",
        date: "April 02, 2026",
        excerpt: "What the numbers actually mean and how to properly protect your skin during high-index days.",
        image: "https://images.unsplash.com/photo-1542226601-bc82fb10165a?auto=format&fit=crop&w=600&q=80",
        content: generateContent("UV Index safety")
    },
    {
        id: 9,
        title: "Advances in Satellite Meteorology",
        date: "March 29, 2026",
        excerpt: "How modern orbital arrays are providing unprecedented clarity for weather prediction models.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        content: generateContent("satellite meteorology")
    },
    {
        id: 10,
        title: "The Relationship Between Weather and Mood",
        date: "March 25, 2026",
        excerpt: "Seasonal Affective Disorder aside, how daily barometric pressure and sunlight shape human psychology.",
        image: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&w=600&q=80",
        content: generateContent("weather psychology")
    },
    {
        id: 11,
        title: "Demystifying Humidity and Dew Point",
        date: "March 21, 2026",
        excerpt: "Why 80 degrees feels terribly hot in Miami but pleasant in Phoenix.",
        image: "https://images.unsplash.com/photo-1518558997970-4ddd2cd6e5ce?auto=format&fit=crop&w=600&q=80",
        content: generateContent("humidity and dew point")
    },
    {
        id: 12,
        title: "How Mountains Affect Local Climate",
        date: "March 18, 2026",
        excerpt: "Exploring the 'rain shadow' effect and why one side of a mountain range can be a desert.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        content: generateContent("mountain climates")
    },
    {
        id: 13,
        title: "Tracking the Jet Stream",
        date: "March 14, 2026",
        excerpt: "Understanding the high-altitude rivers of air that drag weather systems across continents.",
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=600&q=80",
        content: generateContent("the Jet Stream")
    },
    {
        id: 14,
        title: "Fog: Types and Formation",
        date: "March 10, 2026",
        excerpt: "Radiation, advection, and freezing fog—learn what hides in the mist.",
        image: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?auto=format&fit=crop&w=600&q=80",
        content: generateContent("fog types")
    },
    {
        id: 15,
        title: "The Importance of Ocean Currents",
        date: "March 07, 2026",
        excerpt: "How the Gulf Stream and others act as a global conveyor belt for heat.",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632e85?auto=format&fit=crop&w=600&q=80",
        content: generateContent("ocean currents")
    },
    {
        id: 16,
        title: "Lightning: Nature's Light Show",
        date: "March 03, 2026",
        excerpt: "The incredible physics behind an electrical discharge that is hotter than the surface of the sun.",
        image: "https://images.unsplash.com/photo-1605727216801-e27ce1d0ce49?auto=format&fit=crop&w=600&q=80",
        content: generateContent("lightning physics")
    },
    {
        id: 17,
        title: "Climate Change vs Weather Variation",
        date: "February 28, 2026",
        excerpt: "Clarifying the frequently misunderstood difference between a cold day and a shifting climate.",
        image: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?auto=format&fit=crop&w=600&q=80",
        content: generateContent("climate vs weather")
    },
    {
        id: 18,
        title: "What is a Polar Vortex?",
        date: "February 24, 2026",
        excerpt: "Why the coldest air on Earth sometimes escapes the poles and invades lower latitudes.",
        image: "https://images.unsplash.com/photo-1518558997970-4ddd2cd6e5ce?auto=format&fit=crop&w=600&q=80",
        content: generateContent("the Polar Vortex")
    },
    {
        id: 19,
        title: "How the Moon Impacts Earth's Weather",
        date: "February 20, 2026",
        excerpt: "Beyond the tides: does lunar gravity exert any meaningful force on our atmosphere?",
        image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049f6?auto=format&fit=crop&w=600&q=80",
        content: generateContent("lunar weather impact")
    },
    {
        id: 20,
        title: "The Ultimate Guide to Rain Gauges",
        date: "February 15, 2026",
        excerpt: "A backyard meteorologist's guide to accurately measuring precipitation.",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
        content: generateContent("rain gauges")
    }
];

export const getBlogById = (id) => blogs.find(b => b.id === parseInt(id));
