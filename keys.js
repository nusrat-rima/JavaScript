const computer = {
  brand: 'DELL',
  price: '65000',
  processor: 'intel',
  ssd: '512gb',
  monitor: 'Dell',
};

const keys = Object.keys(computer);
//console.log(keys)//it will show all the keys

const values = Object.values(computer);
//console.log(values)

// nested objects

const college = {
  name: 'SMC',
  class: [11, 12],
  events: ['science fair', '21st Feb', 'book fair'],
  unique: {
    color: 'Blue',
    result: 'GPA-5',
    merit: 'top',
  },
};
college.unique.merit='top top top'
console.log(college.unique.merit);
console.log(college.events[1])
// delete college.class;
// console.log(college)
