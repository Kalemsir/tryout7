// util/path.js (CommonJS)
const path = require('path');

// app.js çalıştırıldığı dizinin yolu:
module.exports = path.dirname(require.main.filename);
