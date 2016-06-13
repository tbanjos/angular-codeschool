(function(){
	var app = angular.module('store',['store-products']);

	var gems = [
		{
			name:'Dodecahedron',
			price:2.95,
			description:'This is a beautiful rare and spetacular gem, you must buy it by a excellent price',
			canPurchase: true,
			soldOut:true,
			images:[
				{
					full: 'dodecahedron-01-full.jpg',
					thumb:'dodecahedron-01-thumb.jpg'
				},
				{
					full: 'dodecahedron-02-full.jpg',
					thumb:'dodecahedron-02-thumb.jpg'
				}
			],
			reviews:[
				{
					stars: 5,
					body:"I love this product",
					author:"joe@thomas.com"
				},
				{
					stars: 1,
					body:"This product sucks",
					author:"tim@hater.com"
				}
			]
		},
		{
			name:'Pentagonal Gem',
			price:5.95,
			description:'This spetacular gem is beautiful and rare, excellent price too',
			canPurchase: true,
			soldOut:false,
			images:[
				{
					full: 'dodecahedron-01-full.jpg',
					thumb:'dodecahedron-01-thumb.jpg'
				},
				{
					full: 'dodecahedron-02-full.jpg',
					thumb:'dodecahedron-02-thumb.jpg'
				}
			],
			reviews:[]
		},
				{
			name:'A Cheap Gem',
			price:0.15,
			description:'So cheap that does not even have an image',
			canPurchase: true,
			soldOut:false,
			images:[

			],
			reviews:[]
		}

	]
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	
//	app.controller('StoreController',[ '$http' , function($http){
//		var store = this;
		
//		store.products = [];
		
//		$http.get('/products.json').success(function(data){
//			store.products = data;
//		});
//	}]);
	
	app.controller('PanelController',function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	
	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});
		
	app.controller('ReviewController', function(){
		this.review = {};
		
		this.addReview = function(product){
			this.review.createdOn = new Date();
			product.reviews.push(this.review);
			this.review = {};
		};
		
    });
	
})();