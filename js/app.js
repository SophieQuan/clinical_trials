/////// flowchart variables ///////
// variable to store Lung flowchart
let lung=[{
    "name":"Small Cell",
    "next":[{
        "name":"Limited",
        "next":null,
        'result': {
            "name":"Not Eligible", //eligible
            "type": "NE"
        }
    },
    {
        "name": "Extensive",
        "next":[{
            "name":"Maintenance",
            "next":null,
            "result":{
                "name":"(ABBVIE M16-298 / MERU RN: Marianna)", //eligible
                "type": "closed"
            }
        }]
    }]
},
{
    "name": "Non-Small Cell",
    "next":[{
        "name":"Resectable",
        "next":[{
            "name":"Adjuvant Therapy",
            'next':null,
            "result":{
                "name":"(CCTG) BR.31 RN: Marianna", //eligible
                "type": "open"
            }
        }]
    },
    {
        "name": "Unresectable",
        "next":[{
            "name":"First Line",
            "next":null,
            "result":{
                "name":"(ROCHE) BO29554 / BFAST) RN: Sam)", //eligible
                "type": "open"
            }
        },{
            "name":"Second Line",
            'next':null,
            "result":{
                "name":"BMS CA209-907", //eligible
                "type": "closed"
            }
        },{
            "name":"Third Line",
            "next":null,
            'result': {
                "name":"Not Eligible", //eligible
                "type": "NE"
            }
        }]
    }]
}];

//variable to store basket stydy
let basket={
    'eligible': false
};

$(document).foundation();


