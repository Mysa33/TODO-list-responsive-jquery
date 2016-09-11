var i = 0;
// Get local storage
function getStorage(){
	for ( i = 0; i < localStorage.length; ++i ) {
		tacheKey = localStorage.key( i );
		$("#taches").append("<li class = 'list-group-item'>"+localStorage.getItem(tacheKey) +" <button id='"+tacheKey+"'><i class='fa fa-times'></i>Effacer</button></li>");
        $("#taches li").addClass("list-group");
        $("#taches li button").addClass("btn btn-primary my-btn");
	}

}

// Set local storage
function setStorage(){    
    var taskVal = $("#tache").val();
    if (taskVal != "" ) {
        localStorage.setItem( "tache-"+i, taskVal );
		location.reload();
		
    }
	
}
// Get task/ Delete 
function getStorageID(){
    var elemID = this.id;
    var reg  =   /[0-9]/g;
    var numberInID = reg.test ( elemID );
    //si l'id du btn contient un int 
    if(numberInID == true){
          //Get int in ID    
          var re1='.*?';	
          var re2='([-+]\\d+)';	
          var p = new RegExp(re1+re2,["i"]);
          var m = p.exec(elemID);
          if (m != null){
              var signed_int1=m[1];//
              var intID = signed_int1.replace(/</,"&lt;");
              var taskIndex = 'tache'+intID;
			  alert();
              $('#'+taskIndex).remove();
              localStorage.removeItem(taskIndex);
			  location.reload();	
          }    
    }
}
//-- 
$(document).ready(function() {
    getStorage();
    $("#btnOne").on("click", setStorage);
    $(".my-btn").on("click", getStorageID);
    $("#btnTwo").on("click", function(){localStorage.clear();location.reload();});
});

