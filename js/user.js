class User {
    
    /**
     * Constructor
     * @param {String} userName
     * @param {String} id
     * @param {String} userEmail 
     * @param {String} userPassword 
     * @param {String} token
     */
    constructor (userName, id, userEmail, userPassword = null, token = null) {
        this.userName = userName;
        this.id = id;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.token = token;
    };


    /**
     * Get UserName
     * Public
     * @returns {String}
     */
    GetUserName () {
        return this.userName;
    };


    /**
     * Get Id
     * Public
     * @returns {String}
     */
    GetId () {
        return this.id;
    };

    /**
     * Get UserEmail
     * Public
     * @returns {String}
     */
    GetUserEmail () {
        return this.userEmail;
    };


    /**
     * Get UserPassword
     * Public
     * @returns {String}
     */
    GetUserPassword () {
        return this.userPassword;
    };


    /**
     * Get Token
     * Public
     * @returns {String}
     */
    GetToken () {
        return this.token;
    };


    /**
     * Generate LogIn JSON
     * @returns {JSON}
     */
    GenerateLogInJSON () {
        const user = {
            userName : this.userName,
            userPassword : this.userPassword
        };
        return user;
    }

};