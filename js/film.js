class Film {
    
    /**
     * Constructor
     * @param {String} filmName
     * @param {String} filmDuration 
     * @param {String} memoryAddress
     */
    constructor (filmName, filmDuration, memoryAddress) {
        this.filmName = filmName;
        this.filmDuration = filmDuration;
        this.memoryAddress = memoryAddress;
    };


    /**
     * Get Film Name
     * Public
     * @returns {String}
     */
    GetFilmName () {
        return this.filmName;
    };


    /**
     * Get Film Duration
     * Public
     * @returns {String}
     */
    GetFilmDuration () {
        return this.filmDuration;
    };


    /**
     * Get Memory Address
     * Public
     * @returns {String}
     */
    GetMemoryAddress () {
        return this.memoryAddress;
    };


    /**
     * Get Film JSON
     * @returns {JSON}
     */
    GetFilmJSON () {
        const film = {
            filmName : this.filmName,
            filmDuration : this.filmDuration,
            memoryAddress : this.memoryAddress
        };
        return film;
    }

}

