document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady(){


    var push = PushNotification.init({ "android": {"senderID": "451225327502"}});

    push.on('registration', function(data) {
        console.log(data.registrationId);
        document.getElementById("gcm_id").innerHTML = data.registrationId;
    });

    push.on('notification', function(data) {
        alert(data.title+" Message: " +data.message);
    });

    push.on('error', function(e) {
        alert(e);
    });
    window.localStorage.clear();
    window.localStorage.setItem("spot3", "free");

}

var $ = Dom7;

$(document).on('pageInit', '.page[data-page="spot3"]', function (e) {
    
    var spot3 = window.localStorage.getItem("spot3");
    if(spot3 == 'taken'){
        $(".apply-now").hide();
        $(".pin").show();
        $(".free").html('3<br /> <span class="badge bg-red">Taken</span>');
    }else{
        $(".apply-now").click(function(){
            $(".pin").show();
            $(this).hide();
            $(".free").html('3<br /> <span class="badge bg-red">Taken</span>');
            window.localStorage.setItem("spot3", "taken");
        });
    }
    
});

$(document).on('pageInit', '.page[data-page="release"]', function (e) {
    $(".submit").click(function(){
        
        window.localStorage.setItem("spot56", "free");
    });
});

$(document).on('pageInit', '.page[data-page="index"]', function (e) {
    var spot3 = window.localStorage.getItem("spot3");
    var spot56 = window.localStorage.getItem("spot56");
    if(spot3 == 'taken'){
        $(".will-be-taken").html('<a href="#" class="item-link item-content">'+
                                    '<div class="item-inner">'+ 
                                        '<div class="item-title">Car Spot 3</div>'+
                                        '<div class="item-after"><span class="badge bg-red">Taken</span></div>'+
                                      '</div></a>');
    }
    if(spot56 == 'free'){
        $(".spot-pool").append('<a href="spot56.html" class="item-link item-content">'+
                                    '<div class="item-inner">'+ 
                                        '<div class="item-title">Car Spot 56</div>'+
                                        '<div class="item-after"><span class="badge bg-green">Free</span></div>'+
                                      '</div></a>');
    }

});
