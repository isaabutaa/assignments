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
# Client - front-end application that user is interacting with
# Server - intermediary - receives the request from the client and performs an action (passing to an API or something else)
# Request Method - CRUD - GET POST PUT DELETE 