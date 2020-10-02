export const required = (value) => {
   return !value ? 'Field is required' : undefined;
}

export const maxLength = (max) => (value) => {
    return (value && value.length > max) ? `Must be ${max} characters or less` : undefined;
}