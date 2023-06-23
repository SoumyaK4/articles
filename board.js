// Define variables
var boardSize = 19; // Adjust this according to your board size
var board = []; // Store the current state of the Go board
var currentPlayer = 'B'; // 'B' for black, 'W' for white
var sgfContent = ''; // Store the SGF file content

// Create the Go board
var boardContainer = document.getElementById('board');
for (var i = 0; i < boardSize; i++) {
  board[i] = [];
  for (var j = 0; j < boardSize; j++) {
    var intersection = document.createElement('div');
    intersection.className = 'intersection';
    intersection.dataset.row = i;
    intersection.dataset.col = j;
    intersection.addEventListener('click', handleIntersectionClick);
    boardContainer.appendChild(intersection);
    board[i][j] = null; // null indicates an empty intersection
  }
}

// Handle click events on the board intersections
function handleIntersectionClick(event) {
  var row = parseInt(event.target.dataset.row);
  var col = parseInt(event.target.dataset.col);
  if (board[row][col] === null) {
    board[row][col] = currentPlayer;
    event.target.className = 'intersection ' + currentPlayer;
    currentPlayer = currentPlayer === 'B' ? 'W' : 'B';
  } else {
    board[row][col] = null;
    event.target.className = 'intersection';
  }
}

// Load SGF file
var loadButton = document.getElementById('loadButton');
var fileInput = document.getElementById('fileInput');
loadButton.addEventListener('click', function() {
  fileInput.value = '';
  fileInput.click();
});

fileInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    sgfContent = e.target.result;
    displaySGFContent();
  };
  reader.readAsText(file);
});

// Save SGF file
var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', function() {
  var sgfBlob = new Blob([sgfContent], { type: 'text/plain' });
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(sgfBlob);
  downloadLink.download = 'game.sgf';
  downloadLink.click();
});

// Display SGF file content
function displaySGFContent() {
  var sgfTextarea = document.getElementById('sgfContent');
  sgfTextarea.value = sgfContent;
                     }
  
