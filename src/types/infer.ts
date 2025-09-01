function add(a: number, b: number) {
    return a + b;
}

type AddFn = typeof add;

type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;
//That line is a conditional type with infer:
// extends (...args: any[]) => infer RV → checks if T is a function and captures its return type into RV.
// ? RV → if true, use that captured type.
// : never → if false, fallback to never.

type AddFnReturnValueType = ReturnValueType<AddFn>;