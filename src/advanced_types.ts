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
