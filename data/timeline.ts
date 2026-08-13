export interface TimelineItem {
  id: number
  date: string
  title: string
  description: string
  image: string
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    date: '04/09/2025',
    title: 'Lần đầu gặp nhau',
    description: 'Hôm đấy không có ý định thêm vào menu nên không có chụp ảnh =))).',
    image: '/images/1.jpg'
  },
  {
    id: 2,
    date: '18/09/2025',
    title: 'Anh đưa em đi tiêm và đi mua hoa.',
    description: 'Hôm đó em cắn anh hơi nhiều đấy, nhưng mà em xinh nên được tha thứ.',
    image: '/images/2.jpg'
  },
  {
    id: 3,
    date: '09/10/2025',
    title: 'Anh tỏ tình với em',
    description: 'Anh nhớ hôm đó anh nói mãi em mới chịu đi chơi cùng anh rồi anh cũng tỏ tình với em...Nhưng mà đèo mẹ em deo đồng ý và đến bây giờ Vẫn chưa =)).',
    image: '/images/3.jpg'
  },
  {
    id: 4,
    date: '23/11/2025',
    title: 'Chuyến đi đầu tiên của chúng mình',
    description: 'Ba Vì ơiiiii chúng tôi tới đây.',
    image: '/images/4.jpg'
  },
  {
    id: 5,
    date: '09/10/2026',
    title: 'Một năm bên nhau',
    description: 'Một năm qua có quá nhiều thứ thay đổi nhưng chúng ta vẫn luôn bước cùng nhau.',
    image: '/images/5.jpg'
  }
]