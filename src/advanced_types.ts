//intersection types
type FileData = {
    path: string;
    content: string;
};

type Status = {
    isOpen: boolean;
    errorMessage?: string;//this field is optional
};

type AccessedFileData = FileData & Status;
//the same as with interfaces
/*
interface FileData {
    path: string;
    content: string;
}

interface Status {
    isOpen: boolean;
    errorMessage?: string;//this field is optional
}

interface AccessedFileData extends FileData, Status {}*/

// The `[prop: string]` part is an "index signature".
// It means that any object of type 'DataStore' can have ANY number of properties (keys).
// The keys must be of type 'string' (the property name), and the values must be of type 'number | boolean'.
type DataStore = {
    [prop: string]: number | boolean;// Index Signature: Key is a string, Value is a number or a boolean
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;
// store.name = 'Max';

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('max');
const firstRole = roles[0];

const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;
