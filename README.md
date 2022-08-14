# What is multi-hit?

    multi-hit is a package which consist distinct methods for hitting a url multiple time at once. It is primarily used for checking the performance of any web application. We can hit any url with any type of http methods(e.g get, post, put, patch, delete etc).

# Installation :

'npm i multi-hit'

# Syntax :

require multiHit = require('multi-hit');

multiHit.GET(url, iterations); //for get request

multiHit.POST(url, iterations, option); //for post request

multiHit.PUT(url, iterations, option); //for put request

multiHit.PATCH(url, iterations, option); //for patch request

multiHit.DELETE(url, iterations); //for delete request

Here "url" is the url which you want to hit multiple times, "iterations" is the number as
often as you want to hit a url at once and "option" is an object through which you can send
your data in key-value pairs. Also each method returns a promise.

# Example :

require multiHit = require('multi-hitter');

const student = {
rollNo : 1001,
name : "John Doe",
class : "5th",
}

multiHit.GET("http://localhost:3000/view_student", 500);

multiHit.POST("http://localhost:3000/add_student", 500, student);

multiHit.PUT("http://localhost:3000/edit_student", 500, student);

multiHit.PATCH("http://localhost:3000/edit_student_details",500, student);

multiHit.DELETE("http://localhost:3000/remove_student", 500);
