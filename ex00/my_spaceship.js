function my_spaceship(value){
    var currentPosition = {x:0, y:0, direction:"UP"};
    var i = 0;
    var action = "";
    while (value.length >= i){
        action = value.substring(i, i+1);
        switch (currentPosition["direction"]){
            
            case "UP":
                switch (action){
                    case "A":
                        currentPosition["y"]--; 
                    break;
                    case "R":
                        currentPosition["direction"] = "RIGHT";
                    break;
                    case "L":
                        currentPosition["direction"] = "LEFT";
                    break;
                };
            break;
            case "DOWN":
                switch (action){
                    case "A":
                        currentPosition["y"]++; 
                    break;
                    case "R":
                        currentPosition["direction"] = "LEFT";
                    break;
                    case "L":
                        currentPosition["direction"] = "RIGHT";
                    break;
                };
            break;
            case "RIGHT":
                switch (action){
                    case "A":
                        currentPosition["x"]++; 
                    break;
                    case "R":
                        currentPosition["direction"] = "DOWN";
                    break;
                    case "L":
                        currentPosition["direction"] = "UP";
                    break;
                };
            break;
            case "LEFT":
                switch (action){
                    case "A":
                        currentPosition["x"]--; 
                    break;
                    case "R":
                        currentPosition["direction"] = "UP";
                    break;
                    case "L":
                        currentPosition["direction"] = "DOWN";
                    break;
                };
            break;
        };
        i++;
    };
    return currentPosition;
};
