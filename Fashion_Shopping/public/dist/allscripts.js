'use strict';

var futureTv = angular.module('futureTv', ['ui.bootstrap',
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'ngStorage',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay"
])

.config(function($routeProvider) {

    $routeProvider

         .when('/', {
            templateUrl: '../views/login.html',
            controller: 'loginController'
       })

        .when('/dashboard', {
            templateUrl: '../views/dashboard.html',
            controller: 'dashboardController'
       })

       .when('/movieDetails', {
          templateUrl: '../views/movieDetails.html',
          controller: 'movieDetailsController'
       })

       .when('/playMovie', {
          templateUrl: '../views/playMovie.html',
          controller: 'playMovieController'
       })

    ;

});

this.movies = {
     selectedMovie: { }
};

futureTv.service('dataService', function() {
    var s = {};

    return {
            setData: function (data, key) {
                s[key] = data;
            },
            getData: function (key) {
                return s[key];
            }
        };
});

'use strict';

(function() {

    futureTv.controller('mainController', ['$scope', function(scope) {

         scope.name = '';
         scope.completeData = [
              {
                   menus: [
                        { name: 'Home', selectedCss: 'selected' },
                        { name: 'On Tv', selectedCss: '' },
                        { name: 'Guide', selectedCss: '' },
                        { name: 'On Demand', selectedCss: '' },
                        { name: 'Subscriptions', selectedCss: '' },
                        { name: 'Settings', selectedCss: '' }
                   ],
                   groups: [
                        {
                             name: 'RECOMMENDED VIDEOS',
                             movies: [
                                  {
                                       posterUrl: 'CasinoRoyale-small.jpg',
                                      tileUrl: 'CasinoRoyale.jpg',
                                      bannerUrl: 'CasinoRoyale-big.jpg',
                                      movieUrl: 'http://localhost:3000/assets/videos/CasinoRoyale.mp4',
                                      year: '2018',
                                      name: 'Casino Royale',
                                      class: 'movie-detail',
                                      duration: '145 min',
                                      watched: '40%',
                                      genre: 'Action',
                                      description: 'MI6 agent James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan. In Uganda, the mysterious liaison Mr. White introduces warlord Steven Obanno of the Lord\'s Resistance Army to Le Chiffre, a terrorist financier.',
                                      playDescription: 'MI6 agent James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan. In Uganda, the mysterious liaison Mr. White introduces warlord Steven Obanno of the Lord\'s Resistance Army to Le Chiffre, a terrorist financier. Obanno entrusts Le Chiffre with a large sum of money to invest safely for him; instead Le Chiffre uses it to buy put options on the aerospace company Skyfleet, thus betting the money on the company\'s failure.',
                                       actors: [
                                         { name: 'Daniel Craig', image: 'daniel_craig.jpg' },
                                         { name: "Eva Green", image: 'eva_green.jpg' },
                                         { name: 'Mads Mikkelsen', image: 'mads_mikkelsen.jpg' },
                                         { name: 'Giancarlo Giannini', image: 'giancarlo_giannini.jpg' },
                                         { name: 'Jeffrey Wright', image: 'jeffrey_wright.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'Watchmen-small.jpg',
                                       tileUrl: 'Watchmen.jpg',
                                       bannerUrl: 'Watchmen-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/Watchmen.mp4',
                                       year: '2009',
                                       name: 'Watchmen',
                                       class: 'movie-detail',
                                       duration: '163 min',
                                       watched: '5%',
                                       genre: 'Action',
                                       description: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods.',
                                       playDescription: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods. Initially starting in 1939, during the fading Interwar Period, The "Minutemen," a team of costumed crime fighters, formed in response to a rise in costumed gangs and criminals; this creation and timeline occurring prior to, and similarly covering the 1960s Vietnam Era through mid-1980s Cold War Era America, saw the rise of The "Watchmen" team formed decades later.',
                                       actors: [
                                            { name: 'Malin Akerman', image: 'Malin_Akerman.jpg' },
                                            { name: 'Billy Crudup', image: 'Billy_Crudup.jpg' },
                                            { name: 'Matthew Goode', image: 'Matthew_Goode.jpg' },
                                            { name: 'Carla Gugino', image: 'Carla_Gugino.jpg' },
                                            { name: 'Patrick Wilson', image: 'Patrick_Wilson.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'DieHard-small.jpg',
                                       tileUrl: 'diehard.jpg',
                                       bannerUrl: 'diehard-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/diehard.mp4',
                                       year: '1988',
                                       name: 'Die Hard',
                                       class: 'movie-detail',
                                       duration: '132 min',
                                       watched: '1%',
                                       genre: 'Action',
                                       description: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team.',
                                       playDescription: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team: Karl, Tony, Franco, Theo, Alexander, Marco, Kristoff, Eddie, Uli, Heinrich, Fritz, and James. The group seizes the tower and secures those inside as hostages except for McClane, who slips away, and Argyle, who gets trapped in the garage.',
                                        actors: [
                                          { name: 'Bruce Willis', image: 'daniel_craig.jpg' },
                                          { name: "Alan Rickman", image: 'eva_green.jpg' },
                                          { name: 'Alexander Godunov', image: 'mads_mikkelsen.jpg' },
                                          { name: 'Bonnie Bedelia', image: 'giancarlo_giannini.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'IronFist-small.jpg',
                                       tileUrl: 'IronFist.jpg',
                                       bannerUrl: 'IronFist-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/IronFist.mp4',
                                       year: '2012',
                                       name: 'Iron Fist',
                                       class: 'movie-detail',
                                       duration: '99 min',
                                       watched: '20%',
                                       genre: 'Action',
                                       description: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village.',
                                       playDescription: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village. Gold is betrayed by his lieutenants Silver Lion and Bronze Lion, who plan to steal the gold. They use the chaos ensuing from a fight with the Hyena Clan to allow their co-conspirator Poison Dagger',
                                        actors: [
                                          { name: 'Russell Crowe', image: 'Russell_Crowe.jpg' },
                                          { name: "Cung Le", image: 'Cung_Le.jpg' },
                                          { name: 'Lucy Liu', image: 'Lucy_Liu.jpg' },
                                          { name: 'Dave Bautista', image: 'Dave_Bautista.jpg' },
                                          { name: 'Rick Yune', image: 'Rick_Yune.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'RoadHouse-small.jpg',
                                       tileUrl: 'RoadHouse.jpg',
                                       bannerUrl: 'RoadHouse-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/RoadHouse.mp4',
                                       year: '1989',
                                       name: 'Road House',
                                       class: 'movie-detail',
                                       duration: '114 min',
                                       watched: '10%',
                                       genre: 'Action',
                                       description: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri.',
                                       playDescription: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri. Tilghman plans to invest substantial money into the club to enhance its image and needs a first-rate cooler to maintain stability.',
                                        actors: [
                                          { name: 'Patrick Swayze', image: 'Patrick_Swayze.jpg' },
                                          { name: "Ben Gazzara", image: 'Ben_Gazarra.jpg' },
                                          { name: 'Kelly Lynch', image: 'Kelly_Lynch.jpg' },
                                          { name: 'Sam Elliott', image: 'Sam_Elliott.jpg' }
                                        ]
                                  }
                             ]
                        },
                        {
                             name: 'SHOPPING VIDEOS',
                             movies: [
                                  {
                                       posterUrl: 'clapper-small.jpg',
                                       tileUrl: 'clapper.png',
                                       bannerUrl: 'shopping-bg.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/clapper.mp4',
                                       year: '2018',
                                       name: 'Clapper',
                                       class: 'shopping',
                                       duration: '3 min',
                                       watched: '20%',
                                       genre: 'Shopping',
                                       description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine',
                                       actors: [
                                            { name: 'Blue Hood', image: 'blue-hood.jpg' },
                                            { name: 'Clock', image: 'clock.jpg' },
                                            { name: 'Wireless Headset', image: 'wireless-headset.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'not-applicable.jpg',
                                       tileUrl: 'womens-shopping-3.png',
                                       bannerUrl: 'shopping-4.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/avatar.mp4',
                                       year: '2018',
                                       name: 'Valentino',
                                       class: 'shopping',
                                       duration: '3 min',
                                       watched: '20%',
                                       genre: 'Shopping',
                                       description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine',
                                       actors: [
                                            { name: 'Blue Hood', image: 'Sam_Worthington.jpg' },
                                            { name: 'Brown Clock', image: 'Zoe_Saldana.jpg' },
                                            { name: 'Wireless Headset', image: 'Stephen_Lang.jpg' },
                                            { name: 'Mobile', image: 'Michelle_Rodriguez.jpg' },
                                            { name: 'Mike', image: 'Sigourney_Weaver.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'not-applicable.jpg',
                                       tileUrl: 'womens-shopping.png',
                                       bannerUrl: 'shopping-4.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/avatar.mp4',
                                       year: '2018',
                                       name: 'Versace',
                                       class: 'shopping',
                                       duration: '3 min',
                                       watched: '50%',
                                       genre: 'Shopping',
                                       description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine',
                                       actors: [
                                            { name: 'Blue Hood', image: 'Sam_Worthington.jpg' },
                                            { name: 'Brown Clock', image: 'Zoe_Saldana.jpg' },
                                            { name: 'Wireless Headset', image: 'Stephen_Lang.jpg' },
                                            { name: 'Mobile', image: 'Michelle_Rodriguez.jpg' },
                                            { name: 'Mike', image: 'Sigourney_Weaver.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'not-applicable.jpg',
                                       tileUrl: 'kids-shopping.png',
                                       bannerUrl: 'shopping-4.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/avatar.mp4',
                                       year: '2018',
                                       name: 'Kids Shopping',
                                       class: 'shopping',
                                       duration: '3 min',
                                       watched: '10%',
                                       genre: 'Shopping',
                                       description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine',
                                       actors: [
                                            { name: 'Blue Hood', image: 'Sam_Worthington.jpg' },
                                            { name: 'Brown Clock', image: 'Zoe_Saldana.jpg' },
                                            { name: 'Wireless Headset', image: 'Stephen_Lang.jpg' },
                                            { name: 'Mobile', image: 'Michelle_Rodriguez.jpg' },
                                            { name: 'Mike', image: 'Sigourney_Weaver.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'not-applicable.jpg',
                                       tileUrl: 'womens-shopping-2.png',
                                       bannerUrl: 'shopping-4.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/avatar.mp4',
                                       year: '2018',
                                       name: 'Womens Shopping',
                                       class: 'shopping',
                                       duration: '3 min',
                                       watched: '80%',
                                       genre: 'Shopping',
                                       description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine',
                                       actors: [
                                            { name: 'Blue Hood', image: 'Sam_Worthington.jpg' },
                                            { name: 'Brown Clock', image: 'Zoe_Saldana.jpg' },
                                            { name: 'Wireless Headset', image: 'Stephen_Lang.jpg' },
                                            { name: 'Mobile', image: 'Michelle_Rodriguez.jpg' },
                                            { name: 'Mike', image: 'Sigourney_Weaver.jpg' }
                                       ]
                                  }
                             ]
                        },
                        {
                             name: 'POPULAR VIDEOS',
                             movies: [
                                  {
                                       posterUrl: 'avatar-small.jpg',
                                       tileUrl: 'avatar.jpg',
                                       bannerUrl: 'avatar-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/avatar.mp4',
                                       year: '2018',
                                       name: 'Avatar',
                                       class: 'popular-avatar',
                                       duration: '162 min',
                                       watched: '20%',
                                       genre: 'Science fiction',
                                       description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine',
                                       playDescription: 'In 2154, humans have depleted Earth\'s natural resources, leading to a severe energy crisis. The Resources Development Administration (RDA for short) mines for a valuable mineral — unobtanium — on Pandora, a densely forested habitable moon orbiting the gas giant Polyphemus in the Alpha Centauri star system.[10] Pandora, whose atmosphere is poisonous to humans, is inhabited by the Na\'vi, a species of 10-foot tall (3.0 m), blue-skinned,    sapient humanoids[34] that live in harmony with nature and worship a mother goddess named Eywa.',
                                       actors: [
                                            { name: 'Sam Worthington', image: 'Sam_Worthington.jpg' },
                                            { name: 'Zoe Saldana', image: 'Zoe_Saldana.jpg' },
                                            { name: 'Stephen Lang', image: 'Stephen_Lang.jpg' },
                                            { name: 'Michelle Rodriguez', image: 'Michelle_Rodriguez.jpg' },
                                            { name: 'Sigourney Weaver', image: 'Sigourney_Weaver.jpg' }
                                       ]
                                  },
                                  // {
                                  //      posterUrl: 'TheGreatestShowman-small.jpg',
                                  //      tileUrl: 'TheGreatestShowman.jpg',
                                  //      bannerUrl: 'TheGreatestShowman-big.jpg',
                                  //      movieUrl: 'http://localhost:3000/assets/videos/TheGreatestShowman.mp4',
                                  //      year: '2017',
                                  //      name: 'The Greatest Showman',
                                  //      class: 'movie-detail',
                                  //      duration: '105 min',
                                  //      watched: '10%',
                                  //      genre: 'Drama',
                                  //      description: 'Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction.',
                                  //      playDescription: 'Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage.',
                                  //      actors: [
                                  //           { name: 'Hugh Jackman', image: 'hugh_jackman.jpg' },
                                  //           { name: 'Michelle Williams', image: 'michelle_williams.jpg' },
                                  //           { name: 'Zac Efron', image: 'zac_efron.jpg' },
                                  //           { name: 'Zendaya', image: 'zendaya.jpg' },
                                  //           { name: 'Rebecca Ferguson', image: 'rebecca_ferguson.jpg' }
                                  //      ]
                                  // },
                                  {
                                       posterUrl: 'CasinoRoyale-small.jpg',
                                       tileUrl: 'CasinoRoyale.jpg',
                                       bannerUrl: 'CasinoRoyale-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/CasinoRoyale.mp4',
                                       year: '2018',
                                       name: 'Casino Royale',
                                       class: 'popular-casinoroyale',
                                       duration: '145 min',
                                       watched: '40%',
                                       genre: 'Action',
                                       description: 'MI6 agent James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan. In Uganda, the mysterious liaison Mr. White introduces warlord Steven Obanno of the Lord\'s Resistance Army to Le Chiffre, a terrorist financier.',
                                       playDescription: 'MI6 agent James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan. In Uganda, the mysterious liaison Mr. White introduces warlord Steven Obanno of the Lord\'s Resistance Army to Le Chiffre, a terrorist financier. Obanno entrusts Le Chiffre with a large sum of money to invest safely for him; instead Le Chiffre uses it to buy put options on the aerospace company Skyfleet, thus betting the money on the company\'s failure.',
                                        actors: [
                                          { name: 'Daniel Craig', image: 'daniel_craig.jpg' },
                                          { name: "Eva Green", image: 'eva_green.jpg' },
                                          { name: 'Mads Mikkelsen', image: 'mads_mikkelsen.jpg' },
                                          { name: 'Giancarlo Giannini', image: 'giancarlo_giannini.jpg' },
                                          { name: 'Jeffrey Wright', image: 'jeffrey_wright.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'SuperTroopers-small.jpg',
                                       tileUrl: 'SuperTroopers.jpg',
                                       bannerUrl: 'SuperTroopers-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/SuperTroopers.mp4',
                                       year: '2001',
                                       name: 'Super Troopers',
                                       class: 'movie-detail',
                                       duration: '100 min',
                                       watched: '10%',
                                       genre: 'Mystery',
                                       description: 'Thorny, Mac, Rabbit, Foster and Farva are Vermont state troopers out to have a good time. Stationed in a remote area near the Canadian border, the troopers, avid pranksters with an affinity for syrup, have a knack for screwing up on the job.',
                                       playDescription: 'Thorny, Mac, Rabbit, Foster and Farva are Vermont state troopers out to have a good time. Stationed in a remote area near the Canadian border, the troopers, avid pranksters with an affinity for syrup, have a knack for screwing up on the job. But when budget cuts in the town of Spurbury threaten their livelihood and pit them against arch-rival Spurbury P.D., the five friends try to straighten up and fly right.',
                                       actors: [
                                            { name: 'Joey Kern', image: 'joey_kern.jpg' },
                                            { name: 'Geoffrey Arend', image: 'geoffrey_arend.jpg' },
                                            { name: 'Erik Stolhanske', image: 'erik_stolhanske.jpg' },
                                            { name: 'Jay Chandrasekhar', image: 'jay_chandrasekhar.jpg' },
                                            { name: 'Steve Lemme', image: 'steve_lemme.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'CaptainAmerica-small.jpg',
                                       tileUrl: 'CaptainAmerica.jpg',
                                       bannerUrl: 'CaptainAmerica-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/CaptainAmerica.mp4',
                                       year: '2014',
                                       name: 'The Winter Soldier',
                                       class: 'movie-detail',
                                       duration: '136 min',
                                       watched: '10%',
                                       genre: 'Science Fiction',
                                       description: 'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.',
                                       playDescription: 'For Steve Rogers, awakening after decades of suspended animation involves more than catching up on pop culture; it also means that this old school idealist must face a world of subtler threats and difficult moral complexities. That becomes clear when Director Nick Fury is killed by the mysterious assassin, the Winter Soldier, but not before warning Rogers that SHIELD has been subverted by its enemies. When Rogers acts on Fury\'s warning to trust no one there, he is branded as a traitor by the organization. Now a fugitive, Captain America must get to the bottom of this deadly mystery with the help of the Black Widow and his new friend, The Falcon. However, the battle will be costly for the Sentinel of Liberty, with Rogers finding enemies where he least expects them while learning that the Winter Soldier looks disturbingly familiar.',
                                       actors: [
                                            { name: 'Chris Evans', image: 'chris_evans.jpg' },
                                            { name: 'Samuel L. Jackson', image: 'samuel_l_jackson.jpg' },
                                            { name: 'Scarlett Johansson', image: 'scarlett_johansson.jpg' },
                                            { name: 'Robert Redford', image: 'robert_redford.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'Hereditary-small.jpg',
                                       tileUrl: 'Hereditary.jpg',
                                       bannerUrl: 'Hereditary-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/Hereditary.mp4',
                                       year: '2018',
                                       name: 'Hereditary',
                                       class: 'movie-detail',
                                       duration: '126 min',
                                       watched: '10%',
                                       genre: 'Horror',
                                       description: 'When Ellen, the matriarch of the Graham family, passes away, her daughter\'s family begins to unravel cryptic and increasingly terrifying secrets about their ancestry. The more they discover, the more they find themselves trying to outrun the sinister fate they seem to have inherited as it slowly destroys everything they know.',
                                       playDescription: 'When Ellen, the matriarch of the Graham family, passes away, her daughter\'s family begins to unravel cryptic and increasingly terrifying secrets about their ancestry. The more they discover, the more they find themselves trying to outrun the sinister fate they seem to have inherited as it slowly destroys everything they know. Making his feature debut, writer-director Ari Aster unleashes a nightmare vision of a domestic breakdown that exhibits the craft and precision of a nascent auteur, transforming a familial tragedy into something ominous and deeply disquieting, and pushing the horror movie into chilling new terrain with its shattering portrait of heritage gone to hell.',
                                       actors: [
                                            { name: 'Toni Collette', image: 'toni_collette.jpg' },
                                            { name: 'Gabriel Byrne', image: 'gabriel_byrne.jpg' },
                                            { name: 'Alex Wolff', image: 'alex_wolff.jpg' },
                                            { name: 'Milly Shapiro', image: 'milly_shapiro.jpg' },
                                            { name: 'Ann Dowd', image: 'ann_dowd.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'DeepBlueSea2-small.jpg',
                                       tileUrl: 'DeepBlueSea2.jpg',
                                       bannerUrl: 'DeepBlueSea2-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/DeepBlueSea2.mp4',
                                       year: '2018',
                                       name: 'Deep Blue Sea 2',
                                       class: 'movie-detail',
                                       duration: '94 min',
                                       watched: '10%',
                                       genre: 'Science Fiction',
                                       description: 'A brilliant billionaire named Carl Durant is experimenting on bull sharks, which soon rebel to cause havoc for a group of scientists.',
                                       playDescription: 'A shark conservationist is hired to consult on a top-secret project on genetically enhanced sharks funded by a pharmaceutical billionaire. Soon after her arrival, the highly intelligent super sharks turn on their masters and begin to pick them off.',
                                       actors: [
                                            { name: 'Danielle Savre', image: 'danielle_savre.jpg' },
                                            { name: 'Rob Mayes', image: 'rob_mayes.jpg' },
                                            { name: 'Michael Beach', image: 'michael_beach.jpg' },
                                            { name: 'Nathan Lynn', image: 'nathan_lynn.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'Watchmen-small.jpg',
                                       tileUrl: 'Watchmen.jpg',
                                       bannerUrl: 'Watchmen-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/Watchmen.mp4',
                                       year: '2009',
                                       name: 'Watchmen',
                                       class: 'movie-detail',
                                       duration: '163 min',
                                       watched: '5%',
                                       genre: 'Action',
                                       description: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods.',
                                       playDescription: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods. Initially starting in 1939, during the fading Interwar Period, The "Minutemen," a team of costumed crime fighters, formed in response to a rise in costumed gangs and criminals; this creation and timeline occurring prior to, and similarly covering the 1960s Vietnam Era through mid-1980s Cold War Era America, saw the rise of The "Watchmen" team formed decades later.',
                                       actors: [
                                            { name: 'Malin Akerman', image: 'Malin_Akerman.jpg' },
                                            { name: 'Billy Crudup', image: 'Billy_Crudup.jpg' },
                                            { name: 'Matthew Goode', image: 'Matthew_Goode.jpg' },
                                            { name: 'Carla Gugino', image: 'Carla_Gugino.jpg' },
                                            { name: 'Patrick Wilson', image: 'Patrick_Wilson.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'GuardiansoftheGalaxy-small.jpg',
                                       tileUrl: 'GuardiansoftheGalaxy.jpg',
                                       bannerUrl: 'GuardiansoftheGalaxy-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/GuardiansoftheGalaxy.mp4',
                                       year: '2014',
                                       name: 'Guardians of the Galaxy',
                                       class: 'movie-detail',
                                       duration: '121 min',
                                       watched: '10%',
                                       genre: 'Science Fiction',
                                       description: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
                                       playDescription: 'After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth, is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the \"Guardians of the Galaxy\" to save the world.',
                                       actors: [
                                            { name: 'Chris Pratt', image: 'chris_pratt.jpg' },
                                            { name: 'Zoe Saldana', image: 'zoe_saldana.jpg' },
                                            { name: 'Dave Bautista', image: 'dave_bautista.jpg' },
                                            { name: 'Vin Diesel', image: 'vin_diesel.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'DieHard-small.jpg',
                                       tileUrl: 'diehard.jpg',
                                       bannerUrl: 'diehard-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/diehard.mp4',
                                       year: '1988',
                                       name: 'Die Hard',
                                       class: 'movie-detail',
                                       duration: '132 min',
                                       watched: '1%',
                                       genre: 'Action',
                                       description: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team.',
                                       playDescription: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team: Karl, Tony, Franco, Theo, Alexander, Marco, Kristoff, Eddie, Uli, Heinrich, Fritz, and James. The group seizes the tower and secures those inside as hostages except for McClane, who slips away, and Argyle, who gets trapped in the garage.',
                                        actors: [
                                          { name: 'Bruce Willis', image: 'daniel_craig.jpg' },
                                          { name: "Alan Rickman", image: 'eva_green.jpg' },
                                          { name: 'Alexander Godunov', image: 'mads_mikkelsen.jpg' },
                                          { name: 'Bonnie Bedelia', image: 'giancarlo_giannini.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'AgeofUltron-small.jpg',
                                       tileUrl: 'AgeofUltron.jpg',
                                       bannerUrl: 'AgeofUltron-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/AgeofUltron.mp4',
                                       year: '2015',
                                       name: 'Avengers: Age of Ultron',
                                       class: 'movie-detail',
                                       duration: '141 min',
                                       watched: '10%',
                                       genre: 'Science Fiction',
                                       description: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
                                       playDescription: 'Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth\'s mightiest heroes must come together once again to protect the world from global extinction.',
                                       actors: [
                                            { name: 'Robert Downey Jr.', image: 'robert_downey_jr.jpg' },
                                            { name: 'Chris Hemsworth', image: 'chris_hemsworth.jpg' },
                                            { name: 'Mark Ruffalo', image: 'mark_ruffalo.jpg' },
                                            { name: 'Chris Evans', image: 'chris_evans.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'themeg-small.jpg',
                                       tileUrl: 'themeg.jpg',
                                       bannerUrl: 'themeg-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/themeg.mp4',
                                       year: '2018',
                                       name: 'The Meg',
                                       class: 'movie-detail',
                                       duration: '121 min',
                                       watched: '10%',
                                       genre: 'Horror',
                                       description: 'Five years ago, expert sea diver and Naval Captain Jonas Taylor encountered an unknown danger in the unexplored recesses of the Mariana Trench that forced him to abort his mission and abandon half his crew. ',
                                       playDescription: 'Five years ago, expert sea diver and Naval Captain Jonas Taylor encountered an unknown danger in the unexplored recesses of the Mariana Trench that forced him to abort his mission and abandon half his crew. Though the tragic incident earned him a dishonorable discharge, what ultimately cost him his career, his marriage and any semblance of honor was his unsupported and incredulous claims of what caused it - an attack on his vessel by a mammoth, 70-foot sea creature, believed to be extinct for more than a million years. ',
                                       actors: [
                                            { name: 'Ruby Rose', image: 'ruby_rose.jpg' },
                                            { name: 'Jason Statham', image: 'jason_statham.jpg' },
                                            { name: 'Rainn Wilson', image: 'rainn_wilson.jpg' },
                                            { name: 'Bingbing Li', image: 'bingbing_li.jpg' },
                                            { name: 'Cliff Curtis', image: 'cliff_curtis.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'IronFist-small.jpg',
                                       tileUrl: 'IronFist.jpg',
                                       bannerUrl: 'IronFist-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/IronFist.mp4',
                                       year: '2012',
                                       name: 'Iron Fist',
                                       class: 'movie-detail',
                                       duration: '99 min',
                                       watched: '20%',
                                       genre: 'Action',
                                       description: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village.',
                                       playDescription: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village. Gold is betrayed by his lieutenants Silver Lion and Bronze Lion, who plan to steal the gold. They use the chaos ensuing from a fight with the Hyena Clan to allow their co-conspirator Poison Dagger',
                                        actors: [
                                          { name: 'Russell Crowe', image: 'Russell_Crowe.jpg' },
                                          { name: "Cung Le", image: 'Cung_Le.jpg' },
                                          { name: 'Lucy Liu', image: 'Lucy_Liu.jpg' },
                                          { name: 'Dave Bautista', image: 'Dave_Bautista.jpg' },
                                          { name: 'Rick Yune', image: 'Rick_Yune.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'Winchester-small.jpg',
                                       tileUrl: 'Winchester.jpg',
                                       bannerUrl: 'Winchester-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/Winchester.mp4',
                                       year: '2018',
                                       name: 'Winchester',
                                       class: 'movie-detail',
                                       duration: '99 min',
                                       watched: '10%',
                                       genre: 'Horror',
                                       description: 'Inspired by true events. On an isolated stretch of land 50 miles outside of San Francisco sits the most haunted house in the world. Built by Sarah Winchester, (Academy Award®-winner Helen Mirren) heiress to the Winchester fortune, it is a house that knows no end. ',
                                       playDescription: 'Inspired by true events. On an isolated stretch of land 50 miles outside of San Francisco sits the most haunted house in the world. Built by Sarah Winchester, (Academy Award®-winner Helen Mirren) heiress to the Winchester fortune, it is a house that knows no end. Constructed in an incessant twenty-four hour a day, seven day a week mania for decades, it stands seven stories tall and contains hundreds of rooms.',
                                       actors: [
                                            { name: 'Helen Mirren', image: 'helen_mirren.jpg' },
                                            { name: 'Sarah Snook', image: 'sarah_snook.jpg' },
                                            { name: 'Jason Clarke', image: 'jason_clarke.jpg' },
                                            { name: 'Emm Wiseman', image: 'emm_wiseman.jpg' },
                                            { name: 'Rebecca Makar', image: 'rebecca_makar.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'RoadHouse-small.jpg',
                                       tileUrl: 'RoadHouse.jpg',
                                       bannerUrl: 'RoadHouse-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/RoadHouse.mp4',
                                       year: '1989',
                                       name: 'Road House',
                                       class: 'movie-detail',
                                       duration: '114 min',
                                       watched: '10%',
                                       genre: 'Action',
                                       description: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri.',
                                       playDescription: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri. Tilghman plans to invest substantial money into the club to enhance its image and needs a first-rate cooler to maintain stability.',
                                        actors: [
                                          { name: 'Patrick Swayze', image: 'Patrick_Swayze.jpg' },
                                          { name: "Ben Gazzara", image: 'Ben_Gazarra.jpg' },
                                          { name: 'Kelly Lynch', image: 'Kelly_Lynch.jpg' },
                                          { name: 'Sam Elliott', image: 'Sam_Elliott.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'Covenant-small.jpg',
                                       tileUrl: 'Covenant.jpg',
                                       bannerUrl: 'Covenant-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/Covenant.mp4',
                                       year: '2017',
                                       name: 'Alien: Covenant',
                                       class: 'movie-detail',
                                       duration: '122 min',
                                       watched: '10%',
                                       genre: 'Horror',
                                       description: 'Almost eleven years after the futile and disastrous expedition on the distant moon LV-223, the deep-space colonisation vessel Covenant equipped with more than 2,000 colonists in cryogenic hibernation, sets a course for the remote planet Origae-6 with the intention to build a new world.',
                                       playDescription: 'Almost eleven years after the futile and disastrous expedition on the distant moon LV-223, the deep-space colonisation vessel Covenant equipped with more than 2,000 colonists in cryogenic hibernation, sets a course for the remote planet Origae-6 with the intention to build a new world. Instead, a rogue transmission will entice the crew to a nearby habitable small planet which resembles The Earth.',
                                       actors: [
                                            { name: 'Michael Fassbender', image: 'Michael_Fassbender.jpg' },
                                            { name: 'Katherine Waterston', image: 'Katherine_Waterston.jpg' },
                                            { name: 'Billy Crudup', image: 'Billy_Crudup.jpg' },
                                            { name: 'Danny McBride', image: 'Danny_McBride.jpg' },
                                            { name: 'Carmen Ejogo', image: 'Carmen_Ejogo.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'BeyondSkyline-small.jpg',
                                       tileUrl: 'BeyondSkyline.jpg',
                                       bannerUrl: 'BeyondSkyline-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/BeyondSkyline.mp4',
                                       year: '2017',
                                       name: 'Beyond Skyline',
                                       class: 'movie-detail',
                                       duration: '106 min',
                                       watched: '10%',
                                       genre: 'Horror',
                                       description: 'Mark Corley is a Los Angeles police detective who visits his estranged teenage son, Trent, having landed in jail due to brawling just as an alien invasion begins and the entire population of the city is sucked into various spaceships by the blue light.',
                                       playDescription: 'Mark Corley is a Los Angeles police detective who visits his estranged teenage son, Trent, having landed in jail due to brawling just as an alien invasion begins and the entire population of the city is sucked into various spaceships by the blue light. Mark leads a group of surviving humans through the underground subway tunnels to try to escape from the various aliens.',
                                       actors: [
                                            { name: 'Frank Grillo', image: 'frank_grillo.jpg' },
                                            { name: 'Bojana Novakovic', image: 'bojana_novakovic.jpg' },
                                            { name: 'Jonny Weston', image: 'jonny_weston.jpg' },
                                            { name: 'Callan Mulvey', image: 'callan_mulvey.jpg' },
                                            { name: 'Antonio Fargas', image: 'antonio_fargas.jpg' }
                                       ]
                                  }
                             ]
                        },
                        {
                             name: 'YOU MIGHT ALSO LIKE',
                             movies: [
                                  {
                                       posterUrl: 'Watchmen-small.jpg',
                                       tileUrl: 'Watchmen.jpg',
                                       bannerUrl: 'Watchmen-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/Watchmen.mp4',
                                       year: '2009',
                                       name: 'Watchmen',
                                       class: 'movie-detail',
                                       duration: '163 min',
                                       watched: '5%',
                                       genre: 'Action',
                                       description: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods.',
                                       playDescription: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods. Initially starting in 1939, during the fading Interwar Period, The "Minutemen," a team of costumed crime fighters, formed in response to a rise in costumed gangs and criminals; this creation and timeline occurring prior to, and similarly covering the 1960s Vietnam Era through mid-1980s Cold War Era America, saw the rise of The "Watchmen" team formed decades later.',
                                       actors: [
                                            { name: 'Malin Akerman', image: 'Malin_Akerman.jpg' },
                                            { name: 'Billy Crudup', image: 'Billy_Crudup.jpg' },
                                            { name: 'Matthew Goode', image: 'Matthew_Goode.jpg' },
                                            { name: 'Carla Gugino', image: 'Carla_Gugino.jpg' },
                                            { name: 'Patrick Wilson', image: 'Patrick_Wilson.jpg' }
                                       ]
                                  },
                                  {
                                       posterUrl: 'DieHard-small.jpg',
                                       tileUrl: 'diehard.jpg',
                                       bannerUrl: 'diehard-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/diehard.mp4',
                                       year: '1988',
                                       name: 'Die Hard',
                                       class: 'movie-detail',
                                       duration: '132 min',
                                       watched: '1%',
                                       genre: 'Action',
                                       description: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team.',
                                       playDescription: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team: Karl, Tony, Franco, Theo, Alexander, Marco, Kristoff, Eddie, Uli, Heinrich, Fritz, and James. The group seizes the tower and secures those inside as hostages except for McClane, who slips away, and Argyle, who gets trapped in the garage.',
                                        actors: [
                                          { name: 'Bruce Willis', image: 'daniel_craig.jpg' },
                                          { name: "Alan Rickman", image: 'eva_green.jpg' },
                                          { name: 'Alexander Godunov', image: 'mads_mikkelsen.jpg' },
                                          { name: 'Bonnie Bedelia', image: 'giancarlo_giannini.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'IronFist-small.jpg',
                                       tileUrl: 'IronFist.jpg',
                                       bannerUrl: 'IronFist-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/IronFist.mp4',
                                       year: '2012',
                                       name: 'Iron Fist',
                                       class: 'movie-detail',
                                       duration: '99 min',
                                       watched: '20%',
                                       genre: 'Action',
                                       description: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village.',
                                       playDescription: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village. Gold is betrayed by his lieutenants Silver Lion and Bronze Lion, who plan to steal the gold. They use the chaos ensuing from a fight with the Hyena Clan to allow their co-conspirator Poison Dagger',
                                        actors: [
                                          { name: 'Russell Crowe', image: 'Russell_Crowe.jpg' },
                                          { name: "Cung Le", image: 'Cung_Le.jpg' },
                                          { name: 'Lucy Liu', image: 'Lucy_Liu.jpg' },
                                          { name: 'Dave Bautista', image: 'Dave_Bautista.jpg' },
                                          { name: 'Rick Yune', image: 'Rick_Yune.jpg' }
                                        ]
                                  },
                                  {
                                       posterUrl: 'RoadHouse-small.jpg',
                                       tileUrl: 'RoadHouse.jpg',
                                       bannerUrl: 'RoadHouse-big.jpg',
                                       movieUrl: 'http://localhost:3000/assets/videos/RoadHouse.mp4',
                                       year: '1989',
                                       name: 'Road House',
                                       class: 'movie-detail',
                                       duration: '114 min',
                                       watched: '10%',
                                       genre: 'Action',
                                       description: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri.',
                                       playDescription: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri. Tilghman plans to invest substantial money into the club to enhance its image and needs a first-rate cooler to maintain stability.',
                                        actors: [
                                          { name: 'Patrick Swayze', image: 'Patrick_Swayze.jpg' },
                                          { name: "Ben Gazzara", image: 'Ben_Gazarra.jpg' },
                                          { name: 'Kelly Lynch', image: 'Kelly_Lynch.jpg' },
                                          { name: 'Sam Elliott', image: 'Sam_Elliott.jpg' }
                                        ]
                                  }
                             ]
                        }

                   ]
              }
         ];
         scope.searchData = [];

         // scope.searchData = [
         //      {
         //           posterUrl: 'CasinoRoyale-small.jpg',
         //           tileUrl: 'CasinoRoyale.jpg',
         //           bannerUrl: 'CasinoRoyale-big.jpg',
         //           movieUrl: 'http://localhost:3000/assets/videos/CasinoRoyale.mp4',
         //           year: '2018',
         //           name: 'Casino Royale',
         //           class: 'popular-casinoroyale',
         //           duration: '145 min',
         //           watched: '40%',
         //           genre: 'Action',
         //           description: 'MI6 agent James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan. In Uganda, the mysterious liaison Mr. White introduces warlord Steven Obanno of the Lord\'s Resistance Army to Le Chiffre, a terrorist financier.',
         //           playDescription: 'MI6 agent James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan. In Uganda, the mysterious liaison Mr. White introduces warlord Steven Obanno of the Lord\'s Resistance Army to Le Chiffre, a terrorist financier. Obanno entrusts Le Chiffre with a large sum of money to invest safely for him; instead Le Chiffre uses it to buy put options on the aerospace company Skyfleet, thus betting the money on the company\'s failure.',
         //            actors: [
         //              { name: 'Daniel Craig', image: 'daniel_craig.jpg' },
         //              { name: "Eva Green", image: 'eva_green.jpg' },
         //              { name: 'Mads Mikkelsen', image: 'mads_mikkelsen.jpg' },
         //              { name: 'Giancarlo Giannini', image: 'giancarlo_giannini.jpg' },
         //              { name: 'Jeffrey Wright', image: 'jeffrey_wright.jpg' }
         //            ]
         //      },
         //      {
         //           posterUrl: 'DieHard-small.jpg',
         //           tileUrl: 'diehard.jpg',
         //           bannerUrl: 'diehard-big.jpg',
         //           movieUrl: 'http://localhost:3000/assets/videos/CasinoRoyale.mp4',
         //           year: '2018',
         //           name: 'Die Hard',
         //           class: 'popular-casinoroyale',
         //           duration: '132 min',
         //           watched: '40%',
         //           genre: 'Action',
         //           description: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team.',
         //           playDescription: 'On Christmas Eve, NYPD detective John McClane arrives in Los Angeles, intending to reconcile with his estranged wife, Holly, at the Christmas party of her employer, the Nakatomi corporation. McClane is driven to the party by Argyle, an airport limousine driver. While McClane changes clothes, the party is disrupted by the arrival of a German terrorist, Hans Gruber, and his heavily armed team: Karl, Tony, Franco, Theo, Alexander, Marco, Kristoff, Eddie, Uli, Heinrich, Fritz, and James. The group seizes the tower and secures those inside as hostages except for McClane, who slips away, and Argyle, who gets trapped in the garage.',
         //            actors: [
         //              { name: 'Bruce Willis', image: 'daniel_craig.jpg' },
         //              { name: "Alan Rickman", image: 'eva_green.jpg' },
         //              { name: 'Alexander Godunov', image: 'mads_mikkelsen.jpg' },
         //              { name: 'Bonnie Bedelia', image: 'giancarlo_giannini.jpg' }
         //            ]
         //      },
         //      {
         //           posterUrl: 'IronFist-small.jpg',
         //           tileUrl: 'IronFist.jpg',
         //           bannerUrl: 'IronFist-big.jpg',
         //           movieUrl: 'http://localhost:3000/assets/videos/IronFist.mp4',
         //           year: '2012',
         //           name: 'Iron Fist',
         //           class: 'movie-detail',
         //           duration: '99 min',
         //           watched: '20%',
         //           genre: 'Action',
         //           description: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village.',
         //           playDescription: 'In nineteenth century China, Jungle Village is home to several warring clans. The village blacksmith creates deadly weapons for the clans, intending to use his payments to purchase the freedom of his lover Lady Silk, and leave the village. The region\'s governor tasks the Lion Clan\'s leader, Gold Lion, with protecting a large shipment of gold that must pass through the village. Gold is betrayed by his lieutenants Silver Lion and Bronze Lion, who plan to steal the gold. They use the chaos ensuing from a fight with the Hyena Clan to allow their co-conspirator Poison Dagger',
         //            actors: [
         //             { name: 'Russell Crowe', image: 'Russell_Crowe.jpg' },
         //             { name: "Cung Le", image: 'Cung_Le.jpg' },
         //             { name: 'Lucy Liu', image: 'Lucy_Liu.jpg' },
         //             { name: 'Dave Bautista', image: 'Dave_Bautista.jpg' },
         //             { name: 'Rick Yune', image: 'Rick_Yune.jpg' }
         //            ]
         //      },
         //      {
         //           posterUrl: 'Watchmen-small.jpg',
         //           tileUrl: 'Watchmen.jpg',
         //           bannerUrl: 'Watchmen-big.jpg',
         //           movieUrl: 'http://localhost:3000/assets/videos/Watchmen.mp4',
         //           year: '2009',
         //           name: 'Watchmen',
         //           class: 'movie-detail',
         //           duration: '163 min',
         //           watched: '5%',
         //           genre: 'Action',
         //           description: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods.',
         //           playDescription: 'Utilizing an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, whilst slightly mimicking both historically significant time periods. Initially starting in 1939, during the fading Interwar Period, The "Minutemen," a team of costumed crime fighters, formed in response to a rise in costumed gangs and criminals; this creation and timeline occurring prior to, and similarly covering the 1960s Vietnam Era through mid-1980s Cold War Era America, saw the rise of The "Watchmen" team formed decades later.',
         //           actors: [
         //                { name: 'Malin Akerman', image: 'Malin_Akerman.jpg' },
         //                { name: 'Billy Crudup', image: 'Billy_Crudup.jpg' },
         //                { name: 'Matthew Goode', image: 'Matthew_Goode.jpg' },
         //                { name: 'Carla Gugino', image: 'Carla_Gugino.jpg' },
         //                { name: 'Patrick Wilson', image: 'Patrick_Wilson.jpg' }
         //           ]
         //      },
         //      {
         //           posterUrl: 'RoadHouse-small.jpg',
         //           tileUrl: 'RoadHouse.jpg',
         //           bannerUrl: 'RoadHouse-big.jpg',
         //           movieUrl: 'http://localhost:3000/assets/videos/RoadHouse.mp4',
         //           year: '1989',
         //           name: 'Road House',
         //           class: 'movie-detail',
         //           duration: '114 min',
         //           watched: '10%',
         //           genre: 'Action',
         //           description: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri.',
         //           playDescription: 'James Dalton (Patrick Swayze) is a professional "cooler" (i.e., specialized doorman or bouncer) with a mysterious past who is enticed from his current job at a club in New York City by Frank Tilghman (Kevin Tighe) to take over security at his club/bar, the Double Deuce, in Jasper, Missouri. Tilghman plans to invest substantial money into the club to enhance its image and needs a first-rate cooler to maintain stability.',
         //            actors: [
         //              { name: 'Patrick Swayze', image: 'Patrick_Swayze.jpg' },
         //              { name: "Ben Gazzara", image: 'Ben_Gazarra.jpg' },
         //              { name: 'Kelly Lynch', image: 'Kelly_Lynch.jpg' },
         //              { name: 'Sam Elliott', image: 'Sam_Elliott.jpg' }
         //            ]
         //      }
         // ];

         scope.voiceFilteredData = function(genre) {
              var dataCollection = scope.completeData[0].groups[2].movies;
              scope.searchData = [];
              angular.forEach(dataCollection, function(dataItem) {
                   if(dataItem.genre.toLowerCase().trim() === genre) {
                        scope.searchData.push(dataItem);
                   }
              });
         }

         scope.resetSearchData = function() {
              scope.searchData = [];
         }

    }]);

})();

futureTv.directive('appDashboard', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardController'
    };
});


'use strict';

(function() {

     futureTv.controller('dashboardController', ['$scope', '$sce', '$location', '$document', '$localStorage', 'dataService', function(scope, sce, loc, doc, localStorage, dataService) {

          var numberOfTiles = 5;
          var bodyRef = angular.element(doc[0].body);
          var speechSynthesisUtterance = new SpeechSynthesisUtterance();
          var voices = window.speechSynthesis.getVoices();
          var voiceCommands = [
               "Action",
               "Drama",
               "Horror",
               "Mystery",
               "Science fiction"
          ];
          scope.voiceCommands = voiceCommands;
          scope.messages = [];
          scope.message = '';

          scope.config = {
               preload: "none",
               sources: [
               ],
               tracks: [{
                    src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
               }],
               theme: {
                    url: "http://localhost:/#/assets/css/videogular.css"
               }
          };

          scope.isPopup = false;
          scope.isVoiceLayer = false;
          scope.data = {};

          scope.goToMovieDetails = function(movie) {
               dataService.setData(movie, movies.selectedMovie);
               localStorage.userData = movie;
               loc.path('/movieDetails');
          }

          scope.goToLogin = function() {
               scope.searchData = [];
               loc.path('/');
          }

          scope.showVoiceLayer = function() {
              debugger;
               scope.isVoiceLayer = true;
               bodyRef.addClass('hide-scroll');
               voice.isContinues = true;
               voice.setCommands([{
                    voices: voiceCommands,
                    action: function(command) {
                         scope.searchMovies(command);
                    }
               }]);

               voice.start();
          }

          scope.closeVoiceLayer = function() {
               scope.isVoiceLayer = false;
               bodyRef.removeClass('hide-scroll');
               voice.stop();
          }

          scope.closePopup = function() {
               scope.isPopup = false;
          };

          scope.sendMessage = function() {
               scope.voiceFilteredData(scope.message.toLowerCase());
               scope.closeVoiceLayer();

               window.speechSynthesis.speak(speechSynthesisUtterance);
               scope.message = '';
          };

          scope.searchMovies = function(command) {
               scope.message = command;
               scope.sendMessage();
               scope.$apply();
          };

          scope.leftClick = function() {
               var view = document.getElementById('tslshow');
               var left = document.getElementById('left');
               var right = document.getElementById('right');

               var popularVideosLength = scope.completeData[0].groups[2].movies.length;
               var scrollLength = (popularVideosLength * 248);

               view.scrollLeft -= 248;

               numberOfTiles--;

               if (numberOfTiles <= 5) {
                    left.style.display = "none";
               } else {
                    left.style.display = "block";
               }

               if (numberOfTiles >= popularVideosLength) {
                    right.style.display = "none";
               } else {
                    right.style.display = "block";
               }

          }

          scope.rightClick = function() {

               var view = document.getElementById('tslshow');
               var left = document.getElementById('left');
               var right = document.getElementById('right');
               var popularVideosLength = scope.completeData[0].groups[2].movies.length;
               var scrollLength = (popularVideosLength * 248);

               view.scrollLeft += 248;

               numberOfTiles++;

               if (view.scrollLeft < 1) {
                    left.style.display = "none";
               } else {
                    left.style.display = "block";
               }

               if (numberOfTiles >= popularVideosLength) {
                    right.style.display = "none";
               } else {
                    right.style.display = "block";
               }
          }

          scope.init = function() {
               var view = document.getElementById('tslshow');
               var left = document.getElementById('left');
               var right = document.getElementById('right');

               if (view !== null && view.scrollLeft < 1) {
                    left.style.display = "none";
               }
          }

     }]);

})();

futureTv.directive('appLogin', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    };
});


'use strict';

(function() {

     futureTv.controller('loginController', ['$scope', '$location', '$document', '$timeout', function(scope, loc, document, timeout) {

          var bodyRef = angular.element(document[0].body);
          scope.data = {};
          scope.isCameraLayer = false;
          scope.isRegister = false;
          scope.isError = true;

          scope.closeError = function() {
               scope.isError = false;
          }

          scope.registerUser = function() {
               timeout(function () {
                    captureImage(scope.data.name);
               }, 1000);
          }

          scope.openCamera = function() {
               scope.isCameraLayer = true;
               scope.isRegister = true;
               startWebcamForRegister(true, scope.userName);
          }

          scope.showCamera = function() {
               scope.isCameraLayer = true;
               scope.isRegister = false;
               scope.verifyFaceCredentials();
          }

          scope.closeCamera = function() {
               scope.isCameraLayer = false;
               videoOff();
          }

          scope.verifyFaceCredentials = function() {
               var permisionDeniedMessage = 'You are not a registered user';
               scope.userName = 'Test';
               scope.userName = 'Authenticating the USER';
               scope.isWatchable = startWebcam(false);
          }

     }]);

})();

futureTv.directive('appMovieDetails', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/movieDetails.html',
        controller: 'movieDetailsController'
    };
});


'use strict';

(function() {

     futureTv.controller('movieDetailsController', ['$scope', '$location', '$timeout', '$window', '$document', '$localStorage', '$sessionStorage', '$route', 'dataService', function(scope, loc, timeout, window, document, localStorage, sessionStorage, route, dataService) {

          var bodyRef = angular.element(document[0].body);
          scope.isWatchable = false;
          scope.isCameraLayer = false;
          scope.movie = localStorage.userData;

          scope.userName = 'Test';

          scope.goToDashboard = function() {
               loc.path('/dashboard');
          }

          scope.goToMovieDetails = function(movie) {
               dataService.setData(movie, movies.selectedMovie);
               localStorage.userData = movie;
               loc.path('/movieDetails');
               route.reload();
          }

          scope.goToShoppingVideo = function() {
               window.location = 'http://localhost:3000/shopping.html';
          }

          scope.goToLogin = function() {
               loc.path('/');
          }

          scope.goToPlayMovie = function() {
               loc.path('/playMovie');
          }

          scope.verifyFaceCredentials = function() {

               var permisionDeniedMessage = 'You do not have permission to watch this video';
               scope.userName = 'Test';
               scope.isWatchable = false;
               scope.userName = 'Authenticating the USER';

               if(scope.movie.genre === 'Shopping') {
                    scope.goToShoppingVideo();
               }
          }

          scope.showCamera = function() {
               window.scrollTo(0, 0);
               scope.isCameraLayer = true;

               if(scope.movie.genre !== 'Shopping') {
                    startWebcamForMoviePermission(false);
                    scope.verifyFaceCredentials();
               }
               else {
                    scope.goToShoppingVideo();
               }

          }

          scope.closeCamera = function() {
               scope.isCameraLayer = false;
          }

          window.scrollTo(0, 0);

     }]);

})();

futureTv.directive('appPlayMovie', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/playMovie.html',
        controller: 'playMovieController'
    };
});


'use strict';

(function() {

     futureTv.controller('playMovieController', ['$scope', '$sce', '$location', '$window', '$document', '$sessionStorage', function(scope, sce, loc, window, document, sessionStorage) {

          var bodyRef = angular.element(document[0].body);
          scope.movie = {};
          scope.stretchModes = [{
                    label: "None",
                    value: "none"
               },
               {
                    label: "Fit",
                    value: "fit"
               },
               {
                    label: "Fill",
                    value: "fill"
               }
          ];
          scope.config = {
               width: 1100,
               height: 380,
               autoHide: false,
               autoPlay: false,
               responsive: true,
               stretch: scope.stretchModes[1],
               transclude: true,
               preload: "none",
               sources: [
                    // {src: sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
                    // {src: sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                    // {src: sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
               ],
               tracks: [{
                    src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
               }],
               theme: {
                    url: "http://localhost:3000/#/assets/css/videogular.css"
               }
          };

          scope.init = function(data) {
               var movie = JSON.parse(data);
               scope.movie = movie;
               if (movie !== undefined) {
                    var movieSrc = movie.movieUrl;
                    scope.config.sources = [{
                         src: sce.trustAsResourceUrl(movieSrc),
                         type: 'video/mp4'
                    }, ];
               }
          }

          scope.goToMovieDetails = function() {
               loc.path('/movieDetails');
          }

          scope.init(window.localStorage.getItem("ngStorage-userData"));
          window.scrollTo(0, 0);

     }]);

})();
