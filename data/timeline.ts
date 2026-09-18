export interface TimelineItem {
  id: number
  date: string
  title: string
  description: string
  image: string
  uploadable?: boolean
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
    date: '12/10/2025',
    title: 'Bữa ăn đầu tiên anh nấu cho em',
    description: 'Ăn tối cũng bữa tối =))',
    image: '/images/7.jpg'
  },
  {
    id: 5,
    date: '30/10/2025',
    title: 'Đón em Quýt về nuôi',
    description: 'Mãi mới tìm được 1 con mồm lèo mà 2 đứa đều thích',
    image: '/images/8.jpg'
  },
  {
    id: 6,
    date: '13/11/2025',
    title: 'Bức ảnh đầu tiên chụp cùng nhau',
    description: 'Hôm đấy mua được ốp đôi nên chụp choẹt tý',
    image: '/images/10.jpg'
  },
  {
    id: 7,
    date: '23/11/2025',
    title: 'Chuyến đi đầu tiên của chúng mình',
    description: 'Ba Vì ơiiiii chúng tôi tới đây.',
    image: '/images/4.jpg'
  },
  {
    id: 8,
    date: '30/11/2025',
    title: 'Tam đảo đê',
    description: 'Hôm đấy đi chơi vui vcl.',
    image: '/images/6.jpg'
  },
  {
    id: 9,
    date: '08/12/2025',
    title: 'Đón thêm em Táo',
    description: 'Chỉ vì 1 mình sợ Quýt một mình buồn nên mới đón thêm thằng đầu hai mái dái âm dương về chơi cùng.',
    image: '/images/9.jpg'
  },
  {
    id: 10,
    date: '11/01/2026',
    title: 'Đi chụp ảnh cho em',
    description: 'Hôm đấy bảnh quá nên có mấy em gái đi qua khen đẹp trai hẹ hẹ hẹ.',
    image: '/images/5.jpg'
  },
  {
    id: 11,
    date: '16/05/2026',
    title: 'Lần đầu tiên đi chụp photo book',
    description: 'Lần đầu tiên của đời t luôn ạ.',
    image: '/images/11.jpg'
  },
  {
    id: 12,
    date: '12/08/2026',
    title: 'Em đi vào Nam chơi với cả nhà',
    description: 'Bốn ngày không call với nhau nhớ vcl nhớ.',
    image: '/images/.jpg'
  },
  {
    id: 13,
    date: '09/10/2026',
    title: 'Một năm bên nhau',
    description: 'Một năm qua có quá nhiều thứ thay đổi nhưng chúng ta vẫn luôn bước cùng nhau.',
    image: '',
    uploadable: true
  }
]