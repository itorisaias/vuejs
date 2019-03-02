import Dog from '@/views/Dog/Dog'
import DogList from '@/views/Dog/DogList'
import Dogs from '@/views/Dog/Dogs'

export default {
  path: '/dog',
  component: Dogs,
  children: [
    {
      path: '',
      component: DogList
    },
    {
      path: 'new',
      component: Dog
    },
    {
      path: ':id',
      component: Dog,
      props: true
    }
  ]
}
