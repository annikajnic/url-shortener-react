"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = require("../api/axios");
const UrlShortener = () => {
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [shortUrl, setShortUrl] = (0, react_1.useState)('');
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleShorten() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.api.post('/shorten', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify({ longUrl: inputValue.trim() }),
                });
                setShortUrl(response.data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    return (<>
      <input onChange={handleChange} type="text" placeholder="Enter URL"/>
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (<p>
          <a href={shortUrl}>{shortUrl}</a>
        </p>)}
    </>);
};
exports.default = UrlShortener;
