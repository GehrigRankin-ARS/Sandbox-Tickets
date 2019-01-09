var request = require("request")

module.exports = {
    apiCall: function(req, jres){
        const clientData = {
            "grant_type": "client_credentials",
            "client_id": "ee47b14b-9dd0-4596-a50a-5edaa0490750",
            "client_secret": "fK1kL4yF1qN1hK5fQ5lU0oC0nQ5qI5qW6bL4tL7cU7bU1vS5bA",
            "scope": "hipaa"
        }
        
        request.post({ 
            url: "https://api.availity.com/availity/v1/token",
            form: clientData
        },
            function(err, res, bod){
                bod = JSON.parse(bod)
                console.log(bod)
    
                var options2 = {
                    method: 'GET',
                    url: 'https://api.availity.com/availity/v1/professional-claims/123',
                    headers: {
                        accept: 'application/json',
                        // 'content-type': 'application/json',
                        authorization: `Bearer ${bod.access_token}`
                    }
                };
                
                console.log(options2)
        
                request(options2, function (error, response, body) {
                    if (error) return console.error('Failed: %s', error.message);
                
                    console.log('Success: ', JSON.parse(body));
                    jres.json(JSON.parse(body))
                });
            }
        )
    }
}