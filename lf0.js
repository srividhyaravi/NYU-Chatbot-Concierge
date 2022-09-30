exports.handler = async (event) => {
    // TODO implement
    
    let mymsg = 
        [
            {
                type: "unstructured",
                unstructured: {
                    id: "11",
                    timestamp: "time",
                    text: "Application under development. Search functionality will be implemented in Assignment 2"
                }
            }
        ]
    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        messages: mymsg
    };
    return response;
};
