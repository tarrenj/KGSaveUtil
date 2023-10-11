const fs = require('fs');
const LZString = require('lz-string');

function compressAndEncode(data) {
    let jsonString = JSON.stringify(data);
    let compressedData = LZString.compressToBase64(jsonString);
    return compressedData;
}

function decodeAndDecompress(data) {
    let decompressedData = LZString.decompressFromBase64(data);
    return JSON.parse(decompressedData);
}

// Check for export.txt and decode if found
if (fs.existsSync('export.txt')) {
    let compressedString = fs.readFileSync('export.txt', 'utf8');
    let jsonData = decodeAndDecompress(compressedString);
    fs.writeFileSync('decoded.json', JSON.stringify(jsonData, null, 4));
    console.log('Decompressed export.txt and saved as decoded.json');
}

// Check for save.json and compress if found
if (fs.existsSync('save.json')) {
    let jsonString = fs.readFileSync('save.json', 'utf8');
    let jsonData = JSON.parse(jsonString);
    let compressedString = compressAndEncode(jsonData);
    fs.writeFileSync('compressed.txt', compressedString);
    console.log('Compressed save.json and saved as compressed.txt');
}

