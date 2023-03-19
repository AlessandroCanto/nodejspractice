//local depdency vs global dependy. use it every project/a particular projmect


//package json tells impoirtant info about project/package

const _ = require("lodash")
const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);