import React from 'react';

const Blogs = () => {
    return (
        <section className='my-10'>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
    <div className='border p-3 rounded-md border-primary'>
        <h1 className='footer-title'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
        <p>
        <strong>Access token:</strong> It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. <br />
     <strong>Refresh token:</strong> The refresh token is used to generate a new access token. When an access token expires, the client can use the refresh token to request a new access token without requiring the user to reauthenticate.
        </p>
        <p><strong>For web applications, we store those token "HttpOnly and local storage. But local storage is not best practice for keeping token."</strong></p>
    </div>

    <div className='border p-3 rounded-md border-primary'>
        <h1 className='footer-title'>Compare SQL and NoSQL databases?</h1>
        <p className='mb-2'>
        <strong>SQL databases:</strong> Stands for Structured Query Language.Relational database management system (RDBMS).Data is stored in tables with columns and rows.<br />
        <strong>Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server</strong> </p>
        <p>
     <strong>NoSQL databases:</strong> Stands for Not Only SQL.Non-relational database management system.Data is stored in collections or documents. <br />
     <strong>Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis</strong>
        </p>
    </div>


    <div className='border p-3 rounded-md border-primary'>
        <h1 className='footer-title'>What is express js? What is Nest JS?</h1>
        <p>
        <strong>Nest JS:</strong> NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. 
        </p>
        <p><strong>Express Js: </strong>Express is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries</p>
    </div>


    <div className='border p-3 rounded-md border-primary'>
        <h1 className='footer-title'>What is MongoDB aggregate and how does it work ?</h1>
        <p>
        <strong>MongoDB aggregate:</strong> Aggregation operations process multiple documents and return computed results.
        </p>
        <ul className='list-disc px-4'>
            <li><strong>db.collection.estimatedDocumentCount():</strong> Returns an approximate count of the documents in a collection or a view.</li>

            <li><strong>db.collection.count():</strong> Returns a count of the number of documents in a collection or a view.</li>

            <li><strong>db.collection.distinct(): </strong> 	
Returns an array of documents that have distinct values for the specified field.</li>
        </ul>
    </div>
</div>
        </section>
    );
};

export default Blogs;