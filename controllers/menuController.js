angular
    .module("sushiApp")
    .controller("menuController", function ($scope) {

        $scope.appetizers = [];
        $scope.salads = [];
        $scope.mains = [];
        $scope.desserts = [];
        $scope.drinks = [];

        function Appetizer(name, description, price, image) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        }

        function Salad(name, description, price, image) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        }

        function Main(name, description, price, image) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        }

        function Dessert(name, description, price, image) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        }

        function Drink(image) {
            this.image = image;
        }

        $scope.appetizers.push(new Appetizer("Edamame", "Boiled soybeans and kosher salt", "$5.95", "http://cdn2.momjunction.com/wp-content/uploads/2015/09/Edamame-During-Pregnancy.jpg"));
        $scope.appetizers.push(new Appetizer("Age Dashi Tofu", "Fried organic tofu with bonito flakes and tempura sauce", "$7.95", "http://www.boilandtrouble.com/wp-content/uploads/2016/03/2-1.jpg"));
        $scope.appetizers.push(new Appetizer("Tatsuta Age", "Fried marinated chicken thigh with wasabi tobiko mayo", "$7.95", "https://s3-media1.fl.yelpcdn.com/bphoto/QlF0mEku5vrFvqde3CuvEg/o.jpg"));
        $scope.appetizers.push(new Appetizer("Beef Negimaki", "Grille scallions wrapped in thinly sliced beef and Japanese BBQ sauce", "$10.95", "http://www.buildingflavor.com/wp-content/uploads/2013/02/negimaki2.jpg"));
        $scope.appetizers.push(new Appetizer("Yokohama Gyoza", "Six fried pork dumpling", "$6.95", "https://gaijinpot.scdn3.secure.raxcdn.com/wp-content/uploads/sites/4/2016/04/gyoza-festival.jpg"));
        console.log($scope.appetizers);

        $scope.salads.push(new Salad("Seaweed Salad", "Marinated sesame seaweed and mixed seaweed with sesame dressing", "$7.95", "https://i.pinimg.com/736x/d9/92/30/d9923077e54cb5f60ad2f542dccf3e5c--wakame-seaweed-seaweed-salad.jpg"));
        $scope.salads.push(new Salad("Grilled Shrimp and Avocacdo Salad", "Grilled marinated shrimp and diced avocado on organic greens with zesty wasabi dressing", "$10.95", "http://www.domesticate-me.com/wp-content/uploads/2013/08/summer-salad-with-avocado-corn-and-grilled-herb-shrimp-7.jpg"));
        $scope.salads.push(new Salad("Yaki Shabu Salad", "Grilled premium wagyu-beef on organic greens with ponzu-sesame dressing", "$11.95", "http://4.bp.blogspot.com/-dRSRpXsX5qE/VSTdtuXmCHI/AAAAAAAALEM/i8p2jRA-zFs/s1600/20150404_114819.jpg"));

        console.log($scope.salads);

        $scope.mains.push(new Main("Unagi Donburi", "Grilled BBQ eel and oshinko served over rice", "$21.95", "https://s-media-cache-ak0.pinimg.com/originals/94/6e/db/946edb54ed6ce234fc358b5f58a330fd.jpg"));
        $scope.mains.push(new Main("Tempura Udon", "2 pieces of shrimp and 3 pieces of vegetable tempura on udon noodle soup", "$14.95", "http://2.bp.blogspot.com/-Pgko_75eflg/VrABgPyasfI/AAAAAAAAIbg/_QUMgXKrLo0/s320/s_00mg.jpg"));
        $scope.mains.push(new Main("Sushi Deluxe", "Traditional nine piece sushi and one roll. May include uni according to availability", "$21.95", "http://www.ajisainy.com/9ave/data/images/sushi_deluxe.jpg"));
        $scope.mains.push(new Main("Miyabi", "Six piece traditional sushi, eight piece sashimi and one roll", "$18.95", "https://media-cdn.tripadvisor.com/media/photo-s/05/b9/49/e9/sushi-yasaka.jpg"));
        $scope.mains.push(new Main("Sashimi Deluxe", "Assorted 16 pieces sashimi served with rice", "$24.95", "http://hikarisushisimi.com/wp-content/uploads/2016/06/Sashimi-Deluxe.jpg"));
        $scope.mains.push(new Main("Omakase Sushi", "Twelve pieces and one chef's choice roll", "$44.95", "http://www.japanfly.co/upfile/article/d67d98466f57718b0cdbb672548f4ebf.jpg"));

        console.log($scope.mains);

        $scope.desserts.push(new Dessert("Tempura Ice Cream", "Tempura battered fried Ice cream", "$5.95", "https://media-cdn.tripadvisor.com/media/photo-s/09/f5/c3/06/wasabi-japanese-grill.jpg"));
        $scope.desserts.push(new Dessert("Mochi Ice Cream", "Round dessert ball consisting of a soft, pounded mochi formed around an ice cream filling", "$6.95", "https://s-media-cache-ak0.pinimg.com/originals/8c/66/a8/8c66a88e2e66ffe62b17ee68dcc83249.jpg"))

        $scope.drinks.push(new Drink("http://www.yamasho-sf.com/2016_Sake_Beer_Yamasho.jpg"));
        $scope.drinks.push(new Drink("http://www.yamasho-sf.com/2016_Wine.jpg"));

    })