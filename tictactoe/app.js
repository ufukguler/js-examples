const table = document.getElementById("table");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

let array = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let turn = "X";

table.addEventListener("click", clickEvent);
btn.addEventListener("click", newGame);

function clickEvent(e) {
  if (e.target.textContent === "") {
    e.target.textContent = turn;
    setMove(e, turn);
    if (status(array, turn) == true) {
      finish(turn);
    }
    if (arrSize(array) == 9) {
      finish(false);
    }
    turn = changeTurn(turn);
  }
}

function newGame() {
  array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  result.textContent = "";
  turn = "X";
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      document.getElementById(`${i}${j}`).textContent = "";
    }
  }
  table.addEventListener("click", clickEvent);
  console.log(table);
  btn.addEventListener("click", newGame);
}

function changeTurn(turn) {
  if (turn === "X") {
    return "O";
  } else {
    return "X";
  }
}

function setMove(e, turn) {
  const index = Number(e.target.id);
  const column = Number(Math.floor(index / 10));
  const row = Number(index % 10);
  array[column - 1][row - 1] = turn;
}

function status(arr, turn) {
  // column
  if (arr[0][0] == turn && arr[0][1] == turn && arr[0][2] == turn) {
    return true;
  } 
  else if (arr[1][0] == turn && arr[1][1] == turn && arr[1][2] == turn) {
    return true;
  } 
  else if (arr[2][0] == turn && arr[2][1] == turn && arr[2][2] == turn) {
  }
  //row
  else if (arr[0][0] == turn && arr[1][0] == turn && arr[2][0] == turn) {
    return true;
  } 
  else if (arr[0][1] == turn && arr[1][1] == turn && arr[2][1] == turn) {
    return true;
  } 
  else if (arr[0][2] == turn && arr[1][2] == turn && arr[2][2] == turn) {
    return true;
  }
  // diagonal
  else if (arr[0][0] == turn && arr[1][1] == turn && arr[2][2] == turn) {
    return true;
  } 
  else if (arr[0][2] == turn && arr[1][1] == turn && arr[2][0] == turn) {
    return true;
  } 
  else {
    return false;
  }
}

function arrSize() {
  let count = 0;
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (array[x][y] != "") {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

function finish(param) {
  if (typeof param === "string") {
    result.textContent = `${param} wins!`;
    result.style.color = "green";
  } else if (param === false) {
    result.textContent = "tie";
    result.style.color = "red";
  }
  table.removeEventListener("click", clickEvent);
}
