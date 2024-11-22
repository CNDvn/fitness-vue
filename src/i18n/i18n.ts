import { currentLanguage } from './constant'

const metadata = {
  vn: {
    home: 'Trang chủ',
    diary: 'Nhật ký',
    workout: 'Tập luyện',
    meal: 'Bữa ăn',
    me: 'Tôi',
    age: 'Tuổi',
    goal: 'Mục tiêu',
    caloDay: 'Calo/ngày',
    profile: 'Thông tin',
    progress: 'Tiến độ',
  },
  en: {
    home: 'Home',
    diary: 'Diary',
    workout: 'Workout',
    meal: 'Meal',
    me: 'Me',
    age: 'Age',
    goal: 'Goal',
    caloDay: 'Calo/Day',
    profile: 'Profile',
    progress: 'My Progress',
  },
}

export const i18n = () => metadata[currentLanguage]
