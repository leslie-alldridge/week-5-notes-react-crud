const db = require('./connection')

export function getFavJobs () {
  console.log('you hit the func');
  
  return db('jobs').select()
}

export function saveFavJobs (job) {
  console.log('you hit the func');
  console.log(job);
  let title = job.title
  console.log(title);
  
  return db('jobs').insert({
    title: title
  }).then()
}

// module.exports = {
//   getFavJobs,
//   saveFavJobs
// }
