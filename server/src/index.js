const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors')
const fs = require('fs');
const path = require('path');

var schema = buildSchema(`
  type Pose {
    url: String
  }
  type Query {
    pose(index: Int!): Pose
    poseCount: Int!
  }
`);

let poses = [];
const directoryPath = path.join(__dirname, 'public/img');
console.log(__dirname + "/public");
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 
  files.forEach(function (file, index) {
    if (file !== '.DS_Store') {
      poses.push({ url: `http://localhost:4000/static/img/${ file }` });
    }
  });
});

var getPose = function(i) {
  if (i.index < poses.length) {
    return poses[i.index];
  } else {
    return poses[0];
  }
}

var getPoseCount = function() {
  return poses.length;
}

var root = {
  pose: getPose,
  poseCount: getPoseCount,
};

var app = express();
app.use(cors())
app.use('/static', express.static(__dirname + '/public'));
app.use('/', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/'));
