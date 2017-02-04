// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

// So in this example even if you click the window to trigger the click event. this event handler won't run until the global functions are finished.
// the waitThreeSeconds(); function runs first. It's the first one invoked. Then the console.log('finished execution'); and then it will handle your click event. bc JS is synchronous and only when it is finished completely with the execution context currently on the stack will it run new ones.
function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');
