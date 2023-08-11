/// <reference types="node" />
import { Buffer } from "buffer";
import { MobilettoListOptions, MobilettoMetadata, MobilettoMinimalClient, MobilettoOptions, MobilettoRemoveOptions, MobilettoVisitor, MobilettoWriteSource, MobilettoDriverInfo, MobilettoDriverScope } from "mobiletto-base";
export type IdbInfoType = {
    driver: string;
    scope: MobilettoDriverScope;
};
export declare const IdbInfo: IdbInfoType;
export declare class StorageClient {
    indexedDB: IDBFactory;
    readonly dbName: string;
    readonly dbPromise: Promise<IDBDatabase>;
    db: IDBDatabase | null;
    rootStore: IDBObjectStore | null;
    constructor(dbName: string, opts: {
        indexedDB: IDBFactory;
    });
    testConfig: () => Promise<MobilettoMetadata[]>;
    info: () => MobilettoDriverInfo;
    mdb: () => Promise<IDBDatabase>;
    list(pth?: string, optsOrRecursive?: MobilettoListOptions | boolean, visitor?: MobilettoVisitor): Promise<MobilettoMetadata[]>;
    _list(pth?: string, recursive?: boolean, visitor?: MobilettoVisitor): Promise<MobilettoMetadata[]>;
    metadata(path: string): Promise<MobilettoMetadata>;
    write(path: string, generatorOrReadableStream: MobilettoWriteSource): Promise<number>;
    read(path: string, callback: (chunk: Buffer) => void, endCallback?: () => void): Promise<number>;
    remove(path: string, optsOrRecursive?: MobilettoRemoveOptions | boolean, quiet?: boolean): Promise<string[] | string>;
}
export type IdbMobilettoOptions = MobilettoOptions & {
    indexedDB: IDBFactory;
};
export declare const storageClient: (key: string, secret?: string, opts?: IdbMobilettoOptions) => MobilettoMinimalClient;
