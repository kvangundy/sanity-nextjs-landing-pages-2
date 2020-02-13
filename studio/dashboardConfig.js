export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e44de349ab03782e7315e1f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-61urki9y',
                  apiId: 'a5c993f6-57a8-4e23-bddc-a9e5082f4702'
                },
                {
                  buildHookId: '5e44de34a96a27590cfff70b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-zj2nycvf',
                  apiId: 'c234ff43-fb12-47f2-bd13-ec53c861df83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kvangundy/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-zj2nycvf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
