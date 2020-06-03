module.exports = (instagram) => {
    instagram
    .pause(Math.random()*10000)
    .pause(8000)
    .click('@xpathfollowButton')
    .pause(7000)
    .pause(Math.random()*12000)
    .pause(Math.random()*8000)
    }
    3:03
    INSTAGRAM LOGIN
    3:03
    var user = {
    name: "perezwillz",
    password: "crackstickceo"
    }
    module.exports = (instagram) => {
    instagram
    .verify.visible("@instagramLogo")
    .verify.visible("@username")
    .verify.visible("@password")
    .verify.visible("@loginButton")
    .pause(1000)
    .setValue('@username', [user.name, instagram.api.Keys.ENTER])
    .setValue('@password', [user.password, instagram.api.Keys.ENTER])
    .click('@notificationButton')
    .pause(2000)
    }
    3:03
    INSTAGRAM SEARCH HASHTAG
    3:04
    var blackHashtag = [
    {search: '#blacklove'},
    {search: '#blackmendontcheat'},
    {search: '#blackcouples'},
    {search: '#melanin'},
    ]
    var fitness = [
    {search: '#vshred'},
    {search: '#vshredprogress'},
    {search: '#getfit'},
    {search: '#blackfitness'},
    {search: '#fitnessjourney'},
    {search: '#fitnessgoals'},
    {search: '#fitnessgains'},
    {search: '#weightloss'},
    {search: '#gymfitness'},
    {search: '#gymsharkmen'},
    {search: '#lafitness'},
    {search: '#crunchFitness'},
    {search: '#afrofitness'},
    {search: '#blackfitnessgoals'},
    {search: '#gains'},
    ]
    var development = [
    {search: '#iosdeveloper'},
    {search: '#blackdeveloper'},
    {search: '#iosdev'},
    {search: '#webdev'},
    {search: '#webdeveloper'},
    {search: '#fullstackdeveloper'},
    {search: '#softwaredeveloper'},
    {search: '#softwaredevelopers'},
    {search: '#uxdesigner'},
    {search: '#productdesigner'},
    {search: '#productmanager'},
    {search: '#QAEngineer'},
    {search: '#mobiledeveloper'},
    {search: '#blackdevelopers'},
    {search: '#blacksoftwareengineer'},
    {search: '#blackpeopleInTech'},
    {search: '#blackCoders'},
    {search: '#blackPeopleCode'},
    {search: '#blacktech'},
    {search: '#blackmatters'},
    {search: '#blacksuccess'},
    ]
    var christian = [
    {search: '#blackjesus'},
    {search: '#jesusisblack'},
    {search: '#blackjews'},
    {search: '#blackmenforchrist'},
    {search: '#jesusismyrock'},
    ]
    module.exports = (instagram) => {
    instagram
    // var arr = development
    // var index = arr[Math.floor(Math.random() * arr.length)]
    // let searchTerm = index.search
    // console.log('${searchTerm}')
    //.setValue('@searchBar', ["${searchTerm}", instagram.api.Keys.ENTER])
    .setValue('@searchBar', [development[0].search, instagram.api.Keys.ENTER])
    .pause(2000)
    .click("@firstUser")
    .pause(2000)
    }
    3:04
    LIKEPOST
    3:04
    module.exports = (instagram) => {
    instagram
    .click('@xpathNextUserButton')
    .pause(Math.random()*12000)
    .pause(Math.random()*12000)
    .pause(8000)
    .pause(Math.random()*9000)
    .click('@xpathLike')
    .pause(Math.random()*7000)
    .pause(Math.random()*12000)
    .pause(8000)
    .pause(Math.random()*9000)
    .pause(Math.random()*8000)
    }
    3:04
    TYPE FIRST USER FUNC
    3:05
    module.exports = (instagram) => {
    instagram
    .click('@firstXPathUserPhoto')
    .pause(2000)
    .click('@xpathLike')
    .pause(2000)
    }