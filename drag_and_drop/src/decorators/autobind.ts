// autobind decorator
export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);//bind() - an object can borrow a method from another object
            return boundFn;
        }
    };
    return adjDescriptor;
}
