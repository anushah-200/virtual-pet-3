class Food{
    constructor(){
      
      this.image = loadImage("images/Milk.png");
    }
   getFoodStock(){
    database.ref("food").on("value",(data)=>{
         foodStock=data.val()
         text("food left:"+foodStock,250,100)
     })

       }
     updateFoodStock(data){
      database.ref("/").update({
        food:foodStock-data
       })  
    }
     deductFood(){
      if(foodStock!=0){
        foodStock--
      }  
     }
      display(){
        //image(this.image,350,220,70,70)
        var x=50
        var y=220
        if(foodStock!=0){
          for (var i=0;i<foodStock;i++){
            if(i%10==0){
              y+=50
              x=40
            }
            image(this.image,x,y,70,70)
            x+=30
          }
        }
      }
    bedroom(){
      background(bedroomimg,550,500)
    }
    washroom(){
      background(washroomimg,550,500)
    }
    garden(){
      background(gardenimg,550,500)
    }

 }