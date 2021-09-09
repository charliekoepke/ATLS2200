function spring() {
    document.getElementById("header").style.color = "pink";
    document.getElementById("header").innerHTML = "Spring";
    document.body.style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "pink";

    document.getElementById("paragraph").innerHTML = "Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa. At the spring (or vernal) equinox, days and nights are approximately twelve hours long, with daytime length increasing and nighttime length decreasing as the season progresses. Spring and 'springtime' refer to the season, and also to ideas of rebirth, rejuvenation, renewal, resurrection and regrowth. Subtropical and tropical areas have climates better described in terms of other seasons, e.g. dry or wet, monsoonal or cyclonic. Cultures may have local names for seasons which have little equivalence to the terms originating in Europe.";
    document.getElementById("image").src = "img/spring.jpg";
}
function fall() {
    document.getElementById("header").style.color = "black";
    document.getElementById("header").innerHTML = "Fall";
    document.body.style.backgroundColor = "orange";
    document.getElementById("paragraph").style.color = "black";

    document.getElementById("paragraph").innerHTML = "Autumn, also known as fall in American English and Canadian English, is one of the four temperate seasons. Outside the tropics, autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere), when the duration of daylight becomes noticeably shorter and the temperature cools considerably. Day length decreases and night length increases as the season progresses until the Winter Solstice in December (Northern Hemisphere) and June (Southern Hemisphere). One of its main features in temperate climates is the shedding of leaves from deciduous trees.";
    document.getElementById("image").src = "img/fall.jpg"
}
function winter() {
    document.getElementById("header").style.color = "blue";
    document.getElementById("header").innerHTML = "Winter"
    document.body.style.backgroundColor = "white";
    document.getElementById("paragraph").style.color = "blue";

    document.getElementById("paragraph").innerHTML = "Winter is the coldest season of the year in polar and temperate zones; it does not occur in most of the tropical zone. It occurs after autumn and before spring in each year. Winter is caused by the axis of the Earth in that hemisphere being oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather. When it is winter in the Northern Hemisphere, it is summer in the Southern Hemisphere, and vice versa. In many regions, winter is associated with snow and freezing temperatures. The moment of winter solstice is when the Sun's elevation with respect to the North or South Pole is at its most negative value (that is, the Sun is at its farthest below the horizon as measured from the pole). The day on which this occurs has the shortest day and the longest night, with day length increasing and night length decreasing as the season progresses after the solstice. The earliest sunset and latest sunrise dates outside the polar regions differ from the date of the winter solstice, however, and these depend on latitude, due to the variation in the solar day throughout the year caused by the Earth's elliptical orbit (see earliest and latest sunrise and sunset).";
    document.getElementById("image").src = "img/winter.jpg"
}
function summer() {
    document.getElementById("header").style.color = "green";
    document.getElementById("header").innerHTML = "Summer";
    document.body.style.backgroundColor = "yellow";
    document.getElementById("paragraph").style.color = "green";

    document.getElementById("paragraph").innerHTML = "Summer is the hottest of the four temperate seasons, falling after spring and before autumn. At or around the summer solstice (about 3 days before Midsummer Day), the earliest sunrise and latest sunset occurs, the days are longest and the nights are shortest, with day length decreasing as the season progresses after the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.";
    document.getElementById("image").src = "img/summer.jpeg"
}

var slides = 
[
    'img/link.png',
    'img/zelda.png',
    'img/ganon.jpg'
];

var info = 
[
    'Link is the main protagonist of the Legend of Zelda series. He is the everlasting hero of the setting, having appeared throughout the ages in a never-ending line of incarnations. The various heroes who use the name Link are courageous young boys or teenagers, often in green clothing, who leave their homes to save the world from evil forces threatening it.',
    "Zelda, Princess of Hyrule, best known simply as Princess Zelda is the name known for several female Hylians, usually members of the Royal Family of Hyrule, who often play an integral role in the series. Though each is the titular character of the Legend of Zelda series, the actual protagonist is each era's respective Link.",
    'Calamity Ganon is the main antagonist and penultimate boss of The Legend of Zelda: Breath of the Wild. He is the last Scourge, found at Hyrule Castle. He is an incomplete form that Ganon assumed when he was interrupted while trying to reincarnate himself.'
];

var links = 
[
    'https://zelda-archive.fandom.com/wiki/Link',
    'https://zelda-archive.fandom.com/wiki/Princess_Zelda',
    'https://zelda-archive.fandom.com/wiki/Calamity_Ganon'
];

var counter = 0;
function next() {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    document.getElementById("slide").src = slides[counter];
    document.getElementById("description").innerHTML = info[counter];
    document.getElementById("link").href = links[counter];
}
function previous() {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    document.getElementById("slide").src = slides[counter];
    document.getElementById("description").innerHTML = info[counter];
    document.getElementById("link").href = links[counter];
}