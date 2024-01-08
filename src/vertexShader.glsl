const vertexShader = `
  uniform vec3 chargesPosition[NUM_CHARGES]; // Array of charge positions
  uniform float chargesMagnitude[NUM_CHARGES]; // Array of charge magnitudes
  attribute vec3 position; // Position of the arrow
  varying vec3 vElectricField; // Pass electric field to fragment shader
  void main() {
    vec3 totalElectricField = vec3(0.0);
    // Perform parallel computation for each charge
    for (int i = 0; i < NUM_CHARGES; i++) {
      vec3 chargePosition = chargesPosition[i];
      float chargeMagnitude = chargesMagnitude[i];
      // Calculate electric field contribution from this charge
      vec3 displacement = chargePosition - position;
      float distance = length(displacement);
      vec3 direction = normalize(displacement);
      vec3 electricField = (chargeMagnitude / (distance * distance)) * direction;
      // Accumulate electric field contributions
      totalElectricField += electricField;
    }
    vElectricField = totalElectricField;
    // Update the position of the arrow
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
