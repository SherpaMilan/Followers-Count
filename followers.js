let count = 0;

function showFollowers() {
    document.getElementById('countShow').innerHTML =count;
}

function increaseFollowers() {
  count++;  
    showFollowers();
    checkFollowersCount()
}

function checkFollowersCount() {
  if (count === 10) {
    alert("Your Instagram gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram gained 20 followers! Keep it up!");
  } 
}