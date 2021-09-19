# Bytes
Utilities for manipulating bytes, written in TypeScript.

## Installation
`npm install @rigidity/bytes`

## Types

### Endianness
Represents either `"little"` or `"big"` endian.

### Encoding
An exported alias for `BufferEncoding` for completeness.

## Functions

### Utilities
`concatBytes(...list: Buffer[]): Buffer`  

### String
`bytesToString(bytes: Buffer, encoding: Encoding): string`  
`stringToBytes(text: string, encoding: Encoding): Buffer`  

### Hex
`bytesToHex(bytes: Buffer): string`  
`hexToBytes(hex: string): Buffer`  

### BigInt
`bytesToInt(bytes: Buffer, endianness: Endianness): bigint`  
`intToBytes(int: bigint, size: number, endianness: Endianness): Buffer`  