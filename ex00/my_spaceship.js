function my_spaceship(value){
    const currentPosition = {x:0, y:0, direction:'up'};
    var i = 0;
    var action = '';
    while (value.length >= i){
        action = value.substring(i, i+1);
        
        switch (currentPosition.direction){
            
            case 'up':
                switch (action){
                    case 'A':
                        currentPosition.y--; 
                    break;
                    case 'R':
                        currentPosition.direction = 'right';
                    break;
                    case 'L':
                        currentPosition.direction = 'left';
                    break;
                };
            break;
            case 'down':
                switch (action){
                    case 'A':
                        currentPosition.y++; 
                    break;
                    case 'R':
                        currentPosition.direction = 'left';
                    break;
                    case 'L':
                        currentPosition.direction = 'right';
                    break;
                };
            break;
            case 'right':
                switch (action){
                    case 'A':
                        currentPosition.x++; 
                    break;
                    case 'R':
                        currentPosition.direction = 'down';
                    break;
                    case 'L':
                        currentPosition.direction = 'up';
                    break;
                };
            break;
            case 'left':
                switch (action){
                    case 'A':
                        currentPosition.x--; 
                    break;
                    case 'R':
                        currentPosition.direction = 'up';
                    break;
                    case 'L':
                        currentPosition.direction = 'down';
                    break;
                };
            break;
        };
        i++;
    };
    var currentPositionSTR = "{"+"x: "+currentPosition.x+", y: "+currentPosition.y+", direction: "+"'"+currentPosition.direction+"'"+"}";
    return currentPositionSTR;
};
