// The path module provides the ability to navigate files and directories and manipulate them, it can be accessed using;
const path = require('node:path');

// The default operation of this module depends on the operating system it's running on, for Windows it is;
path.basename('C:\\temp\\myfile.html');
// Which returns: 'myfile.html'

// You can also use .win32 to make sure it is usable across operating systems!
path.win32.basename('C:\\temp\\myfile.html');

console.log();