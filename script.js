//fact generator //
var factList = [
"The water used to produce the food wasted could be used by 9 billion people at around 200 litres per person per day.", 
"More than 80 percent of Americans discard perfectly good food because they misunderstand expiration labels.", 
"By 2050, food production must be increased by 70% to meet the demand, which would also increase its environmental impact.",
"50% of the produce in the United States in never consumed.", 
"Food waste rotting in landfills produces substantial quantities of methane gas.", 
"Food takes up more space in US landfills than anything else.", 
"Globally, we waste about 1.4 billion tons of food every year.", 
"Wasting food contributes to 11 percent of the world’s greenhouse gas emissions.",
"Composting reduces organic waste in landfill, helping to reduce issues surrounding leachate and greenhouse gas emissions.",

];

function displayFact(){
	var randomNumber = Math.floor(Math.random() * (factList.length));document.getElementById('factGen').innerHTML = factList[randomNumber];
}

/**grocery guide **/

var apple = document.getElementById("apple");
var span = document.getElementsByClassName("close")[0];
apple.onclick = function() {
  var modal = document.getElementById("appleModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("appleModal");
  modal.style.display = "none";
}


var avocado = document.getElementById("avocado");
var span = document.getElementsByClassName("close")[1];
avocado.onclick = function() {
  var modal = document.getElementById("avocadoModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("avocadoModal");
  modal.style.display = "none";
}


var banana = document.getElementById("banana");
var span = document.getElementsByClassName("close")[2];
banana.onclick = function() {
  var modal = document.getElementById("bananaModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("bananaModal");
  modal.style.display = "none";
}



var berries = document.getElementById("berries");
var span = document.getElementsByClassName("close")[3];
berries.onclick = function() {
  var modal = document.getElementById("berriesModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("berriesModal");
  modal.style.display = "none";
}


var bread = document.getElementById("bread");
var span = document.getElementsByClassName("close")[4];
bread.onclick = function() {
  var modal = document.getElementById("breadModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("breadModal");
  modal.style.display = "none";
}


var butter = document.getElementById("butter");
var span = document.getElementsByClassName("close")[5];
butter.onclick = function() {
  var modal = document.getElementById("butterModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("butterModal");
  modal.style.display = "none";
}

var carrot = document.getElementById("carrot");
var span = document.getElementsByClassName("close")[6];
carrot.onclick = function() {
  var modal = document.getElementById("carrotModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("carrotModal");
  modal.style.display = "none";
}

var chicken = document.getElementById("chicken");
var span = document.getElementsByClassName("close")[7];
chicken.onclick = function() {
  var modal = document.getElementById("chickenModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("chickenModal");
  modal.style.display = "none";
}

var cucumber = document.getElementById("cucumber");
var span = document.getElementsByClassName("close")[8];
cucumber.onclick = function() {
  var modal = document.getElementById("cucumberModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("cucumberModal");
  modal.style.display = "none";
}

var eggs = document.getElementById("eggs");
var span = document.getElementsByClassName("close")[9];
eggs.onclick = function() {
  var modal = document.getElementById("eggsModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("eggsModal");
  modal.style.display = "none";
}

var lettuce = document.getElementById("lettuce");
var span = document.getElementsByClassName("close")[10];
lettuce.onclick = function() {
  var modal = document.getElementById("lettuceModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("lettuceModal");
  modal.style.display = "none";
}


var milk = document.getElementById("milk");
var span = document.getElementsByClassName("close")[11];
milk.onclick = function() {
  var modal = document.getElementById("milkModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("milkModal");
  modal.style.display = "none";
}


var potato = document.getElementById("potato");
var span = document.getElementsByClassName("close")[12];
potato.onclick = function() {
  var modal = document.getElementById("potatoModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("potatoModal");
  modal.style.display = "none";
}

var redmeat = document.getElementById("redmeat");
var span = document.getElementsByClassName("close")[13]
redmeat.onclick = function() {
  var modal = document.getElementById("redmeatModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("redmeatModal");
  modal.style.display = "none";
}

var seafood = document.getElementById("seafood");
var span = document.getElementsByClassName("close")[14]
seafood.onclick = function() {
  var modal = document.getElementById("seafoodModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("seafoodModal");
  modal.style.display = "none";
}

var tomato = document.getElementById("tomato");
var span = document.getElementsByClassName("close")[15];
tomato.onclick = function() {
  var modal = document.getElementById("tomatoModal");
  modal.style.display = "block";
}
span.onclick = function() {
  var modal = document.getElementById("tomatoModal");
  modal.style.display = "none";
}

// Grocery Bag Expiry Date List
function expiryDateGenerator() {

  var groceryBag = [];


  // key value pairs of food items and number of days it takes for them to expire
  var expiryDates = {
    'apples': 240,
    'avocados': 14,
    'bananas': 7,
    'berries': 5,
    'bread': 7,
    'butter': 180,
    'carrots': 28,
    'chicken': 270,
    'cucumbers': 7,
    'eggs': 35,
    'lettuce': 10,
    'milk': 3,
    'potatoes': 90,
    'redmeat': 360,
    'seafood': 90,
    'tomatoes': 14,
  }

    //pushing values of the chosen items into array
    $("#generatelist").click(function(){
        groceryBag = [];
        
        $("input[name='selector[]']:checked").each(function() {
            groceryBag.push($(this).val());
        });

        //accessing value of element in groceryBag in object expiryDates
        var daysBeforeExpiry = []
        for (var index in groceryBag) {
          const item = groceryBag[index]
          
          if (item in expiryDates) {
          daysBeforeExpiry.push(expiryDates[item])
          }
          else continue

          //adding number of days to current date to get expiration date
          let today = new Date().toLocaleDateString()
          function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            finalDate = (result.getMonth() + 1) + "/" + result.getDate() + "/" + result.getFullYear()
            return finalDate;
          }

          finalExpiryDate = addDays(today, expiryDates[item])
          console.log(item + " will expire on " + finalExpiryDate)

          var container = $('.dateList')
          container.append(`
            <div>
              <p class="expiryDateInfo">${item}: ${finalExpiryDate}</p>
            </div>
          `);
        
        event.preventDefault()
        }
        
      
        
    });
      
};




