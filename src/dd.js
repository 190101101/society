const sanitizeHtml = require('sanitize-html');

const html = '<strong>hello world</strong>';
console.log(sanitizeHtml(html));
console.log(sanitizeHtml("<img src=x onerror=alert('img') />"));
console.log(sanitizeHtml("console.log('hello world')"));

const message = `<script>alert('hello world')</script>`;
const sanitize = sanitizeHtml(message).trim();

console.log('sanitize:', sanitize.length);
console.log('message:', message);
