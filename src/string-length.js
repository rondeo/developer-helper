export class StringLength {
    /**
     * Construct the module.
     *
     * Initialize the string to compute its length.
     */
    constructor() {
        this.string = '';
    }

    /**
     * Get a 's' if string is plurial, '' otherwise.
     *
     * @return string
     */
    get sIfPlurial() {
        return 1 !== this.string.length ? 's' : '';
    }
}
