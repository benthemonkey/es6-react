(function thing() {
  const x = [1, 2, 3, 4, 5];

  console.log(x.map(a => a * 2 + 1));

  if (x.length) {
    let y = 5;
    console.log(y);
    y++;
  }

  console.log(y);
})();
