// Calculate Lowest Common Multiple (LCM) of two numbers
function lcm(x, y) {
  function gcd(x, y) {
    return y ? gcd(y, x % y) : x;
  }
  return Math.abs(x * y) / gcd(x, y);
}

// Example usage
console.log(lcm(12, 18)); // Outputs: 36
