const featuresToTest = require('../src/robotquest-features');



test('robot reaches the flag when its position meets `F` on the board', () => {
    let board = [
        ['.', 'F'] // only one line to this board
    ];
    let winningRobot = {
        position: {
            line: 0,
            column: 1
        },
        head: 'right'
    };

    let anotherRobot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'right'
    };


    expect(featuresToTest.checkIfFlagReached(winningRobot, board)).toBe(true);
    expect(featuresToTest.checkIfFlagReached(anotherRobot, board)).toBe(false);

});


/*test('Check if the robot is on water', () =>{
    let board = [
        ['.', 'W'] // only one line to this board
    ];
    let losingRobot = {
        position: {
            line: 0,
            column: 1
        },
        head: 'right'
    };

    let anotherRobot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'right'
    };


    //expect(featuresToTest.checkIfRobotIsOnWater(losingRobot, board)).toBe(true);
    //expect(featuresToTest.checkIfRobotIsOnWater(anotherRobot, board)).toBe(false);

});*/