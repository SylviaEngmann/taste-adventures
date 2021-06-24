import Local from './Local';


const BASE_URL = '';

class Api {

    /**
    * Log in a user
     */
    
    static async loginUser(email, password) {
        // Prepare URL and options
        let url = `${BASE_URL}/login`;
        let body = { email, password };
        let options = { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        // Fetch!
        let response;
        try {
            response = await fetch(url, options);
            if (response.ok) {
                response.data = await response.json();
            } else {
                response.error = `Error ${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = { ok: false, error: err.message };
        }

        return response;
    }

    /**
     * Get all users 
     **/

    static async getUsers() {
        // Prepare URL and options
        let url = `${BASE_URL}/users`;
        let options = { method: 'GET' };

        // Fetch!
        let response;
        try {
            response = await fetch(url, options);
            if (response.ok) {
                response.data = await response.json();
            } else {
                response.error = `Error ${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = { ok: false, error: err.message };
        }

        return response;
    }

    /**
     * Get data for user with ID 'userId'
     */

    static async getUser(userId) {
        // Prepare URL and options
        let url = `${BASE_URL}/users/${userId}`;
        let options = { method: 'GET', headers: {} };

        // Add JWT token (if it exists)
        let token = Local.getToken();
        if (token) {
            options.headers['authorization'] = 'Bearer ' + token;
        }

        // Fetch!
        let response;
        try {
            response = await fetch(url, options);
            if (response.ok) {
                response.data = await response.json();
            } else {
                response.error = `Error ${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = { ok: false, error: err.message };
        }

        return response;
    }

    /**
     * General purpose GET (for routes like /members-only)
     */

    static async getContent(route) {
        // Prepare URL and options
        let url = `${BASE_URL}${route}`;
        let options = { method: 'GET', headers: {} };

        // Add JWT token (if it exists) in case content is protected
        let token = Local.getToken();
        if (token) {
            options.headers['authorization'] = 'Bearer ' + token;
        }

        // Fetch!
        let response;
        try {
            response = await fetch(url, options);
            if (response.ok) {
                response.data = await response.json();
            } else {
                response.error = `Error ${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = { ok: false, error: err.message };
        }

        return response;
    }

}

export default Api;