module.exports = function check( str, bracketsConfig ) {
  let stack = [];

  for ( let i = 0; i < str.length; ++i ) {

    //if it's an opening -- just push it
    if ( str[ i ] == '{' || str[ i ] == '(' || str[ i ] == '[' || str[ i ] == '|' ) {
      stack.push( str[ i ] );
    }

    //if it's a closing -- check if it was open
    if ( str[ i ] == '}' ) {
      if ( stack[ stack.length - 1 ] == '{' ) {
        stack.pop();
      } else {
        return false;
      }
    }

    if ( str[ i ] == ')' ) {
      if ( stack[ stack.length - 1 ] == '(' ) {
        stack.pop();
      } else {
        return false;
      }
    }

    if ( str[ i ] == ']' ) {
      if ( stack[ stack.length - 1 ] == '[' ) {
        stack.pop();
      } else {
        return false;
      }
    }

    //if it's the second "|" in a row - remove it with the previous
    if ( str[ i ] == '|' ) {
      if ( stack[ stack.length - 2 ] == '|' ) {
        stack.pop();
        stack.pop();
      }
    }
  }

  if ( stack.length == 0 ) {
    return true;
  } else {
    return false;
  }

}