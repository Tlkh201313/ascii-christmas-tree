// Builds index.html (single self-contained page): inlines the song as base64.
// usage: node build.mjs [path/to/song.mp3]
import { readFileSync, writeFileSync } from 'node:fs';
const song = process.argv[2] || 'C:/Users/USER/Downloads/mp3-now.com - Sia  Snowman Karaoke Version.mp3';
const src = readFileSync(new URL('./src/christmas-tree.src.html', import.meta.url), 'utf8');
const b64 = readFileSync(song).toString('base64');
if (!src.includes('__SONG_B64__')) throw new Error('placeholder missing');
writeFileSync(new URL('./index.html', import.meta.url), src.replace('__SONG_B64__', b64));
console.log('wrote index.html,', (b64.length / 1e6).toFixed(2), 'MB of audio');
