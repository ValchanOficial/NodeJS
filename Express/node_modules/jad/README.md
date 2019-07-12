**! This is speaking about features not out yet, check version !**

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

# J.A.D. : Just A Directory

Tired of these dotfiles version tools that does so many things that you don't need nor want ?

The purpose of this tool is to **put your files in a directory... and that's it**.
You can now **version this directory** and handle things from there.

Well, of course there is a bit more or you would not need a tool in the first place.
It can : 
* Move any file to your versioned directory and put a symlink in place of the original location (v0.1.0)
* Save file original location (v0.2.0)
* Deploy all files with safety checks (if a file already exists, check or ask if it can overwrite) (v1.0.0)
    * Save a checksum of replaced files and mark them as safe to overwrite. (v1.1.0)
* Restore a file or all files (from symlink to physical) (v0.3.0)
* Check updates from upstream (git), warn you if any. (v0.4.0)
* Apply update if simple enough (v1.2.0)

[npm-image]: https://img.shields.io/npm/v/just-a-directory.svg
[npm-url]: https://npmjs.org/package/just-a-directory
[travis-image]: https://travis-ci.org/AdrienHorgnies/just-a-directory.svg?branch=master
[travis-url]: https://travis-ci.org/AdrienHorgnies/just-a-directory
[daviddm-image]: https://david-dm.org/AdrienHorgnies/just-a-directory.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/AdrienHorgnies/just-a-directory
