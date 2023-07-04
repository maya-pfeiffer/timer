let seconds = process.argv.slice(2).map(Number);

const timer = ((array) => {
  let time = 0;
  let newArray = array.sort((a, b) => a - b);
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] >= 0 ) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time += newArray[i]*1000); 
}
}
});

timer(seconds);