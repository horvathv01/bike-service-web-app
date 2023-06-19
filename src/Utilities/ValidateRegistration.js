import validator from 'validator';

export function validateRegistration(user, PasswordCheck) {
    const errors = {};
  
    // Name validation
    if (!user.Name) {
      errors.Name = 'Name is required.';
    }
  
    // Email validation
    if (!user.Email) {
      errors.Email = 'Email is required.';
    } else if (!validator.isEmail(user.Email)) {
      errors.Email = 'Please enter a valid email address.';
    }
  
    // Phone validation
    if (!user.Phone) {
      errors.Phone = 'Phone number is required.';
    }
  
    // Password validation
    if (!user.Password) {
      errors.Password = 'Password is required.';
    } else if (!validator.isLength(user.Password, { min: 8 })) {
      errors.Password = 'Password must be at least 8 characters long.';
    } else if (!validator.isStrongPassword(user.Password)) {
      errors.Password = 'Password must be strong.';
    }
  
    // Password check validation
    if (user.Password !== PasswordCheck) {
      errors.PasswordCheck = 'Passwords do not match.';
    }
  
    // Introduction validation
    if (!user.Introduction) {
      errors.Introduction = 'Introduction is required.';
    }
  
    // Premium validation
    if (typeof user.Premium !== 'boolean') {
      errors.Premium = 'Premium must be a boolean value.';
    }
  
    return errors;
  }
  