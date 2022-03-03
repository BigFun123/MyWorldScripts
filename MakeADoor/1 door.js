// add this to a door

var Door1;
function onStart(my) {
    Door1 = my;

    Door1.open = function() {
        Door1.position.x -= 2;

        setTimeout( function() {
            Door1.position.x += 2;
        }, 2000)
    }
}