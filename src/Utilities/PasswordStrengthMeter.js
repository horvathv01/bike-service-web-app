export function calculatePasswordStrength(password) {
    let strength = 0;
  
    if (password.length >= 8) {
      strength += 1;
    }
    
    const patterns = [
      /[a-z]/,
      /[A-Z]/,
      /[0-9]/,
      /[!@#$%^&*(),.?":{}|<>]/,
    ];
  
    patterns.forEach((pattern) => {
      if (pattern.test(password)) {
        strength += 1;
      }
    });
  
    let strengthLabel = '';
    switch (strength) {
      case 1:
        strengthLabel = 'Very Weak';
        break;
      case 2:
        strengthLabel = 'Weak';
        break;
      case 3:
        strengthLabel = 'Moderate';
        break;
      case 4:
        strengthLabel = 'Strong';
        break;
      case 5:
        strengthLabel = 'Very Strong';
        break;
      default:
        strengthLabel = '';
    }
  
    return strengthLabel;
  }
  