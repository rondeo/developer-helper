export class Base64 {
    /**
     * Construct the base64 object.
     *
     * 'string' is the string written in a textearea, the one we want to
     * encode/decode.
     * 'result' is the result of the encoding/decoding.
     */
    constructor() {
        this.string = '';
        this.result = '';
    }

    /**
     * Encode 'string' to base64.
     *
     * Work with unicode.
     */
    encode() {
        this.result = btoa(unescape(encodeURIComponent(this.string)));
    }

    /**
     * Decode 'string' from base64.
     *
     * Work with unicode.
     */
    decode() {
        this.result = decodeURIComponent(escape(atob(this.string)));
    }
}
