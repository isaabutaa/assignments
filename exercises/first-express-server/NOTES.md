# Intro to REST API architecture

# REST - Representational State Transfer
# Resource - represents a single item(object) in a database
    /user
# Collection - a collection of similar items in a database
    /users
# Base (root) URL - every server has a base URL
    https://amazon.com/
# API Endpoint - 
    https://amazon.com/movies/
# Parameters - 
    /movies/:movieId
# Query (query string) - 
    /movies?genre=action&year=1999
# Client - front-end application that user is interacting with that is requesting data from API
# Server - intermediary - receives the request from the client and performs an action (passing to an API or something else)
# Request Method - CRUD - Create(POST) Read(GET) Update(PUT) Destroy(DELETE) 

# Middleware - a function that fires on the in-between
# Request Body(req. body)
# app.use(express.json()) // express.json looks for a request body, parses it from json to js and turns it into req.body

# Express Router - enables us to modularize our routes in Express

# URL Parameters
   # Parts of URL
      * Base - http://amazon.com
      * Endpoint - http://amazon.com/images
      * Parameter - http://amazon.com/images/2390580694353
      * Query 
   # Parameters (req.params) - GET One

# URL Queries
   # Query string - (typically to filter results)
      * Begins with the "?"
      * Built of key=value pairs
      * Multiple queries separated by the "&"