exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('Likes').del()
      .then(function () {
        // Inserts seed entries
        return knex('Likes').insert([
          {
           
            post_id: 123,
            likes: 2
          },
          {
            
            post_id: 124,
            likes: 2
          },
          {
            
            post_id: 125,
            likes: 2
          },
          {
            
            post_id: 126,
            likes: 2
          }
        ])
      })
  }
  