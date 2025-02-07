const money = -10;
if (money > 300) {
  console.log('You are rich enough');
} else {
  if (money > 100) {
    console.log('you are average');
  } else {
    if (money > 0) {
      console.log('you need to earn more money to survive');
    } else {
      console.log('you are not mine');
    }
  }
}
