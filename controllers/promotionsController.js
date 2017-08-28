angular
    .module("sushiApp")
    .controller("promotionsController", function ($scope) {
        $scope.myInterval = 3000;
        $scope.slides = [

        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Barack_Obama_and_Shinzo_Abe_at_Sukyabashi_Jiro_April_2014.jpg/1200px-Barack_Obama_and_Shinzo_Abe_at_Sukyabashi_Jiro_April_2014.jpg"
        },
        {
            "image": "http://s3.crackedcdn.com/phpimages/article/8/6/2/592862_v2.jpg"
        },
        {
            "image": "http://img.finedininglovers.com/?img=http%3A%2F%2Ffinedininglovers.cdn.crosscast-system.com%2FBlogPost%2FOriginal_14242_jiro-ono-sushi-guide.png&w=1200&h=660&lu=1480514487&ext=.jpg"
        },
        {
            "image": "https://s-media-cache-ak0.pinimg.com/736x/37/1c/86/371c86cb5f6a36a8281b5a309dceafb7--sukiyabashi-jiro-sushi-chef.jpg"
        }
    ];

    })