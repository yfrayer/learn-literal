# Learn Literal
Translate text line by line and word by word.
Currently the app only translates from English into French. Other languages will be added in the future.

## Translation server
Learn Literal uses a [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) server to provide the translation endpoint. Other translation services may also be used.

## Running the app
Using npx version 9.4.2 and npx expo version 0.10.11:
```
npm install
URL_TRANSLATE="<URL_ENDPOINT_OF_TRANSLATION_SERVER>" npx expo start
```
