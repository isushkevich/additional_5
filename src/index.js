module.exports = function check( str, bracketsConfig ) {
  let strLength = str.length;
  let bracketsConfigLength = bracketsConfig.length;
  let stack = [],
    count = 0;

  for ( let i = 0; i < strLength; ++i ) {
    for ( let j = 0; j < bracketsConfigLength; ++j ) {
      if ( str[ i ] == bracketsConfig[ j ][ 0 ] ) {
        stack.push( str[ i ] );
      }
      if ( str[ i ] == bracketsConfig[ j ][ 1 ] ) {
        if ( stack[ stack.length - 1 ] == bracketsConfig[ j ][ 0 ] ) {
          stack.pop();
        } else {
          stack.push( str[ i ] );
        }
      }
    }
  }

  return stack.length == 0 ? true : false;
}