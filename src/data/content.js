// Edit this file to change the text on your site.

export const site = {
  name: 'Amelie Wichert',
  tagline: 'Pro DJ',
  intro:
    'Pro DJ who likes minions and vibe coding',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
}

// Add a new project by copying one block and changing the slug.
// The slug becomes the page address: /project/project-one
export const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    summary: 'One or two sentences about what this project is and what you built.',
    description: [
      'Write what the project is and why you made it.',
      'Write how you built it and what you learned.',
    ],
    image: null, // later: '/images/project-one.jpg' (put the file in the public/images folder)
    link: null, // later: 'https://github.com/your-username/project-one'
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'Another short description. Keep it to two sentences.',
    description: ['Describe project two here.', 'Add more paragraphs if you want.'],
    image: null,
    link: null,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'A third project. Delete this one if you only have two.',
    description: ['Describe project three here.'],
    image: null,
    link: null,
  },
]
