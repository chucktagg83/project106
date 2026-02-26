function hello()
{
    console.log("Hello World");
}

// An example of changing the logic exec

function init ()
{
    hello();
    console.log("Hello this is the DOM")
}
// force my logic to run the html and css first
// when finsihed the logic will be executed
window.onload = init;