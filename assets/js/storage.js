function saveScoreBoardData(playerData) {
    var currentData = localStorage.getItem('debug-your-doubts');
    if(currentData == null) {
        currentData = [];
        currentData.push(playerData);
    }else {
        currentData = JSON.parse(currentData);
        currentData.push(playerData);
    }
    localStorage.setItem('debug-your-doubts', JSON.stringify(currentData));
}

function loadScoreBoardData() {
    const savedData = localStorage.getItem('debug-your-doubts');
    
    if (savedData) {
        return JSON.parse(savedData);
    }
    return null; // No data found
}