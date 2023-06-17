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
      case 0:
        strengthLabel = 'Very Weak';
        break;
      case 1:
        strengthLabel = 'Weak';
        break;
      case 2:
        strengthLabel = 'Moderate';
        break;
      case 3:
        strengthLabel = 'Strong';
        break;
      case 4:
        strengthLabel = 'Very Strong';
        break;
      default:
        strengthLabel = '';
    }
  
    return strengthLabel;
  }
  