$(document).ready(function () {
//set up hamburger menu to reveal main menu
const MENU_SCREEN = document.querySelector('#hamburgerMenu');
const CLOSE_BUTTON = document.querySelector('#closeBtn');
const MENU_BUTTON1 = document.querySelector('#hamburger1');
const MENU_BUTTON2 = document.querySelector('#hamburger2');
const MENU_BUTTON3 = document.querySelector('#hamburger3');

// links variables
let about =  document.querySelector('#about');
let findTrials =  document.querySelector('#findTrials');

//function open the hamburger menu screen
function openMenu(){
    TweenMax.to(".page",1,{
        opacity:0.2
    })
    TweenMax.fromTo(MENU_SCREEN,1,{
        display: "block",
        opacity:0,
        x:350
    },{
        x:0,
        opacity:1,
        ease:Sine.easeOut
    })
}
//on click menu button on landing screen
MENU_BUTTON1.addEventListener('click', function(){
    openMenu();
});
//on click menu button on options/main screen
MENU_BUTTON2.addEventListener('click', function(){
    openMenu();
});
//on click menu button on options/main screen
MENU_BUTTON3.addEventListener('click', function(){
    openMenu();
});
//function close the menu screen
CLOSE_BUTTON.addEventListener('click', function(){
    TweenMax.fromTo(MENU_SCREEN,1,{
        x:0,
        opacity:1,
    },{
        display: "none",
        opacity:0,
        x:350,
        ease:Sine.easeIn
    })
    TweenMax.to(".page",1,{
        opacity:1
    })
});
// menu links
//function back to to landing screen or options screen
function backToLanding(){
    $('.mainPage, .resultsPage').hide();
    $('.landingPage').show();
    TweenMax.to('#hamburgerMenu',1,{
        opacity:0,
        x:350,
        display:'none'
    });
    TweenMax.fromTo('.landingPage',1,{
        opacity:0
    },{
        opacity:1,
        ease: Sine.easeOut
    });
    
}
function backToOptionsScreen(){
    $('.landingPage, .resultsPage').hide();
    $('.mainPage').show();
    $(".radioOptions").show();
    $(".lvl1,.lvl2,.lvl3").hide();
    $(".basket").hide();
    buttonDeactivivate();
    TweenMax.to('#hamburgerMenu',1,{
        opacity:0,
        x:350,
        display:'none'
    });
    TweenMax.fromTo('.mainPage',1,{
        opacity:0
    },{
        opacity:1,
        ease: Sine.easeOut
    });
}
//on click go back to landing screen
about.addEventListener('click',function(){
    backToLanding();
})
//on click go back to options/main screen
findTrials.addEventListener('click',function(){
    backToOptionsScreen();
})
//hide all main sections
$('main').hide();
// splash screen appears
$('.splashPage').show();
// splash screen disappers after 1s
TweenMax.to(".splashPage",1,{
    delay:1,
    x: 1500,
    display: "none",
    ease: Power1.easeOut,
    onComplete:function()
    {	
        // landing page screen appears
        $('.landingPage').show();
        TweenMax.from(".landingPage",1,{
            delay:0,
            opacity: 0
        });
    }
});

//setup back arrow button to go to the previous page
$(".arrowDivLand").click(function(e){
    $('.landingPage').show();
    TweenMax.to(".landingPage",1,{
        opacity:1
    })
    $('.mainPage, .resultsPage').hide();
});

//setup back arrow button to go to the previous page
$(".arrowDivResults").click(function(e){
    $('.mainPage').show();
    $('.resultsPage').hide();
});
let t1 = new TimelineMax();

//function to show main page when start research is clicked

$(".button_startResearch").click(function (e) { 
    e.preventDefault();
    
    $('.landingPage').hide();
    
    $('.mainPage').show();

    backToOptionsScreen();    
    t1.fromTo(".mainPage,.researchStudy_title",0.5,{
        opacity:0,
    },{
        opacity:1,
        ease: Sine.easeOut
    })
    
    .staggerFromTo(".theOption",0.5,{
        opacity:0
    },{
        opacity:1,
        ease: Sine.easeOut
    },0.2)
    .fromTo('.button_findEligibleStudy',0.05,{
        opacity: 0
    },{
        opacity:0.2,
        ease: Sine.easeOut
    })
});

$(".button_findEligibleStudy").css({opacity:0.2});

function resultAnimation(){
    TweenMax.fromTo(".resultsPage",1,{
        opacity:0
    },{
        opacity:1,
        ease: Sine.easeInOut
    });
    TweenMax.fromTo('.recruitmentContainer',0.5,{
        scaleY:0
    },{
        scaleY:1,
        delay:0.5
    })
    TweenMax.fromTo(".resultName",0.5,{
        opacity:0,
        y: "30px"
    },{
        opacity:1,
        y:0,
        delay:1
    });
    TweenMax.fromTo(".resultDetails",0.5,{
        opacity:0,
        scaleY: 0,
        transformOrigin: "top center",
    },{
        opacity:1,
        scaleY: 1,
        delay:1.5
    });
    TweenMax.fromTo(".basketResultName",0.5,{
        opacity:0,
        y: "30px"
    },{
        opacity:1,
        y:0,
        delay:2
    });
    TweenMax.fromTo(".basketResultDetails",0.5,{
        opacity:0,
        scaleY: 0,
        transformOrigin: "top center"
    },{
        opacity:1,
        scaleY: 1,
        delay:2.5
    });
}

    $(".radioOptions").hide();
    $(".basket").hide();
    //Condition
    let Current;
    $(".condition").show();
    $('.conditions').click(function() {
        buttonDeactivivate();
        $(".radioOptions").show();
        $(".lvl1,.lvl2,.lvl3").hide();
        $(".basket").hide();
        content=`<div class="large-12 medium-12 small-12">
        <h2 class="researchStudy_title">Type of Cancer </h2>
        </div>`;
        //$(".lvl1").slideDown();
        $(".lvl1").show();
        
        t1.fromTo('.lvl1',0.75,{
            y:"30px",
            opacity:0
        },{
            y:"0",
            opacity:1,
            ease: Sine.easeInOut
        })
        
        if ($(this).val() === '0') {
            Current=lung;
            lung.forEach((element,i) => {
                content+=`<div class="large-12 medium-12 small-12">
			<label class="theOption optionLv1">
                <input class="lvl1s" type="radio" name="lvl1" value="${i}"/>
                <i>${element.name}</i>
            </label>
			</div>`;
            });
        } else if ($(this).val() === '1') {
        } 
        $(".lvl1").html(content);
        lvl1();
    });
    //LEVEL 1
    function lvl1(){
    $('.lvl1s').click(function() {
        buttonDeactivivate();
        $(".lvl2,.lvl3").html("");
        let currentCondition=lung;
        if(currentCondition[$(this).val()].next !=  null )
        {
            $(".radioOptions").show();
            $(".lvl1,.lvl2,.lvl3").hide();
            $(".basket").hide();
            console.log("lvl1s clicked");
            content=`<div class="large-12 medium-12 small-12">
            <h2 class="researchStudy_title">Specify </h2>
            </div>`;
            //$(".lvl2").slideDown();
            $(".lvl2").show();
            TweenMax.fromTo('.lvl2',0.75,{
                y:"30px",
                opacity:0
            },{
                y:"0",
                opacity:1,
                ease: Sine.easeInOut
            });
            if ($(this).val() === '0') {
                currentCondition= lung[0];
                currentCondition.next.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl2s" type="radio"  name="lvl2" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            else if ($(this).val() === '1') {
                currentCondition= lung[1];
                currentCondition.next.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl2s" type="radio"  name="lvl2" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            else if ($(this).val() === '2') {
                currentCondition= lung[2];
                currentCondition.next.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl2s" type="radio"  name="lvl2" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            else if ($(this).val() === '3') {
                currentCondition= lung[3];
                currentCondition.next.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl2s" type="radio"  name="lvl2" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            $(".lvl2").html(content);
            lvl2(currentCondition);
            $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        }
    });
}
//LEVEL 2
function lvl2(currentCondition){
    buttonDeactivivate();
    $(".radioOptions").show();
    $(".lvl3").hide();
    $(".basket").hide();
    $('.lvl2s').click(function() {
        let current = currentCondition;
        $(".lvl3").hide();
        $(".basket").hide();

        if($(this).val()==0){
            buttonActivivate();
        }
        console.log(current);
        let currentResult= current.next[$(this).val()].result;
        if(current.next[$(this).val()].next !=  null ){
            content=`<div class="large-12 medium-12 small-12">
                <h2 class="researchStudy_title">Line of therapy</h2>
            </div>`;
            //$(".lvl3").slideDown();
            
            $(".lvl3").show();
            TweenMax.fromTo('.lvl3',0.75,{
                y:"30px",
                opacity:0
            },{
                y:"0",
                opacity:1,
                ease: Sine.easeInOut
            });
            if ($(this).val() === '0') {
                current = current.next[0].next;
                current.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl3s" type="radio"  name="lvl3" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            else if ($(this).val() === '1') {
                current= current.next[1].next;
                current.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl3s" type="radio"  name="lvl3" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            else if ($(this).val() === '2') {
                current= current.next[2].next;
                current.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl3s" type="radio"  name="lvl3" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            else if ($(this).val() === '3') {
                current= current.next[3].next;
                current.forEach((element,i) => {
                    content+=`<div class="large-12 medium-12 small-12">
				<label class="theOption">
                    <input class="lvl3s" type="radio"  name="lvl3" value="${i}"/>
                    <i>${element.name}</i>
                </label>
				</div>`;
                });
            }
            console.log(content);
            $(".lvl3").html(content);
            lvl3(current);
        }
        else{
                console.log(current);
                let result= currentResult;
                console.log(result);
                $(".button_findEligibleStudy").click(function (e) { 
                    
                    basket.eligible=false;

                    if(result.type ==  "NE" )
                    {
                        loadResult(result.type,result.name,"Not Eligible for any studies","grey");
                    }
                    else if(result.type ==  "closed" )
                    {
                        loadResult(result.type,result.name,"Studies are closed","orange");
                    }
                    else if(result.type ==  "open" )
                    {
                        loadResult(result.type,result.name,"Eligible for "+result.name,"green");
                    }
                });
            
        }
    });
}
//LEVEL 3
function lvl3(currentCondition){
    buttonDeactivivate();
    console.log(currentCondition);
    $(".lvl3s").change(function (e) { 
        buttonDeactivivate();
        $(".basketradio").prop("checked", false);
        let currentResult= currentCondition[$(this).val()].result;
        console.log(currentResult);
        if(currentCondition[$(this).val()].next !=  null ){
        }
        else{
            if(currentCondition[$(this).val()].name != "Maintenance")
            {

                //$(".basket").slideDown();
                $(".basket").show();
                TweenMax.fromTo('.basket',0.5,{
                    y:"30px",
                    opacity:0
                },{
                    y:"0",
                    opacity:1,
                    ease: Sine.easeInOut
                });
                
                let result= currentResult;
                $(".basketradio").change(function (e) { 
                    e.preventDefault();
                    buttonActivivate();
                        $(".button_findEligibleStudy").click(function (e) {
                            basket.eligible=false;

                            if($("#basketStudyRadioUnder").prop("checked") == true || $("#basketStudyRadioOver").prop("checked")==true)
                            {
                                e.preventDefault();
                                console.log(result);
                                if(document.getElementById("basketStudyRadioOver").checked == true){
                                    basket.eligible=true;
                                    console.log(basket.eligible);
                                }
                                else{
                                    basket.eligible=false;
                                    console.log(basket.eligible);
                                }
                
                                if(result.type ===  "NE" )
                                {
                                    loadResult(result.type,result.name,"Not Eligible for any studies","grey");
                                }
                                else if(result.type ===  "closed" )
                                {
                                    loadResult(result.type,result.name,"Studies are closed","orange");
                                }
                                else if(result.type ===  "open" )
                                {
                                    loadResult(result.type,result.name,"Eligible for "+result.name,"green");
                                }
                
                            }
                        });
                        
                });
            }
            else{
                let result= currentResult;
                    console.log(result);
                    buttonActivivate();
                    $(".button_findEligibleStudy").click(function (e) {
                        basket.eligible=false;

                        e.preventDefault();
                        console.log(result.type);
                        if(result.type ==  "NE" )
                        {
                            loadResult(result.type,result.name,"Not Eligible for any studies","grey");
                        }
                        else if(result.type ==  "closed" )
                        {
                            loadResult(result.type,result.name,"Studies are closed","orange");
                        }
                        else if(result.type ==  "open" )
                        {
                            loadResult(result.type,result.name,"Eligible for "+result.name,"green");
                        }
                        
                    });
            }
            
        }
    });
}
function buttonActivivate(){
    $(".button_findEligibleStudy").css({opacity:1});
    //enable button
    // $(".button_findEligibleStudy").prop('disabled', false);
    $(".button_findEligibleStudy").removeClass('disabled');

}
function buttonDeactivivate(){
    $(".button_findEligibleStudy").css({opacity:0.2});
    //enable button
    $(".button_findEligibleStudy").addClass('disabled');
}
function loadResult(status,head,details,color){
    
    $(".resultName").removeClass("greenHeader orangeHeader greyHeader");
    $(".resultDetails").removeClass("greenDetails orangeDetails greyDetails");

    $(".mainPage").hide();
    $(".resultsPage").show();
    
    $(".resultName").html(head).addClass(color+"Header");
    $(".resultDetails").html(details).addClass(color+"Details");

    if(basket.eligible  == true){

        $(".basketResultDetails").html("Eligible for Basket Studies");

        $(".basketResultName").removeClass("greyHeader");
        $(".basketResultDetails").removeClass("greyDetails");

        $(".basketResultName").addClass("greenHeader");
        $(".basketResultDetails").addClass("greenDetails");
        console.log("green");
    }
    else{

        $(".basketResultDetails").html("Not Eligible for Basket Studies");

        $(".basketResultName").removeClass("greenHeader");
        $(".basketResultDetails").removeClass("greenDetails");

        $(".basketResultName").addClass("greyHeader");
        $(".basketResultDetails").addClass("greyDetails");
        console.log("grey");
    }
    resultAnimation();
}


//== Test page ENDS  ==//
});
