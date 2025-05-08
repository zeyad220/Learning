// Data structure for the alphabet with example words and images
const alphabetData = [
  {
    letter: "A",
    words: [
      { text: "Apple", image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg" },
      { text: "Airplane", image: "https://t3.ftcdn.net/jpg/07/08/18/60/360_F_708186090_K3RXta4fJKtK2v6DG3ORRTOURWxVzbCo.jpg" },
      { text: "Ant", image: "https://media.istockphoto.com/id/863759960/vector/vector-illustration-with-a-cute-ant.jpg?s=612x612&w=0&k=20&c=LPuJq9f_dFQ1iLgjnKwSpNCZKpqNWaLtSpWsbSPpAHU=" }
    ]
  },
  {
    letter: "B",
    words: [
      { text: "Ball", image: "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg" },
      { text: "Boat", image: "https://www.shutterstock.com/image-illustration/sailboat-watercolor-illustration-drawing-sailing-600nw-2465674739.jpg" },
      { text: "Butterfly", image: "https://images.pexels.com/photos/1321524/pexels-photo-1321524.jpeg" }
    ]
  },
  {
    letter: "C",
    words: [
      { text: "Cat", image: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg" },
      { text: "Cake", image: "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg" },
      { text: "Car", image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg" }
    ]
  },
  {
    letter: "D",
    words: [
      { text: "Dog", image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg" },
      { text: "Duck", image: "https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming.jpg" },
      { text: "Door", image: "https://static.vecteezy.com/system/resources/previews/033/854/740/non_2x/kids-drawing-illustration-two-panel-wooden-door-isolated-on-white-background-vector.jpg" }
    ]
  },
  {
    letter: "E",
    words: [
      { text: "Elephant", image: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg" },
      { text: "Egg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0713LZrkpR1vDF9wrD45zUf2bnTd4xflIQ&s" },
      { text: "Eye", image: "https://media.istockphoto.com/id/157140759/photo/childs-human-eye.jpg?s=612x612&w=0&k=20&c=1XbLcOTtrz-bapzFeWHFoU6jvqziQ6P6xSgQUB20ODg=" }
    ]
  },
  {
    letter: "F",
    words: [
      { text: "Fish", image: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg" },
      { text: "Flower", image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg" },
      { text: "Frog", image: "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg" }
    ]
  },
  {
    letter: "G",
    words: [
      { text: "Giraffe", image: "https://www.timeforkids.com/wp-content/uploads/2019/05/giraffe.jpg?w=1024" },
      { text: "Grapes", image: "https://images.pexels.com/photos/23042/pexels-photo.jpg" },
      { text: "Guitar", image: "https://www.bigjigstoys.co.uk/cdn/shop/products/t0056.jpg?v=1651695087" }
    ]
  },
  {
    letter: "H",
    words: [
      { text: "House", image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" },
      { text: "Hat", image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg" },
      { text: "Horse", image: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg" }
    ]
  },
  {
    letter: "I",
    words: [
      { text: "Ice cream", image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg" },
      { text: "Island", image: "https://i.pinimg.com/736x/52/56/58/525658a40c55858ae8d0aaf2e28f09cd.jpg" },
      { text: "Ice", image: "https://kidsdiscover.com/wp-content/uploads/2014/02/Heat-Cold-and-Energy-Science-of-Ice.jpg" }
    ]
  },
  {
    letter: "J",
    words: [
      { text: "Juice", image: "https://i0.wp.com/kidseatbyshanai.com/wp-content/uploads/2018/09/apple_juice_three_ways_sq4.jpg?fit=1200%2C1200&ssl=1" },
      { text: "Jump", image: "https://i.pinimg.com/736x/d7/57/fc/d757fc46fc1904fcf7154db10b481b00.jpg" },
      { text: "Jar", image: "https://m.media-amazon.com/images/I/61eR9LwSK4L.jpg" }
    ]
  },
  {
    letter: "K",
    words: [
      { text: "Kite", image: "https://usnannyinstitute.com/wp-content/uploads/2019/07/6f0e0e475f3e49b08431b97c22de4f32.jpg" },
      { text: "Kangaroo", image: "https://cdn.pixabay.com/photo/2021/07/20/11/12/kangaroo-6480433_960_720.jpg" },
      { text: "Key", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHh48C0cYozNWpkvOVsOqb0Z8ZTSR31yUFAw&s" }
    ]
  },
  {
    letter: "L",
    words: [
      { text: "Lion", image: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg" },
      { text: "Lemon", image: "https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg" },
      { text: "Lamp", image: "https://howtodrawforkids.com/wp-content/uploads/2022/01/how-to-draw-a-light-bulb-for-kids.jpg" }
    ]
  },
  {
    letter: "M",
    words: [
      { text: "Monkey", image: "https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg" },
      { text: "Moon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeOM6Wz_7Id03AKD1sZ3hJpFghM055vFSkQ&s" },
      { text: "Milk", image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg" }
    ]
  },
  {
    letter: "N",
    words: [
      { text: "Nest", image: "https://images.pexels.com/photos/158734/bird-nest-nature-birds-158734.jpeg" },
      { text: "Nose", image: "https://media.istockphoto.com/id/1130866996/vector/front-profile-human-nose-realistic-isolated-3d-icon-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=N9HYAGdrFYDeAQSejb58zePxKlxHtanW-kOxyleV9jM=" },
      { text: "Nurse", image: "https://collegeeducated.com/wp-content/uploads/2021/03/Pediatric-Nurse-Career-and-Education.jpg" }
    ]
  },
  {
    letter: "O",
    words: [
      { text: "Orange", image: "https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg" },
      { text: "Octopus", image: "https://thumbs.dreamstime.com/b/funny-friendly-cartoon-octopus-coloring-book-kids-60560854.jpg" },
      { text: "Owl", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9qYnH2dh2KYJQuQ0nY-m6DiKcLU3KM82dw&s" }
    ]
  },
  {
    letter: "P",
    words: [
      { text: "Penguin", image: "https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg" },
      { text: "Pizza", image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
      { text: "Prize", image: "https://i5.walmartimages.com/seo/Trophy-Award-Cup-Trophies-Gold-Plastic-Kids-Winner-Trophys-Cups-Reward-Awards-Mini-Party-School-Sports-Game-Prize_cdd9c397-4fc5-48a0-bb38-f540a8cf6732.7bb38236b003545ad209527c1ac3fa43.jpeg" }
    ]
  },
  {
    letter: "Q",
    words: [
      { text: "Queen", image: "https://www.drawing123.com/wp-content/uploads/2023/06/how-to-draw-a-queen-step-10-1.jpg" },
      { text: "Quil", image: "https://thumbs.dreamstime.com/b/chicken-quil-white-background-chicken-quil-white-background-250885215.jpg" },
      { text: "Quite", image: "https://media.istockphoto.com/id/1175798293/vector/cute-kid-teen-boy-show-facial-expression.jpg?s=612x612&w=0&k=20&c=7bObo4MIpGSKtGBpjpDAQGGR3WvoX3GH41_32BbPa6Y=" }
    ]
  },
  {
    letter: "R",
    words: [
      { text: "Rabbit", image: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg" },
      { text: "Robot", image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg" },
      { text: "Rainbow", image: "https://cdn.creatureandcoagency.com/uploads/2020/04/Rainbow-Final.jpg" }
    ]
  },
  {
    letter: "S",
    words: [
      { text: "Sun", image: "https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg" },
      { text: "Snake", image: "https://candidschools.com/wp-content/uploads/2024/05/How-to-Draw-a-Snake-Steps-6.jpg" },
      { text: "Star", image: "https://static.vecteezy.com/system/resources/previews/007/225/289/non_2x/star-3d-style-for-kids-game-vector.jpg" }
    ]
  },
  {
    letter: "T",
    words: [
      { text: "Tiger", image: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg" },
      { text: "Tree", image: "https://easydrawingguides.com/wp-content/uploads/2017/04/how-to-draw-a-cartoon-tree-featured-image-1200.png" },
      { text: "Train", image: "https://play-lh.googleusercontent.com/YtaYnm-Dba-k-4NARw6biUA6zPKE07N971BF3hrZS7NMitBn1PYkxH-7cHehxn0mefoh" }
    ]
  },
  {
    letter: "U",
    words: [
      { text: "Umbrella", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3tWeD3BJXJmsnuwNrL2zV8nqVnEikvXdMw&s" },
      { text: "Unicorn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS7qJe0xQpzf1lxBMwWoSGlrJlGW4gZjp_A&s" },
    ]
  },
  {
    letter: "V",
    words: [
      { text: "Violin", image: "https://i5.walmartimages.com/asr/15150e5c-9acb-44ac-ad8a-19504e8e3223.d39fcc70a190b6710654a61fbea5b981.jpeg" },
      { text: "Van", image: "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg" },
      { text: "Vegetables", image: "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg" }
    ]
  },
  {
    letter: "W",
    words: [
      { text: "Whale", image: "https://img.freepik.com/premium-vector/printable-cute-drawing-whale-school-kids_213861-1150.jpg" },
      { text: "Watch", image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg" },
      { text: "Window", image: "https://img.freepik.com/premium-vector/hand-drawn-kids-drawing-cartoon-vector-illustration-raindrops-window-icon-isolated_760559-1483.jpg" }
    ]
  },
  {
    letter: "X",
    words: [
      { text: "Xylophone", image: "https://i5.walmartimages.com/seo/Schylling-Wood-Xylophone-Children-s-Musical-Instrument_b4471fbe-88c6-46d5-9f84-ab61ad3ac752.6afce5d9cf4b3ac9e17b30276480f67c.jpeg" },
      { text: "X-ray", image: "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg" },
    ]
  },
  {
    letter: "Y",
    words: [
      { text: "Yogurt", image: "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1168599-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NzU3MTV8aW1hZ2UvanBlZ3xhREUyTDJneVpTOHhNVFl6TXpVek1qTXdOVFF6T0M4eE1UWTROVGs1TFRBeExtcHdaMTh4TWpBd1YzZ3hNakF3U0F8ZWNmMmI4Zjc2ZmI0MjkxZjMyMTVhNWFmNmNhMDU4YWUwMjg1NjU5Y2IwNmUyZWYxN2ZiZTkwYjhiNmJkYzcyNg" },
      { text: "Yo-yo", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/spin-press-launch-toy/2/c/p/yoyo-s-lizard-entry-level-yoyo-pro-yoyos-for-kids-and-adults-original-imagzxjzcgzusapa.jpeg?q=20&crop=false" },
      { text: "Yellow", image: "https://media.baamboozle.com/uploads/images/765097/1668945037_27839.jpeg" }
    ]
  },
  {
    letter: "Z",
    words: [
      { text: "Zebra", image: "https://images.pexels.com/photos/750539/pexels-photo-750539.jpeg" },
      { text: "Zoo", image: "https://i.pinimg.com/736x/86/3a/fb/863afb5cbba04fe1dd39470502d9b812.jpg" },
    ]
  }
];

// Function to track progress
const trackProgress = {
  // Initialize storage or use existing data
  init: function() {
    if (!localStorage.getItem('alphabetProgress')) {
      localStorage.setItem('alphabetProgress', JSON.stringify({}));
    }
    return JSON.parse(localStorage.getItem('alphabetProgress'));
  },
  
  // Mark a letter as viewed
  markLetterViewed: function(letter) {
    const progress = this.init();
    progress[letter] = { viewed: true, timestamp: new Date().toISOString() };
    localStorage.setItem('alphabetProgress', JSON.stringify(progress));
  },
  
  // Check if a letter has been viewed
  isLetterViewed: function(letter) {
    const progress = this.init();
    return progress[letter] && progress[letter].viewed;
  },
  
  // Get all viewed letters
  getViewedLetters: function() {
    const progress = this.init();
    return Object.keys(progress).filter(letter => progress[letter].viewed);
  },
  
  // Reset progress
  resetProgress: function() {
    localStorage.setItem('alphabetProgress', JSON.stringify({}));
  }
};
const numbersData = [
  { number: 1, words: [{ text: "One", image: "image_url_1" }] },
  { number: 2, words: [{ text: "Two", image: "image_url_2" }] },
  // Add more numbers as needed
];
const colorsData = [
  { name: 'Red', color: '#FF0000' },
  { name: 'Green', color: '#00FF00' },
  { name: 'Blue', color: '#0000FF' },
  { name: 'Black', color: '#000000' },
  { name: 'White', color: '#FFFFFF' },
  { name: 'Purple', color: '#800080' },
  { name: 'Orange', color: '#FFA500' },
  { name: 'Pink', color: '#FFC0CB' }
];