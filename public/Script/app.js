// immediately invoked function expression
// IIFI
(function(){
    function start(){
        console.log("Server Started");
    }
    window.addEventListner("load, start");
})();