
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {id: "e628c0dc-260c-11e8-8f45-0ad0cf84f7bf",
        created_at: "Mon Aug 27 19:34:13 UTC 2018",
        title: "Software Engineer (Kubernetes / Containers)",
        location: "Raleigh, NC",
        type: "Full Time",
        description: "<p><strong>Help us move to running Kubernetes – and deliver great Ku…",
        how_to_apply: "<p>Email your resume to <a href=\"mailto:taylaf@microsoft.com\&quo…",
        company: "Microsoft",
        company_url: "http://microsoft.com",
        company_logo: "http://github-jobs.s3.amazonaws.com/b5365b6a-260c-11e8-9128-3e3ad804da5f.jpg",
        url: "http://jobs.github.com/positions/e628c0dc-260c-11e8-8f45-0ad0cf84f7bf"},
        
        {
          id: "5e86406e-aa2d-11e8-8b10-1eb480af8b47",
          created_at: "Mon Aug 27 19:15:03 UTC 2018",
          title: "UI Engineer",
          location: "San Jose, CA",
          type: "Full Time",
          description: "<p>Are you a rock star technologist looking to join a SaaS start-up changi…",
          how_to_apply: "<p>Send your resume to <a href=\"mailto:adam@peopleconnectstaffing…",
          company: "PeopleConnect Staffing",
          company_url: "http://www.peopleconnectstaffing.com",
          company_logo: null,
          url: "http://jobs.github.com/positions/5e86406e-aa2d-11e8-8b10-1eb480af8b47"
        },
        
      ]);
    });
};
