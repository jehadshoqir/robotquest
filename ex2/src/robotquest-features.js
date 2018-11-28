module.exports =
    {turn, move, updateBoard, checkIfFlagReached, cloneRobot};

const SYMBOLS = {
    robot: SetReverse('R'),
    tree: colorInGreen('T'),
    flag: colorInYellow('F'),
    water: setBlueBg('w'),

}
module.exports.SYMBOLS = SYMBOLS;

const trailIndicators = {
    left: setBright('←'),
    right: setBright('→'),
    up: setBright('↑'),
    down: setBright('↓')
};

//Here we test
function turn(robot, step, turns) {
    console.log(step);
    console.log(robot.head);
    turns += 1;
    //
    switch (step.trim()) {
        case 'right':
            switch (robot.head){
                case 'up': robot.head='right';break;
                case 'right': robot.head='down'; break;
                case 'down': robot.head='left';break;
                case 'left': robot.head='up'; break;
            }
            console.log('Im inside the case' + robot.head);
            break;
        case 'turn-left':
            switch (robot.head) {
                case 'left': robot.head='down'; break;
                case 'down': robot.head='right'; break;
                case 'right': robot.head='up'; break;
                case 'up': robot.head='left'; break;
            }
            console.log('im inside the case left');
            break;


    }
    console.log(robot.head);
    return turns;
}

function move(robot, maxLineIndex, maxColumnIndex, nbOfMoves) {
    nbOfMoves += 1;
    return nbOfMoves;
}

function updateBoard(board, previousRobotState, currentRobotState) {
    return updateBoard();
}

function checkIfFlagReached(robot, board) {
    return false;
}

// utils
function cloneRobot(robot) {
    let newRobot = {};
    newRobot.position = {};
    newRobot.position.line = robot.position.line;
    newRobot.position.column = robot.position.column;
    newRobot.head = robot.head;
    return newRobot;
}


// presentation utils
/*
function colorInGreen("green") {
    return green;
}

function colorInYellow("yellow") {
    return yellow;
}

function setBlueBg("blue") {
    return blue;
}

function setReverse("reverse") {
    return reverse;
}

function setBright("right") {
    return right;
}
*/