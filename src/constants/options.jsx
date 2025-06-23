export const SelectTravelList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo traveler on an adventure',
        icon: '✈️',
        people: '1 person'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers exploring together',
        icon: '🥂',
        people: '2 people'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A fun-loving family on vacation',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A group of thrill-seeking friends',
        icon: '⛵',
        people: '5 to 10 people'
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Budget-Friendly',
        desc: 'Stay mindful of expenses',
        icon: '💵',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Balance comfort and cost',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Indulge without worry',
        icon: '💸',
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget ,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place Name, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'