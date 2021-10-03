$(document).ready(async function main(){    
    var game = {}
    
    game.name = await new Promise( function(resolve) {
        $(".nameButton").on("click", function addName() {
            let input = $(".nameInput")[0].value;
            if (input.trim() != "") {
                $(".nameButton").off("click", addName);
                $(".introFrame").hide();
                resolve(input);
            }
        });
    });
    

});