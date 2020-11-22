### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?  
A very explicite route that provides mapping between HTTP verbs (get, post, put, delete, patch)  
to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL   
to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.

- What is a resource?  
A resource in REST is a similar Object in Object Oriented Programming or is like an Entity in   
a Database. Once a resource is identified then its representation is to be decided using a   
standard format so that the server can send the resource in the above said format and client  
can understand the same format.

- When building a JSON API why do you not include routes to render a form that when submitted  
creates a new user?  
So that you can add validation checks before a user is created, to avoid having users with  
errors created.

- What does idempotent mean? Which HTTP verbs are idempotent?  
An operation that can be performed multiple times, where the result is the same wheather  
its called once or many times. GET, PUT/PATCH, and DELETE are idempotent verbs.

- What is the difference between PUT and PATCH?  
PUT will modify an entire resource, Patch will update a part of the resource.

- What is one way encryption?  
Hashing a password or other entry so that it can not be reversed and turned back into its  
original state.

- What is the purpose of a `salt` when hashing a password?  
Random data that is used as an additional input to a one-way function that hashes data, a  
password or passphrase. Salts are used to safeguard passwords in storage.

- What is the purpose of the Bcrypt module?  
Bcrypt is a library for generating strong hashing values in Python.  Makes it extremely  
difficult to hack passwords with brute force.

- What is the difference between authorization and authentication?  
Authentication confirms that users are who they say they are. Authorization gives those  
users permission to access a resource
