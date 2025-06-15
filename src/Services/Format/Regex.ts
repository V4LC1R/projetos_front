export function formatPhoneLive(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11); // Limita a 11 dígitos

  if (digits.length <= 2)
    return `(${digits}`;
  if (digits.length <= 6)
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isStrongPassword(value: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_=+]).{8,}$/.test(value);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);
}
