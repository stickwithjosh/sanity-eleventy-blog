export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60072a3547d984511c0babf9',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6bn3jyg3',
                  apiId: '7fafd63f-769d-40c9-8513-05d8dbd8ede1'
                },
                {
                  buildHookId: '60072a352d238c529695cc78',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-eqr1qxgz',
                  apiId: 'eb7c01c1-ac95-445e-b202-a165877682a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stickwithjosh/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-eqr1qxgz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
