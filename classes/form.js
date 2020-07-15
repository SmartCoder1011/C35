class form{
    constructor(){

    }
    display(){
        var title = createElement('h1')
        title.html("Car Racing Game")
        title.position(100,10);
        var input = createInput('name');
        input.position(100,100)
        var button = createButton('Submit')
        button.position(150,150);
        var greeting = createElement('h3');
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            greeting.position(100,120);
            greeting.html("Hello "+name)
            playerCount = playerCount+1;
            Player.updateCount(playerCount);
            Player.update(name);
        })
    }
}