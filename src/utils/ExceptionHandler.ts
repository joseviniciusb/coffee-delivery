export function ExceptionHandler() {
  return (propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      try {
        return originalMethod.apply(this, args);
      } catch (error) {
        console.error(`Error in ${propertyKey}:`, error);
        throw error; // rethrow the error after logging it
      }
    };

    return descriptor;
  };
}
