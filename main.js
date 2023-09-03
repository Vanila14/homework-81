const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ]
const rainbow =['red', 'orange', 'yellow', 'green','blue','Indigo','Violet']

for (var i = 0; i < numbers.length; i++)
{
    if ((numbers[i] % 2) === 0)
{
console.log(numbers[i]);
}
}
for (let i = rainbow.length - 1; i >= 0; i--){
    console.log(rainbow[i])
}    


