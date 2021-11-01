# Mongoose find() Function
Fonte: geeksforgeeks.org
https://www.geeksforgeeks.org/mongoose-find-function/

## Os inserts estão no : db.users.insert.txt
´´´
db.users.insert( { name: "Punit", age: 0  } );
db.users.insert( { name: "Punit", age: 10 } );
db.users.insert( { name: "Punit", age: 20 } );
db.users.insert( { name: "Punit", age: 30 } );
db.users.insert( { name: "Punit", age: 40 } );
db.users.insert( { name: "Punit", age: 50 } );
´´´

# Resultado das consultas:
## First function call : 
´´´
[
  {
    _id: new ObjectId("61803a57358c3eb3700e5b02"),
    name: 'Punit',
    age: 0
  },
  {
    _id: new ObjectId("61803a8c358c3eb3700e5b03"),
    name: 'Punit',
    age: 10
  },
  {
    _id: new ObjectId("61803a93358c3eb3700e5b04"),
    name: 'Punit',
    age: 20
  },
  {
    _id: new ObjectId("61803a9d358c3eb3700e5b05"),
    name: 'Punit',
    age: 30
  },
  {
    _id: new ObjectId("61803aa4358c3eb3700e5b06"),
    name: 'Punit',
    age: 40
  },
  {
    _id: new ObjectId("61803aab358c3eb3700e5b07"),
    name: 'Punit',
    age: 50
  }
]
´´´

## Second function call :  
´´´
[
  { _id: new ObjectId("61803a57358c3eb3700e5b02"), name: 'Punit' },
  { _id: new ObjectId("61803a8c358c3eb3700e5b03"), name: 'Punit' },
  { _id: new ObjectId("61803a93358c3eb3700e5b04"), name: 'Punit' },
  { _id: new ObjectId("61803a9d358c3eb3700e5b05"), name: 'Punit' },
  { _id: new ObjectId("61803aa4358c3eb3700e5b06"), name: 'Punit' },
  { _id: new ObjectId("61803aab358c3eb3700e5b07"), name: 'Punit' }
]
´´´

## Third function call : 
´´´
[
  {
    _id: new ObjectId("61803a8c358c3eb3700e5b03"),
    name: 'Punit',
    age: 10
  },
  {
    _id: new ObjectId("61803a93358c3eb3700e5b04"),
    name: 'Punit',
    age: 20
  }
]
´´´
