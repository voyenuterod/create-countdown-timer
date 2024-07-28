var seconds = 119,
    countDiv = document.getElementById('countdown'),
    secondPass,

    countDown = setInterval(function(){
        "use strict";

        secondPass();
    },1000);s
function secondPass(){
    "use strict";

    var minutes = Math.floor(seconds / 60),
        remSeconds = seconds % 60;

        if (seconds < 10){
            remSeconds = "0" + remSeconds;
        }
    countDiv.innerHTML = minutes + ":" + remSeconds;

    if (seconds > 0){
        seconds = seconds - 1;

    } else {
        clearInterval(countDown);
        countDiv.innerHTML = "Done!!";
    }};.
.
...///main
///
////////
.......
main
///
**** 
,,,,

    \.....
//////  </div>
        <!--end of single store item-->
        <!-- single item -->
        <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item doughnuts" data-item="dougnuts">
          <div class="card ">
            <div class="img-container">
              <img src="img/doughnut-1.jpeg" class="card-img-top store-img" alt="">
              <span class="store-item-icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
            </div>
            <div class="card-body">
              <div class="card-text d-flex justify-content-between text-capitalize">
                <h5 id="store-item-name">dougnut item</h5>
                <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">5</strong></h5>

              </div>
            </div>
///////////////////
//////////////////
//////////////////////////
///////////////////////////
///////////////////////////
/////////////////////
///////////////////////////
////////////////////////////////////////
//////////////////
////////////////////////////
////////////////////////
////////////////////////////////////
//////////////////
//////////////////////
///////////////////////
//////////
////////////////
////////////////////
//////////////////////////////////////////
//////////////////////////
/////////////////////////////////////
////////////////////
////////////////////////////////////////////////////////
////////////////////////
////////////////////////////////
//////////////////////////////
//////////////////////////
////////////////////////////////////
///////////////////
