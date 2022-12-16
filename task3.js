class calculator {
static add (a,b)
{
  return a + b;
}
static subtract(a,b){
  if(a>b){return a - b;}
  return 0;
}
static multiply (a,b){
  return a * b;
}
static divide (a,b){
  if(a>b){return a / b;}
  return 0;
}
static Capitalize(str){
   return str.charAt(0).toUpperCase() + str.slice(1);
}
}

module.exports = calculator;