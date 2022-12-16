class tasks{


   static stringLength = (string) => {
      if(string.length >= 1 && string.length <= 10)
      {
         return string.length;
      }
      return 0;

  }

  static reverseString = (string) => {
   const str = [...string].reverse().join('');
   return str;
  }

}
module.exports = tasks;