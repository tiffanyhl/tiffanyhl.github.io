

$(document).ready(
  function()
  {
    var dx = $("#dx");
    var sec_title = $('#sec-title');
    var case_bg = $('#case-bg');
    var proc = $('#process');
    var row_1 = $('#row-1');
    var row_2 = $('#row-2');
    var row_3 = $('#row-3');
    
	dx.waypoint ({
	    handler: function() {
            sec_title.show(600);
            //case_bg.removeClass('invis');
        },
        offset: 150
        
	});
     
    proc.waypoint( {
        handler: function(direction) {
            if (direction == 'down') {
                //alert('hit');
                case_bg.removeClass('invis', 800);
            }
        },
        offset: 600
    });
      
    case_bg.waypoint( {
        handler: function(direction) {
            if (direction == 'down') {
                //alert('hit');
                row_1.animate({left: "0px"}, 1000);
            }
        },
        offset: -350
    });
    
    row_2.waypoint( {
        handler: function(direction) {
            if (direction == 'down') {
                //alert('hit');
                row_2.animate({right: "0px"}, 1000);
            }
        },
        offset: 150
    });
      
    row_3.waypoint( {
        handler: function(direction) {
            if (direction == 'down') {
                //alert('hit');
                row_3.animate({left: "0px"}, 1000);
            }
        },
        offset: 150
    });

  }
);

