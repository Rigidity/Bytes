import { toBigIntBE, toBigIntLE, toBufferBE, toBufferLE } from 'bigint-buffer';

export type Endianness = 'little' | 'big';
export type Encoding = BufferEncoding;

export function bytesToString(bytes: Buffer, encoding: Encoding): string {
    return bytes.toString(encoding);
}

export function stringToBytes(text: string, encoding: Encoding): Buffer {
    return Buffer.from(text, encoding);
}

export function bytesToHex(bytes: Buffer): string {
    return bytes.toString('hex');
}

export function hexToBytes(hex: string): Buffer {
    return Buffer.from(hex, 'hex');
}

export function bytesToInt(bytes: Buffer, endianness: Endianness): bigint {
    return endianness === 'little' ? toBigIntLE(bytes) : toBigIntBE(bytes);
}

export function intToBytes(int: bigint, endianness: Endianness): Buffer {
    const size = Math.ceil(int.toString(16).length / 2);
    return endianness === 'little'
        ? toBufferLE(int, size)
        : toBufferBE(int, size);
}

export function concatBytes(...list: Buffer[]): Buffer {
    let length = 0;
    for (const bytes of list) length += bytes.length;
    const result = Buffer.alloc(length);
    let index = 0;
    for (const bytes of list) {
        result.set(bytes, index);
        index += bytes.length;
    }
    return result;
}
