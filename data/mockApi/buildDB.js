const path = require("path");
const fs = require("fs");
const chokidar = require("chokidar");

const log = console.log;
const startTime = Date.now();

const translationsPath = path.join(__dirname, '../translations');
const dbPath = path.join(__dirname, 'db.json');

const watchables = [translationsPath];



function buildDb () {
    log('Begin writing db.json...');

    const db = {
        translations: getTranslations()
    }

    writeDb(db);
}

function getTranslations () {
    const fileNames = fs.readdirSync(translationsPath);    

    log('Translations: Success');

    return fileNames.map(getTranslationsFromFile);
}

function getTranslationsFromFile (filename) {
    const locale = filename.split('.')[0];
    const fileContentString = fs.readFileSync(`${translationsPath}/${filename}`);

    return data = {
        locale,
        translations: JSON.parse(fileContentString)
    }
}

function writeDb (db) {
    const dbstring = JSON.stringify(db);

    fs.writeFileSync(dbPath, dbstring, 'utf8');
    log(`Writing db.json complete in ${(Date.now() - startTime) / 1000}s`);
}

function onFileChange (path) {
    log(`Changes in ${path}:`)
    log('Rebuilding db.json...');

    buildDb();
}

function onWatchError (err) {
    log(`Watcher error: ${err}`);
}



buildDb();

const watcher = chokidar.watch(watchables);
watcher
    .on('change', onFileChange)
    .on('error', onWatchError);
