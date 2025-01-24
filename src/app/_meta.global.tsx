import { MetaRecord } from 'nextra'

const HACKATHON: MetaRecord = {
  organizer: '',
  // mermaid: '',
  // 'tailwind-css': '',
  // latex: '',
  // table: '',
  // typescript: '',
  // remote: '',
  // playground: {
  //   theme: {
  //     layout: 'full',
  //   },
  // },
}

export default {
  index: {
    type: 'page',
    display: 'hidden',
  },
  guide: {
    type: 'page',
    title: 'Guide',
    items: {
      index: '',
      hackathon: {
        items: HACKATHON,
      },
    },
  },
  resource: {
    type: 'page',
    title: 'Resource',
  },
}
