db.restaurants.find({})
db.restaurants.find({},{restaurant_id : 1, name : 1, borough: 1, cuisine: 1})
db.restaurants.find({},{restaurant_id : 1, name : 1, borough: 1, cuisine: 1, _id: 0})
db.restaurants.find({},{restaurant_id : 1, name : 1, borough: 1, address: {zipcode: 1}, _id: 0})
db.restaurants.find({borough: "Bronx"})
db.restaurants.find({borough: "Bronx"}).limit(5)
db.restaurants.find({borough: "Bronx"}).limit(5).skip(5)
db.restaurants.find({"grades.score": {$gt: 90}})
db.restaurants.find({$and:[{"grades.score": {$gt: 80}},{"grades.score": {$lt: 100}},]})
db.restaurants.find({"address.coord.0": {$lt: -95.754168}})
db.restaurants.find({$and:[{"grades.score": {$gt: 70}},{cuisine: { $not: {$regex: "American "}}},{"address.coord.0": {$lt: -65.754168}}]})
db.restaurants.find( { "grades.score" :  { $gt: 70}, cuisine: {$not: {$regex: "American "}}, "address.coord.0": {$lt: -65.754168}})
db.restaurants.find({$and:[{"grades.grade": {$regex: "A"}},{cuisine: { $not: {$regex: "American "}}},{borough: { $not: {$regex: "Brooklyn"}}}]}).sort({cuisine: -1})
db.restaurants.find({ name: {"$regex": "^Wil"}}, { restaurant_id:1, name:1, borough:1, cuisine: 1, _id:0 } )
db.restaurants.find({ name: {"$regex": "ces$"}}, {restaurant_id:1, name:1, borough:1, cuisine:1})
db.restaurants.find({"name" : {$regex : "Reg"}}, {restaurant_id:1, name:1, borough:1, cuisine:1})
db.restaurants.find({$and:[{borough: {$regex: "Bronx"}},{$or:[{cuisine: {$regex: "American "}},{cuisine: {$regex: "Chinese"}},]}]})
db.restaurants.find({$or:[{borough: {$regex: "Staten Island"}},{borough: {$regex: "Queens"}},{borough: {$regex: "Bronx"}},{borough: {$regex: "Brooklyn"}},]}, {_id: -1, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({$and:[{borough: { $not: {$regex: "Staten Island"}}},{borough: { $not: {$regex: "Queens"}}},{borough: { $not: {$regex: "Bronx"}}},{borough: { $not: {$regex: "Brooklyn"}}},]}, {_id: -1, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find( { grades: { $elemMatch: { score: { $lte: 10 }}}})
db.restaurants.find({$or:[{name: { $regex: "^Wil"}},{$and:[{cuisine: { $not: {$regex: "American "}}},{cuisine: { $not: {$regex: "Chinese"}}}]}]}, {_id: -1, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({grades: {$all: [{$elemMatch: {"grade": "A", "score": 11, "date": ISODate("2014-08-11T00:00:00Z")}}]}}, {_id: 0, restaurant_id: "$restaurant_id", name: "$name", grades: "$grades"})
db.restaurants.find( {  "grades.1" :  { date :  ISODate("2014-08-11T00:00:00Z") , grade : "A", score : 9  } } ,{_id :1, restaurant_id:1, name: 1,  grades:1 }  );
db.restaurants.find({$and: [{"address.coord.1": {$gt: 42}},{"address.coord.1": {$lt: 52}}]}, {_id : 0, restaurant_id : 1, name: 1, address : 1, coord: 1})
db.restaurants.find().sort({name : 1})
db.restaurants.find().sort({name : -1})
db.restaurants.find().sort({cuisine : 1, borough : -1})
db.restaurants.find({address: {$exists: true}})
db.restaurants.find({$and:[{ "address.coord.0" : { $type : "double" } },{ "address.coord.1" : { $type : "double" } }]})
db.restaurants.find({grades: {$all: [{$elemMatch: {score : { $mod:[ 7, 0 ]}}}]}}, {_id: 0, restaurant_id: "$restaurant_id", name: "$name", grades: "$grades"})
db.restaurants.find({$or: [{name: {"$regex": "mon"}},{name: {"$regex": "Mon"}}]}, {name:1, borough:1, cuisine:1, "address.coord.0": 1, "address.coord.1": 1})     
db.restaurants.find({ name: {"$regex": "^Mad"}}, {name:1, borough:1, cuisine:1, "address.coord.0": 1, "address.coord.1": 1})   
