class User {
    
    /**
     * Constructor
     * @param {String} userName
     * @param {String} userEmail 
     * @param {String} userPassword
     * @param {String} token
     */
    constructor (userName, userEmail, userPassword = null, token = null) {
        this.userName = userName;
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
    GetLogInJSON () {
        const user = {
            userName : this.userName,
            userPassword : this.userPassword
        };
        return user;
    }

    /**
     * Get UserName JSON
     * @returns {JSON}
     */
    GetUserNameJSON () {
        const userName = {
            userName : this.userName
        };
        return userName;
    }

}
