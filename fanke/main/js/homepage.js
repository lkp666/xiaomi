    window.onload = function() {

        $(".Ulmain li:first-child").mousemove(function() {
            $(".Ul01").slideDown("fast");
        });
        $(".Ulmain li:first-child").mouseout(function() {
            $(".Ul01").slideUp("fast");
        });

        $(".Ulmain li:nth-child(2)").mousemove(function() {
            $(".Ul02").slideDown("fast");
        });
        $(".Ulmain li:nth-child(2)").mouseout(function() {
            $(".Ul02").slideUp("fast");
        });

    }