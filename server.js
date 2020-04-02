const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const fs = require('fs');
const path = require('path');

var schema = buildSchema(`
    type Query {
        pose(id: Int!): Pose
    },
    type Pose {
        url: String
    }
`);

let poses = [];

const directoryPath = path.join(__dirname, 'public/img');
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 
  files.forEach(function (file) {
    poses.push({ url: file });
  });
});


var getPose = function(args) { 
    var id = args.id;
    console.log(id);
    return poses[id];
}

var root = {
    pose: getPose,
};

// Create an express server and a GraphQL endpoint

var app = express();

app.use('/static', express.static('public'));

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));